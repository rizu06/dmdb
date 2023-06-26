"use strict";
exports.id = 9889;
exports.ids = [9889];
exports.modules = {

/***/ 9889:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gr": () => (/* binding */ getUrl),
/* harmony export */   "z6": () => (/* binding */ getGenre),
/* harmony export */   "yC": () => (/* binding */ search),
/* harmony export */   "qF": () => (/* binding */ searchMovie),
/* harmony export */   "eo": () => (/* binding */ searchTv),
/* harmony export */   "YB": () => (/* binding */ movieUpcoming),
/* harmony export */   "FU": () => (/* binding */ tvOnTheAir),
/* harmony export */   "bs": () => (/* binding */ tvTopRated),
/* harmony export */   "Zu": () => (/* binding */ genreMovie),
/* harmony export */   "i_": () => (/* binding */ genreTV),
/* harmony export */   "ui": () => (/* binding */ discoverMovie),
/* harmony export */   "mP": () => (/* binding */ discoverTV)
/* harmony export */ });
/* unused harmony exports getUrl2, getMovieDetail, getMovieCasts, getTvDetail, getTvCasts, trendingAllDay, trendingAllWeek, trendingMovieDay, trendingMovieWeek, trendingTvDay, trendingTvWeek, moviePopular, movieNowPlaying, movieTopRated, movieLatest, tvPopular, tvAiringToday */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_0__]);
_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// export function getUrl(endpoint, optional = '') {
//   return `${TMDB_ENDPOINT}/${endpoint}?api_key=${TMDB_API_KEY}${optional}`
// }
function getUrl(endpoint, id, genre, page) {
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/${endpoint}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}&with_genres=${id}&name=${genre}&page=${page}`;
}
// TODO: Change the function name
function getUrl2(endpoint, page) {
    return `${TMDB_ENDPOINT}/${endpoint}?api_key=${TMDB_API_KEY}&page=${page}`;
}
function getGenre(endpoint) {
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/${endpoint}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}`;
}
function getMovieDetail(id) {
    return `${TMDB_ENDPOINT}/movie/${id}?api_key=${TMDB_API_KEY}`;
}
function getMovieCasts(id) {
    return `${TMDB_ENDPOINT}/movie/${id}/credits?api_key=${TMDB_API_KEY}`;
}
function getTvDetail(id) {
    return `${TMDB_ENDPOINT}/tv/${id}?api_key=${TMDB_API_KEY}`;
}
function getTvCasts(id) {
    return `${TMDB_ENDPOINT}/tv/${id}/credits?api_key=${TMDB_API_KEY}`;
}
// Search for movies and tv series
function search(query, page) {
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/search/multi?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}&query=${encodeURIComponent(query)}&page=${page}`;
}
// Search for movies only
function searchMovie(query, page) {
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/search/movie?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}&query=${encodeURIComponent(query)}&page=${page}`;
}
// Search for tv series only
function searchTv(query, page) {
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/search/tv?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}&query=${encodeURIComponent(query)}&page=${page}`;
}
// Trending
const trendingAllDay = 'trending/all/day';
const trendingAllWeek = 'trending/all/week';
const trendingMovieDay = 'trending/movie/day';
const trendingMovieWeek = 'trending/movie/week';
const trendingTvDay = 'trending/tv/day';
const trendingTvWeek = 'trending/tv/week';
// Movie
const moviePopular = 'movie/popular';
const movieNowPlaying = 'movie/now_playing';
const movieUpcoming = 'movie/upcoming';
const movieTopRated = 'movie/top_rated';
const movieLatest = 'movie/latest';
// TV
const tvPopular = 'tv/popular';
const tvAiringToday = 'tv/airing_today';
const tvOnTheAir = 'tv/on_the_air';
const tvTopRated = 'tv/top_rated';
// Genre
const genreMovie = '/genre/movie/list';
const genreTV = '/genre/tv/list';
// Discover
const discoverMovie = 'discover/movie';
const discoverTV = 'discover/tv';

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;