import fs from 'fs';
import { performance } from 'perf_hooks';
import pLimit from 'p-limit';

// Import all provider categories dynamically
import * as Consumet from '@consumet/extensions';

interface ProviderResult {
  provider: string;
  baseUrl: string;
  status: number;
  responseTime: string;
  lastChecked: string;
  error?: string;
  category: string;
}

interface CategoryResults {
  category: string;
  providers: ProviderResult[];
}

const CATEGORY_QUERIES: Record<string, string> = {
  ANIME: 'One Piece',
  BOOKS: 'One Hundred Years of Solitude',
  MOVIES: 'batman',
  COMICS: 'batman',
  LIGHT_NOVELS: 'classroom of the elite',
  MANGA: 'Naruto',
  NEWS: '',
  META: 'One Piece',
};

const CONCURRENCY_LIMIT = 5;
const TIMEOUT_MS = 30000; 

async function testProvider(
  ProviderClass: any,
  providerName: string,
  category: string
): Promise<ProviderResult> {
  const startTime = performance.now();
  
  let providerInstance: any;
  try {
    providerInstance = new ProviderClass();
  } catch (error: any) {
    return {
      provider: providerName,
      baseUrl: 'N/A',
      status: 500,
      responseTime: 'N/A',
      lastChecked: new Date().toISOString(),
      category,
      error: `Failed to instantiate: ${error.message}`,
    };
  }

  const result: ProviderResult = {
    provider: providerInstance.name || providerName,
    baseUrl: providerInstance.baseUrl || providerInstance.toString() || 'N/A',
    status: 500,
    responseTime: 'N/A',
    lastChecked: new Date().toISOString(),
    category,
  };

  try {
    const query = CATEGORY_QUERIES[category] || 'test';

    // Special handling for providers without search
    if (providerName === 'ANN' || !providerInstance.search) {
      result.status = 200;
      result.responseTime = ((performance.now() - startTime) / 1000).toPrecision(3) + 's';
      return result;
    }

    // Create timeout promise with cleanup
    let timeoutId: any;
    const timeoutPromise = new Promise((_, reject) => {
      timeoutId = setTimeout(() => reject(new Error('Timeout')), TIMEOUT_MS);
    });

    // Test the provider with timeout
    const searchPromise = providerInstance.search(query);
    
    try {
      const searchResult = await Promise.race([searchPromise, timeoutPromise]);
      
      // Clear timeout if search completed first
      clearTimeout(timeoutId);

      const endTime = performance.now();
      const responseTime = ((endTime - startTime) / 1000).toPrecision(3) + 's';

      // Check if results exist
      let hasResults = false;
      if (providerName === 'Libgen') {
        hasResults = !!searchResult;
      } else if (providerName === 'GetComics') {
        hasResults = !!(searchResult as any)?.containers;
      } else {
        hasResults = !!(searchResult as any)?.results && (searchResult as any).results.length > 0;
      }

      if (hasResults) {
        result.status = 200;
        result.responseTime = responseTime;
      } else {
        result.error = 'No results returned';
      }
    } catch (raceError: any) {
      // Clear timeout on error
      clearTimeout(timeoutId);
      throw raceError;
    }
  } catch (error: any) {
    result.error = error.message || 'Unknown error';
    console.error(`${result.provider}: ${result.error}`);
  }

  return result;
}

async function checkAllProviders() {
  console.log('Starting provider status check (auto-discovering from @consumet/extensions)...\n');

  // Dynamically discover all categories from Consumet
  const categoryNames = ['ANIME', 'MANGA', 'MOVIES', 'BOOKS', 'COMICS', 'LIGHT_NOVELS', 'META', 'NEWS'];
  const categoriesWithResults: CategoryResults[] = [];

  const limit = pLimit(CONCURRENCY_LIMIT);

  for (const categoryName of categoryNames) {
    const categoryModule = (Consumet as any)[categoryName];
    
    if (!categoryModule || typeof categoryModule !== 'object') {
      console.log(`Category ${categoryName} not found, skipping...`);
      continue;
    }

    const providerNames = Object.keys(categoryModule);
    console.log(`Found ${providerNames.length} providers in ${categoryName}`);

    const testPromises: Promise<ProviderResult>[] = [];

    for (const providerName of providerNames) {
      const ProviderClass = categoryModule[providerName];
      
      testPromises.push(
        limit(() => {
          console.log(`Testing ${categoryName}.${providerName}...`);
          return testProvider(ProviderClass, providerName, categoryName);
        })
      );
    }

    const results = await Promise.all(testPromises);
    
    // Sort: Working providers first (by name), then failed providers (by name)
    const sortedResults = results.sort((a, b) => {
      // If status is different, working (200) comes first
      if (a.status !== b.status) {
        return a.status === 200 ? -1 : 1; // 200 comes first
      }
      // If same status, sort alphabetically
      return a.provider.localeCompare(b.provider);
    });
    
    categoriesWithResults.push({
      category: categoryName,
      providers: sortedResults,
    });
  }

  let readmeOutput = '# Consumet Providers Status(upto-date version)\n\n';
  readmeOutput += `Last updated: ${new Date().toISOString()}\n\n`;

  let totalProviders = 0;
  let workingProviders = 0;

  for (const categoryResult of categoriesWithResults) {
    readmeOutput += `## ${categoryResult.category}\n\n`;
    readmeOutput += '| **Provider** | **Status** | **Response Time** |\n';
    readmeOutput += '|:------------|:--------:|:-----------------:|\n';

    for (const result of categoryResult.providers) {
      totalProviders++;
      const statusIcon = result.status === 200 ? '🟢' : '🔴';
      const statusCode = result.status;
      const time = result.responseTime;

      if (result.status === 200) {
        workingProviders++;
        readmeOutput += `| [${result.provider}](${result.baseUrl}) | ${statusIcon} ${statusCode} | ${time} |\n`;
      } else {
        readmeOutput += `| [${result.provider}](${result.baseUrl}) | ${statusIcon} ${statusCode} | ${time} |\n`;
      }
    }

    readmeOutput += '\n';
  }

  const uptimePercent = ((workingProviders / totalProviders) * 100).toFixed(1);
  readmeOutput += '---\n\n';
  readmeOutput += '## Summary\n\n';
  readmeOutput += `- **Total Providers**: ${totalProviders}\n`;
  readmeOutput += `- **Working**: ${workingProviders} 🟢\n`;
  readmeOutput += `- **Failed**: ${totalProviders - workingProviders} 🔴\n`;
  readmeOutput += `- **Uptime**: ${uptimePercent}%\n`;

  fs.writeFileSync('./README.md', readmeOutput);
  console.log('\nREADME.md updated with categories');

  const jsonOutput = {
    lastUpdated: new Date().toISOString(),
    totalProviders,
    workingProviders,
    failedProviders: totalProviders - workingProviders,
    uptimePercent: parseFloat(uptimePercent),
    categories: categoriesWithResults,
  };

  fs.writeFileSync('./status.json', JSON.stringify(jsonOutput, null, 2));
  console.log('status.json created');

  console.log('\nSummary:');
  console.log(`   Total: ${totalProviders}`);
  console.log(`   Working: ${workingProviders}`);
  console.log(`   Failed: ${totalProviders - workingProviders}`);
  console.log(`   Uptime: ${uptimePercent}%`);
}

checkAllProviders()
  .then(() => {
    console.log('\n✅ Provider status check completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
