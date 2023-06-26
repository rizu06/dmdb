"use strict";
(() => {
var exports = {};
exports.id = 7322;
exports.ids = [7322];
exports.modules = {

/***/ 916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CollectionSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5426);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4461);
/* harmony import */ var _components_PaginationImproved__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5971);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2652);
/* harmony import */ var _lib_tmdb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9889);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CollectionSearch__WEBPACK_IMPORTED_MODULE_2__, _lib_tmdb__WEBPACK_IMPORTED_MODULE_6__, _utils__WEBPACK_IMPORTED_MODULE_7__]);
([_components_CollectionSearch__WEBPACK_IMPORTED_MODULE_2__, _lib_tmdb__WEBPACK_IMPORTED_MODULE_6__, _utils__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Search({ data , id , page  }) {
    const currentPage = Number(page);
    const isFirst = currentPage === 1;
    const isLast = data ? currentPage === data.total_pages : false;
    const filteredResults = data ? data.results.filter((item)=>item.media_type !== 'person'
    ) : [];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        id,
                        " - Search Results | Entertainment App"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                placeholder: "Search for movies or TV series",
                searchPath: _utils__WEBPACK_IMPORTED_MODULE_7__/* .pathToSearchAll */ .FV
            }),
            data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CollectionSearch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        arr: filteredResults,
                        searchTerm: id,
                        totalResult: data.total_results
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationImproved__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        currentPageAdvance: currentPage + 1,
                        currentPage: currentPage,
                        prevHref: `${_utils__WEBPACK_IMPORTED_MODULE_7__/* .pathToSearchAll */ .FV}${id}?page=${currentPage - 1}`,
                        nextHref: `${_utils__WEBPACK_IMPORTED_MODULE_7__/* .pathToSearchAll */ .FV}${id}?page=${currentPage + 1}`,
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
    const { id , page  } = context.query;
    const url = (0,_lib_tmdb__WEBPACK_IMPORTED_MODULE_6__/* .search */ .yC)(id, page);
    const response = await fetch(url);
    const data = await response.json();
    return {
        props: {
            data,
            id,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7190,676,1664,5675,656,3776,2827,9889], () => (__webpack_exec__(916)));
module.exports = __webpack_exports__;

})();