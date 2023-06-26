"use strict";
exports.id = 3776;
exports.ids = [3776];
exports.modules = {

/***/ 7969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CardImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_2__]);
_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function CardImage({ isTrending , src , alt  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative w-full rounded-lg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: isTrending ? 'relative h-[140px] w-[240px] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-app-dark-blue after:opacity-50 after:content-[""] sm:h-[230px] sm:w-[470px]' : 'relative h-[133px] md:h-[140px] lg:h-[174px]',
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                className: "rounded-lg",
                src: src,
                alt: alt,
                layout: "fill",
                objectFit: "cover",
                placeholder: "blur",
                blurDataURL: `data:image/svg+xml;base64,${(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .toBase64 */ .s3)((0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .shimmer */ .f8)(240, 140))}`,
                unoptimized: true
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardInfo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/icons/IconCategoryMovie.js

function IconCategoryMovie({ className =''  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: className,
        width: "1em",
        height: "1em",
        viewBox: "0 0 12 12",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z",
            fill: "#FFF",
            opacity: ".75"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/IconCategoryTv.js

function IconCategoryTv({ className  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: className,
        width: "1em",
        height: "1em",
        viewBox: "0 0 12 12",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z",
            fill: "#FFF",
            opacity: ".75"
        })
    }));
};

;// CONCATENATED MODULE: ./components/CardInfo.js



function CardInfo({ category , isTrending , rating , title , year ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: isTrending ? 'absolute left-4 bottom-4 z-40 h-fit w-fit truncate text-ellipsis' : null,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: isTrending ? 'mt-2 mb-1 flex text-[11px] font-light text-app-pure-white md:text-[15px]' : 'mt-2 mb-1 flex text-[11px] font-light text-app-grey md:text-[13px]',
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: renderYear(year)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: isTrending ? 'flex items-center px-[8px] before:content-["•"]' : 'flex items-center px-[6px] before:content-["•"]',
                        children: [
                            renderCategoryIcon(category),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: isTrending ? 'pl-[6px] pr-[6px]' : 'pl-1 pr-1',
                                children: renderCategoryText(category)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: isTrending ? 'md:heading-sm text-ellips w-[200px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[420px] md:h-6' : 'md:heading-xs text-ellips w-[150px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[180px] md:w-[200px] lg:w-[268px]',
                children: title
            })
        ]
    }));
};
function renderYear(year) {
    if (!year) {
        return 'N/A';
    } else {
        return year.substring(0, 4);
    }
}
function renderCategoryIcon(category) {
    if (category === 'movie') {
        return(/*#__PURE__*/ jsx_runtime_.jsx(IconCategoryMovie, {
            className: "pl-1 text-base"
        }));
    } else {
        return(/*#__PURE__*/ jsx_runtime_.jsx(IconCategoryTv, {
            className: "pl-1 text-base"
        }));
    }
}
function renderCategoryText(category) {
    if (category === 'movie') {
        return 'Movie';
    } else {
        return 'TV Series';
    }
}
function renderRating(rating) {
    if (rating === true) {
        return '18+';
    } else {
        return 'E';
    }
}


/***/ }),

/***/ 7982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CardNormal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7969);
/* harmony import */ var _CardInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CardImage__WEBPACK_IMPORTED_MODULE_2__]);
_CardImage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function CardNormal({ id , category , rating , src , title , year  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleClick = ()=>{
        if (category === 'movie') {
            router.push(`/movie/${id}`);
        } else if (category === 'tv') {
            router.push(`/tv/${id}`);
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card-hover-animation mb-4 grow basis-1/5 2xs:w-[130px] xs:w-full cursor-pointer",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                src: src,
                alt: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CardInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: id,
                category: category,
                rating: rating,
                title: title,
                year: year
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-8 flex items-center justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "loader"
        })
    }));
};


/***/ })

};
;