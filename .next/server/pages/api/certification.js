"use strict";
(() => {
var exports = {};
exports.id = 2477;
exports.ids = [2477];
exports.modules = {

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 8572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_tmdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__]);
_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    try {
        const response = await fetch((0,_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__/* .getUrl */ .Gr)('movie/602334/release_dates'));
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}; // https://api.themoviedb.org/3/movie/{movie_id}/release_dates?api_key=<<api_key>>

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2110], () => (__webpack_exec__(8572)));
module.exports = __webpack_exports__;

})();