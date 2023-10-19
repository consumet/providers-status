/*GENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.*/


import {ANIME, BOOKS, MANGA, COMICS, LIGHT_NOVELS, MOVIES, META, NEWS} from '@consumet/extensions'
import fs from "fs"
import {performance} from "perf_hooks"

const start = async() => {
 let output = '| **provider** | **Status** | **Time** |\n|:--------:|:------:|:----:|\n'
 let t0, t1 = performance.now()
	const NineAnime = new ANIME.NineAnime()
 try {
	t0 = performance.now()
	 const NineAnimeRes = await NineAnime.search("One Piece")
	 t1 = performance.now()
	if (NineAnimeRes.results){
		 output += `|  [${NineAnime.name}](https://9anime.pl)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${NineAnime.name}](https://9anime.pl)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${NineAnime.name}](https://9anime.pl) | 🔴 500 | N/A |\n`
	}
	const AnimeFox = new ANIME.AnimeFox()
 try {
	t0 = performance.now()
	 const AnimeFoxRes = await AnimeFox.search("One Piece")
	 t1 = performance.now()
	if (AnimeFoxRes.results){
		 output += `|  [${AnimeFox.name}](https://animefox.tv)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${AnimeFox.name}](https://animefox.tv)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${AnimeFox.name}](https://animefox.tv) | 🔴 500 | N/A |\n`
	}
	const AnimePahe = new ANIME.AnimePahe()
 try {
	t0 = performance.now()
	 const AnimePaheRes = await AnimePahe.search("One Piece")
	 t1 = performance.now()
	if (AnimePaheRes.results){
		 output += `|  [${AnimePahe.name}](https://animepahe.com)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${AnimePahe.name}](https://animepahe.com)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${AnimePahe.name}](https://animepahe.com) | 🔴 500 | N/A |\n`
	}
	const Bilibili = new ANIME.Bilibili()
 try {
	t0 = performance.now()
	 const BilibiliRes = await Bilibili.search("One Piece")
	 t1 = performance.now()
	if (BilibiliRes.results){
		 output += `|  [${Bilibili.name}](https://bilibili.tv)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Bilibili.name}](https://bilibili.tv)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Bilibili.name}](https://bilibili.tv) | 🔴 500 | N/A |\n`
	}
	const Crunchyroll = new ANIME.Crunchyroll()
 try {
	t0 = performance.now()
	 const CrunchyrollRes = await Crunchyroll.search("One Piece")
	 t1 = performance.now()
	if (CrunchyrollRes.results){
		 output += `|  [${Crunchyroll.name}](https://cronchy.consumet.stream)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Crunchyroll.name}](https://cronchy.consumet.stream)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Crunchyroll.name}](https://cronchy.consumet.stream) | 🔴 500 | N/A |\n`
	}
	const Gogoanime = new ANIME.Gogoanime()
 try {
	t0 = performance.now()
	 const GogoanimeRes = await Gogoanime.search("One Piece")
	 t1 = performance.now()
	if (GogoanimeRes.results){
		 output += `|  [${Gogoanime.name}](https://gogoanimehd.io)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Gogoanime.name}](https://gogoanimehd.io)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Gogoanime.name}](https://gogoanimehd.io) | 🔴 500 | N/A |\n`
	}
	const Marin = new ANIME.Marin()
 try {
	t0 = performance.now()
	 const MarinRes = await Marin.search("One Piece")
	 t1 = performance.now()
	if (MarinRes.results){
		 output += `|  [${Marin.name}](https://marin.moe)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Marin.name}](https://marin.moe)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Marin.name}](https://marin.moe) | 🔴 500 | N/A |\n`
	}
	const Zoro = new ANIME.Zoro()
 try {
	t0 = performance.now()
	 const ZoroRes = await Zoro.search("One Piece")
	 t1 = performance.now()
	if (ZoroRes.results){
		 output += `|  [${Zoro.name}](https://aniwatch.to)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Zoro.name}](https://aniwatch.to)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Zoro.name}](https://aniwatch.to) | 🔴 500 | N/A |\n`
	}
	const Anify = new ANIME.Anify()
 try {
	t0 = performance.now()
	 const AnifyRes = await Anify.search("One Piece")
	 t1 = performance.now()
	if (AnifyRes.results){
		 output += `|  [${Anify.name}](https://api.anify.tv)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Anify.name}](https://api.anify.tv)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Anify.name}](https://api.anify.tv) | 🔴 500 | N/A |\n`
	}
	const BRMangas = new MANGA.BRMangas()
 try {
	t0 = performance.now()
	 const BRMangasRes = await BRMangas.search("A")
	 t1 = performance.now()
	if (BRMangasRes.results){
		 output += `|  [${BRMangas.name}](https://www.brmangas.net)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${BRMangas.name}](https://www.brmangas.net)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${BRMangas.name}](https://www.brmangas.net) | 🔴 500 | N/A |\n`
	}
	const ComicK = new MANGA.ComicK()
 try {
	t0 = performance.now()
	 const ComicKRes = await ComicK.search("A")
	 t1 = performance.now()
	if (ComicKRes.results){
		 output += `|  [${ComicK.name}](https://comick.app)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${ComicK.name}](https://comick.app)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${ComicK.name}](https://comick.app) | 🔴 500 | N/A |\n`
	}
	const FlameScans = new MANGA.FlameScans()
 try {
	t0 = performance.now()
	 const FlameScansRes = await FlameScans.search("A")
	 t1 = performance.now()
	if (FlameScansRes.results){
		 output += `|  [${FlameScans.name}](https://flamescans.org/)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${FlameScans.name}](https://flamescans.org/)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${FlameScans.name}](https://flamescans.org/) | 🔴 500 | N/A |\n`
	}
	const MangaDex = new MANGA.MangaDex()
 try {
	t0 = performance.now()
	 const MangaDexRes = await MangaDex.search("A")
	 t1 = performance.now()
	if (MangaDexRes.results){
		 output += `|  [${MangaDex.name}](https://mangadex.org)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${MangaDex.name}](https://mangadex.org)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${MangaDex.name}](https://mangadex.org) | 🔴 500 | N/A |\n`
	}
	const MangaHere = new MANGA.MangaHere()
 try {
	t0 = performance.now()
	 const MangaHereRes = await MangaHere.search("A")
	 t1 = performance.now()
	if (MangaHereRes.results){
		 output += `|  [${MangaHere.name}](http://www.mangahere.cc)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${MangaHere.name}](http://www.mangahere.cc)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${MangaHere.name}](http://www.mangahere.cc) | 🔴 500 | N/A |\n`
	}
	const MangaHost = new MANGA.MangaHost()
 try {
	t0 = performance.now()
	 const MangaHostRes = await MangaHost.search("A")
	 t1 = performance.now()
	if (MangaHostRes.results){
		 output += `|  [${MangaHost.name}](https://mangahosted.com)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${MangaHost.name}](https://mangahosted.com)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${MangaHost.name}](https://mangahosted.com) | 🔴 500 | N/A |\n`
	}
	const MangaKakalot = new MANGA.MangaKakalot()
 try {
	t0 = performance.now()
	 const MangaKakalotRes = await MangaKakalot.search("A")
	 t1 = performance.now()
	if (MangaKakalotRes.results){
		 output += `|  [${MangaKakalot.name}](https://mangakakalot.com)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${MangaKakalot.name}](https://mangakakalot.com)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${MangaKakalot.name}](https://mangakakalot.com) | 🔴 500 | N/A |\n`
	}
	const MangaPill = new MANGA.MangaPill()
 try {
	t0 = performance.now()
	 const MangaPillRes = await MangaPill.search("A")
	 t1 = performance.now()
	if (MangaPillRes.results){
		 output += `|  [${MangaPill.name}](https://mangapill.com)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${MangaPill.name}](https://mangapill.com)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${MangaPill.name}](https://mangapill.com) | 🔴 500 | N/A |\n`
	}
	const MangaReader = new MANGA.MangaReader()
 try {
	t0 = performance.now()
	 const MangaReaderRes = await MangaReader.search("A")
	 t1 = performance.now()
	if (MangaReaderRes.results){
		 output += `|  [${MangaReader.name}](https://mangareader.to)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${MangaReader.name}](https://mangareader.to)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${MangaReader.name}](https://mangareader.to) | 🔴 500 | N/A |\n`
	}
	const Mangasee123 = new MANGA.Mangasee123()
 try {
	t0 = performance.now()
	 const Mangasee123Res = await Mangasee123.search("A")
	 t1 = performance.now()
	if (Mangasee123Res.results){
		 output += `|  [${Mangasee123.name}](https://mangasee123.com)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Mangasee123.name}](https://mangasee123.com)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Mangasee123.name}](https://mangasee123.com) | 🔴 500 | N/A |\n`
	}
	const Mangapark = new MANGA.Mangapark()
 try {
	t0 = performance.now()
	 const MangaparkRes = await Mangapark.search("A")
	 t1 = performance.now()
	if (MangaparkRes.results){
		 output += `|  [${Mangapark.name}](https://v2.mangapark.net)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Mangapark.name}](https://v2.mangapark.net)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Mangapark.name}](https://v2.mangapark.net) | 🔴 500 | N/A |\n`
	}
	const Libgen = new BOOKS.Libgen()
 try {
	t0 = performance.now()
	 const LibgenRes = await Libgen.search("One Hundred Years of Solitude")
	 t1 = performance.now()
	if (LibgenRes){
		 output += `| [${Libgen.name}](http://libgen)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Libgen.name}](http://libgen)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Libgen.name}](http://libgen) | 🔴 500 | N/A |\n`
	}
	const GetComics = new COMICS.GetComics()
 try {
	t0 = performance.now()
	 const GetComicsRes = await GetComics.search("batman")
	 t1 = performance.now()
	if (GetComicsRes.containers){
		 output += `|  [${GetComics.name}](https://getcomics.info/)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${GetComics.name}](https://getcomics.info/)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${GetComics.name}](https://getcomics.info/) | 🔴 500 | N/A |\n`
	}
	const ReadLightNovels = new LIGHT_NOVELS.ReadLightNovels()
 try {
	t0 = performance.now()
	 const ReadLightNovelsRes = await ReadLightNovels.search("classroom of the elite")
	 t1 = performance.now()
	if (ReadLightNovelsRes.results){
		 output += `|  [${ReadLightNovels.name}](https://readlightnovels.net)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${ReadLightNovels.name}](https://readlightnovels.net)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${ReadLightNovels.name}](https://readlightnovels.net) | 🔴 500 | N/A |\n`
	}
	const DramaCool = new MOVIES.DramaCool()
 try {
	t0 = performance.now()
	 const DramaCoolRes = await DramaCool.search("batman")
	 t1 = performance.now()
	if (DramaCoolRes.results){
		 output += `|  [${DramaCool.name}](https://dramacool.hr)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${DramaCool.name}](https://dramacool.hr)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${DramaCool.name}](https://dramacool.hr) | 🔴 500 | N/A |\n`
	}
	const FlixHQ = new MOVIES.FlixHQ()
 try {
	t0 = performance.now()
	 const FlixHQRes = await FlixHQ.search("batman")
	 t1 = performance.now()
	if (FlixHQRes.results){
		 output += `|  [${FlixHQ.name}](https://flixhq.to)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${FlixHQ.name}](https://flixhq.to)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${FlixHQ.name}](https://flixhq.to) | 🔴 500 | N/A |\n`
	}
	const Fmovies = new MOVIES.Fmovies()
 try {
	t0 = performance.now()
	 const FmoviesRes = await Fmovies.search("batman")
	 t1 = performance.now()
	if (FmoviesRes.results){
		 output += `|  [${Fmovies.name}](https://fmovies.to)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Fmovies.name}](https://fmovies.to)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Fmovies.name}](https://fmovies.to) | 🔴 500 | N/A |\n`
	}
	const Goku = new MOVIES.Goku()
 try {
	t0 = performance.now()
	 const GokuRes = await Goku.search("batman")
	 t1 = performance.now()
	if (GokuRes.results){
		 output += `|  [${Goku.name}](https://goku.sx)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Goku.name}](https://goku.sx)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Goku.name}](https://goku.sx) | 🔴 500 | N/A |\n`
	}
	const KissAsian = new MOVIES.KissAsian()
 try {
	t0 = performance.now()
	 const KissAsianRes = await KissAsian.search("batman")
	 t1 = performance.now()
	if (KissAsianRes.results){
		 output += `|  [${KissAsian.name}](https://kissasian.mx)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${KissAsian.name}](https://kissasian.mx)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${KissAsian.name}](https://kissasian.mx) | 🔴 500 | N/A |\n`
	}
	const MovieHdWatch = new MOVIES.MovieHdWatch()
 try {
	t0 = performance.now()
	 const MovieHdWatchRes = await MovieHdWatch.search("batman")
	 t1 = performance.now()
	if (MovieHdWatchRes.results){
		 output += `|  [${MovieHdWatch.name}](https://movieshd.watch)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${MovieHdWatch.name}](https://movieshd.watch)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${MovieHdWatch.name}](https://movieshd.watch) | 🔴 500 | N/A |\n`
	}
	const ViewAsian = new MOVIES.ViewAsian()
 try {
	t0 = performance.now()
	 const ViewAsianRes = await ViewAsian.search("batman")
	 t1 = performance.now()
	if (ViewAsianRes.results){
		 output += `|  [${ViewAsian.name}](https://viewasian.co)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${ViewAsian.name}](https://viewasian.co)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${ViewAsian.name}](https://viewasian.co) | 🔴 500 | N/A |\n`
	}
	const ANN = new NEWS.ANN()
 try {
	t0 = performance.now()
	 t1 = performance.now()
		 output += `|  [${ANN.name}](https://www.animenewsnetwork.com)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
} catch (e) {
	 output += `| [${ANN.name}](https://www.animenewsnetwork.com) | 🔴 500 | N/A |\n`
	}
	const Anilist = new META.Anilist()
 try {
	t0 = performance.now()
	 const AnilistRes = await Anilist.search("A")
	 t1 = performance.now()
	if (AnilistRes.results){
		 output += `|  [${Anilist.name}](https://anilist.co)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Anilist.name}](https://anilist.co)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Anilist.name}](https://anilist.co) | 🔴 500 | N/A |\n`
	}
	const Myanimelist = new META.Myanimelist()
 try {
	t0 = performance.now()
	 const MyanimelistRes = await Myanimelist.search("A")
	 t1 = performance.now()
	if (MyanimelistRes.results){
		 output += `|  [${Myanimelist.name}](https://myanimelist.net/)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${Myanimelist.name}](https://myanimelist.net/)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${Myanimelist.name}](https://myanimelist.net/) | 🔴 500 | N/A |\n`
	}
	const TMDB = new META.TMDB()
 try {
	t0 = performance.now()
	 const TMDBRes = await TMDB.search("A")
	 t1 = performance.now()
	if (TMDBRes.results){
		 output += `|  [${TMDB.name}](https://www.themoviedb.org)  | 🟢 200 | ${((t1 - t0) / 1000).toPrecision(3)}s |\n`
	}
	else {
		 output += `|  [${TMDB.name}](https://www.themoviedb.org)  | 🔴 500 | N/A |\n`
	}
} catch (e) {
	 output += `| [${TMDB.name}](https://www.themoviedb.org) | 🔴 500 | N/A |\n`
	}
fs.writeFileSync('./README.md', output)}



start()