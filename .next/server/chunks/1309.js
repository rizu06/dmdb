"use strict";
exports.id = 1309;
exports.ids = [1309];
exports.modules = {

/***/ 1309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Collection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var _lib_tmdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9889);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5313);
/* harmony import */ var _CardNormal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7982);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3510);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, _lib_tmdb__WEBPACK_IMPORTED_MODULE_2__, _utils__WEBPACK_IMPORTED_MODULE_3__, _CardNormal__WEBPACK_IMPORTED_MODULE_4__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, _lib_tmdb__WEBPACK_IMPORTED_MODULE_2__, _utils__WEBPACK_IMPORTED_MODULE_3__, _CardNormal__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Collection({ Component =_CardNormal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z , endpoint , href , isHomePage , isTrending , limit =8 , media_type ='movie' , title , type ='movie'  }) {
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(endpoint, _utils__WEBPACK_IMPORTED_MODULE_3__/* .fetcher */ ._i);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Error occurred"
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: isTrending ? 'mb-6 h-full w-full overflow-hidden md:mb-10 lg:overflow-visible' : 'mb-6 md:mb-10',
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: title,
                    href: href,
                    isHomePage: isHomePage,
                    isTrending: isTrending,
                    media_type: type
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: isTrending ? 'h-scroll relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2' : 'card-collection-wrapper',
                    children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .renderResults */ .Z1)((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .sliceArray */ .WQ)(data.results || [], limit), Component, media_type)
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


function Heading({ href , isHomePage , isTrending , media_type , title ,  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-4 flex items-end justify-between sm:mb-6",
        children: [
            isHomePage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "section-title py-px sm:py-0",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: media_type === 'movie' ? 'ml-2 rounded-md border-2 py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-pure-white sm:ml-4 sm:text-[10px]' : 'ml-2 rounded-md border-2 border-app-pure-white bg-app-pure-white py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-dark-blue sm:ml-4 sm:text-[10px] ',
                        children: media_type
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "section-title",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: href,
                as: href,
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "cursor-pointer text-xs font-medium uppercase tracking-wide text-app-greyish-blue hover:underline",
                    children: "See more"
                })
            })
        ]
    }));
};


/***/ })

};
;