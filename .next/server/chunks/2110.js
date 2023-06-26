"use strict";
exports.id = 2110;
exports.ids = [2110];
exports.modules = {

/***/ 2110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gr": () => (/* binding */ getUrl),
/* harmony export */   "uL": () => (/* binding */ getUrl2),
/* harmony export */   "d0": () => (/* binding */ getMovieDetail),
/* harmony export */   "vQ": () => (/* binding */ getMovieCasts),
/* harmony export */   "Yt": () => (/* binding */ getTvDetail),
/* harmony export */   "sJ": () => (/* binding */ getTvCasts),
/* harmony export */   "_l": () => (/* binding */ trendingMovieDay),
/* harmony export */   "In": () => (/* binding */ trendingTvDay),
/* harmony export */   "qo": () => (/* binding */ moviePopular),
/* harmony export */   "TV": () => (/* binding */ movieNowPlaying),
/* harmony export */   "YB": () => (/* binding */ movieUpcoming),
/* harmony export */   "Ek": () => (/* binding */ movieTopRated),
/* harmony export */   "xj": () => (/* binding */ tvPopular),
/* harmony export */   "VD": () => (/* binding */ tvAiringToday),
/* harmony export */   "FU": () => (/* binding */ tvOnTheAir),
/* harmony export */   "bs": () => (/* binding */ tvTopRated)
/* harmony export */ });
/* unused harmony exports getGenre, search, searchMovie, searchTv, trendingAllDay, trendingAllWeek, trendingMovieWeek, trendingTvWeek, movieLatest, genreMovie, genreTV, discoverMovie, discoverTV */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9730);
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
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/${endpoint}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}&page=${page}`;
}
function getGenre(endpoint) {
    return `${TMDB_ENDPOINT}/${endpoint}?api_key=${TMDB_API_KEY}`;
}
function getMovieDetail(id) {
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/movie/${id}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}`;
}
function getMovieCasts(id) {
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/movie/${id}/credits?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}`;
}
function getTvDetail(id) {
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/tv/${id}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}`;
}
function getTvCasts(id) {
    return `${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_ENDPOINT */ .ws}/tv/${id}/credits?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__/* .TMDB_API_KEY */ .jQ}`;
}
// Search for movies and tv series
function search(query, page) {
    return `${TMDB_ENDPOINT}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
}
// Search for movies only
function searchMovie(query, page) {
    return `${TMDB_ENDPOINT}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
}
// Search for tv series only
function searchTv(query, page) {
    return `${TMDB_ENDPOINT}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
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

/***/ }),

/***/ 9730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ws": () => (/* binding */ TMDB_ENDPOINT),
/* harmony export */   "jQ": () => (/* binding */ TMDB_API_KEY)
/* harmony export */ });
/* unused harmony exports TMDB_IMAGE_ENDPOINT, pathToSearchAll, pathToSearchMovie, pathToSearchTV, fetcher, shimmer, toBase64, renderResults, sliceArray */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);
uuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const TMDB_ENDPOINT = process.env.TMDB_ENDPOINT;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';
const pathToSearchAll = '/search/';
const pathToSearchMovie = '/search/movie/';
const pathToSearchTV = '/search/tv/';
const fetcher = (url)=>fetch(url).then((res)=>res.json()
    )
;
const shimmer = (w, h)=>`
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>
`
;
const toBase64 = (str)=> true ? Buffer.from(str).toString('base64') : 0
;
const renderResults = (array, Component, media_type)=>{
    return array.map((item)=>/*#__PURE__*/ _jsx(Component, {
            id: item.id,
            category: item.media_type || media_type,
            rating: item.adult,
            src: item.backdrop_path ? `${TMDB_IMAGE_ENDPOINT}/${item.backdrop_path}` : `${TMDB_IMAGE_ENDPOINT}/${item.poster_path}`,
            title: item.title ? item.title : item.original_name || item.original_title,
            year: item.release_date || item.first_air_date
        }, item.id || uuidv4())
    );
};
const sliceArray = (arr, limit)=>{
    return arr.slice(0, limit);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;