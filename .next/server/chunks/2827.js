"use strict";
exports.id = 2827;
exports.ids = [2827];
exports.modules = {

/***/ 5426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CollectionSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5313);
/* harmony import */ var _CardNormal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7982);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_1__, _CardNormal__WEBPACK_IMPORTED_MODULE_2__]);
([_utils__WEBPACK_IMPORTED_MODULE_1__, _CardNormal__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function CollectionSearch({ arr =[] , isGenre , limit =20 , media_type ='movie' , searchTerm ='' , totalResult =0 ,  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !isGenre ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "md:heading-lg mb-6 text-xl font-light lg:mb-8",
                children: `Found ${totalResult} results for '${searchTerm}'`
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "card-collection-wrapper",
                children: (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .renderResults */ .Z1)((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .sliceArray */ .WQ)(arr, limit), _CardNormal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, media_type)
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PaginationImproved)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__(1946);
;// CONCATENATED MODULE: ./components/Pagination.js



function Pagination({ currentPage , prevHref , nextHref , isFirst , isLast , goToPreviousPage , goToNextPage , totalPages ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-16 flex items-center justify-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: prevHref,
                as: prevHref,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    onClick: goToPreviousPage,
                    className: isFirst ? 'disabled-link flex cursor-not-allowed items-center justify-center rounded-lg rounded-r-none border-2 py-2 pl-4 pr-6 font-medium' : 'flex items-center justify-center rounded-lg rounded-r-none border-2 py-2 pl-4 pr-6 font-medium hover:bg-app-pure-white hover:text-app-dark-blue',
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ti_.TiArrowLeftThick, {
                            className: "mr-2"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Prev"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "border-t-2 border-b-2 bg-app-pure-white py-2 px-4 text-app-dark-blue",
                children: [
                    "Page ",
                    currentPage,
                    " of ",
                    totalPages
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: nextHref,
                as: nextHref,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    onClick: goToNextPage,
                    className: isLast ? 'disabled-link flex cursor-not-allowed items-center justify-center rounded-lg rounded-l-none border-2 py-2 pr-4 pl-6 font-medium' : 'flex items-center justify-center rounded-lg rounded-l-none border-2 py-2 pr-4 pl-6 font-medium hover:bg-app-pure-white hover:text-app-dark-blue',
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Next"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ti_.TiArrowRightThick, {
                            className: "ml-2"
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/PaginationImproved.js


function PaginationImproved({ currentPageAdvance , currentPage , prevHref , nextHref , isFirst , isLast , goToPreviousPage , goToNextPage , totalPages ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: 'none'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                    currentPage: currentPageAdvance,
                    prevHref: prevHref,
                    nextHref: nextHref,
                    isFirst: isFirst,
                    isLast: isLast,
                    goToPreviousPage: goToPreviousPage,
                    goToNextPage: goToNextPage,
                    totalPages: totalPages
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                currentPage: currentPage,
                prevHref: prevHref,
                nextHref: nextHref,
                isFirst: isFirst,
                isLast: isLast,
                goToPreviousPage: goToPreviousPage,
                goToNextPage: goToNextPage,
                totalPages: totalPages
            })
        ]
    }));
};


/***/ })

};
;