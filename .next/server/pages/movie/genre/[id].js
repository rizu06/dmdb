"use strict";
(() => {
var exports = {};
exports.id = 9704;
exports.ids = [9704];
exports.modules = {

/***/ 8215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ title  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "md:heading-lg mb-6 text-xl font-light capitalize lg:mb-10",
        children: title
    }));
};


/***/ }),

/***/ 3782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenreMovie),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CollectionSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5426);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4461);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8215);
/* harmony import */ var _components_PaginationImproved__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5971);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2652);
/* harmony import */ var _lib_tmdb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9889);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CollectionSearch__WEBPACK_IMPORTED_MODULE_2__, _lib_tmdb__WEBPACK_IMPORTED_MODULE_7__, _utils__WEBPACK_IMPORTED_MODULE_8__]);
([_components_CollectionSearch__WEBPACK_IMPORTED_MODULE_2__, _lib_tmdb__WEBPACK_IMPORTED_MODULE_7__, _utils__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function GenreMovie({ data , id , name , page  }) {
    const currentPage = Number(page);
    const isFirst = currentPage === 1;
    const isLast = currentPage === data.total_pages;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        name,
                        " - Movies | Entertainment App"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                placeholder: "Search for movies",
                searchPath: _utils__WEBPACK_IMPORTED_MODULE_8__/* .pathToSearchMovie */ .Pw
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: name
            }),
            data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CollectionSearch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        isGenre: true,
                        arr: data.results || []
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationImproved__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        currentPageAdvance: currentPage + 1,
                        currentPage: currentPage,
                        prevHref: `/movie/genre/${id}?name=${name}&page=${currentPage - 1}`,
                        nextHref: `/movie/genre/${id}?name=${name}&page=${currentPage + 1}`,
                        isFirst: isFirst,
                        isLast: isLast,
                        goToPreviousPage: ()=>currentPage - 1
                        ,
                        goToNextPage: ()=>currentPage + 1
                        ,
                        totalPages: data.total_pages
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    }));
};
async function getServerSideProps(context) {
    const { id , name , page  } = context.query;
    const url = (0,_lib_tmdb__WEBPACK_IMPORTED_MODULE_7__/* .getUrl */ .Gr)(_lib_tmdb__WEBPACK_IMPORTED_MODULE_7__/* .discoverMovie */ .ui, id, name, page);
    const response = await fetch(url);
    const data = await response.json();
    return {
        props: {
            data,
            id,
            name,
            page
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1946:
/***/ ((module) => {

module.exports = require("react-icons/ti");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7190,676,1664,5675,656,3776,2827,9889], () => (__webpack_exec__(3782)));
module.exports = __webpack_exports__;

})();