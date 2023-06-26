"use strict";
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 2652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/icons/IconSearch.js

function IconSearch({ className  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: className,
        fill: "currentColor",
        width: "1em",
        height: "1em",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/SearchButton.js

function SearchButton() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "submit",
        className: "text-capitalize flex items-center justify-center rounded-md bg-app-greyish-blue py-2 px-3 text-xs text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue",
        children: "Search"
    }));
};

;// CONCATENATED MODULE: ./components/SearchBar.js





function SearchBar({ placeholder ='Search for movies or TV series' , searchPath ,  }) {
    const router = (0,router_.useRouter)();
    const { 0: query , 1: setQuery  } = (0,external_react_.useState)('');
    const handleSearch = (e)=>{
        e.preventDefault();
        if (query.length === 0) {
            return;
        } else {
            router.push(`${searchPath}${query.trim()}?page=1`);
            setQuery('');
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSearch,
        className: "flex grow pb-6 md:pb-10 lg:mt-9",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(IconSearch, {
                className: "h-6 w-6 md:h-8 md:w-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "md:heading-md md:placeholder:heading-md mx-4 w-full rounded-none border-b border-app-dark-blue bg-app-dark-blue pb-[8px] text-base font-light caret-app-red placeholder:text-base placeholder:text-app-placeholder focus:border-b focus:border-app-greyish-blue focus:outline-none",
                type: "text",
                placeholder: placeholder,
                onChange: (e)=>setQuery(e.target.value)
                ,
                value: query
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SearchButton, {})
        ]
    }));
};


/***/ }),

/***/ 5313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ws": () => (/* binding */ TMDB_ENDPOINT),
/* harmony export */   "jQ": () => (/* binding */ TMDB_API_KEY),
/* harmony export */   "wC": () => (/* binding */ TMDB_IMAGE_ENDPOINT),
/* harmony export */   "FV": () => (/* binding */ pathToSearchAll),
/* harmony export */   "Pw": () => (/* binding */ pathToSearchMovie),
/* harmony export */   "sI": () => (/* binding */ pathToSearchTV),
/* harmony export */   "_i": () => (/* binding */ fetcher),
/* harmony export */   "f8": () => (/* binding */ shimmer),
/* harmony export */   "s3": () => (/* binding */ toBase64),
/* harmony export */   "Z1": () => (/* binding */ renderResults),
/* harmony export */   "WQ": () => (/* binding */ sliceArray)
/* harmony export */ });
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
    return array.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            id: item.id,
            category: item.media_type || media_type,
            rating: item.adult,
            src: item.backdrop_path ? `${TMDB_IMAGE_ENDPOINT}/${item.backdrop_path}` : `${TMDB_IMAGE_ENDPOINT}/${item.poster_path}`,
            title: item.title ? item.title : item.original_name || item.original_title,
            year: item.release_date || item.first_air_date
        }, item.id || (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)())
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