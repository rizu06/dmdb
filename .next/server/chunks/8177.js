"use strict";
exports.id = 8177;
exports.ids = [8177];
exports.modules = {

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilmCasts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function FilmCasts({ casts  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-2 md:text-lg",
                children: "Casts"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "flex flex-wrap text-xs md:text-sm",
                children: renderCasts(casts)
            })
        ]
    }));
};
function renderCasts(arr) {
    if (arr.length !== 0) {
        return arr.map((cast)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "mr-2 mb-2 flex items-center justify-center rounded-md border-[1px] py-px px-2 text-app-pure-white",
                children: cast.name
            }, cast.credit_id));
        });
    } else {
        return 'N/A';
    }
}


/***/ }),

/***/ 2964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilmGenres)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function FilmGenres({ genres  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-2 md:text-lg",
                children: "Genres"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "flex flex-wrap text-xs font-light md:text-sm",
                children: renderGenres(genres)
            })
        ]
    }));
};
function renderGenres(arr) {
    if (arr.length !== 0) {
        return arr.map((genre)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "mr-2 mb-2 flex items-center justify-center rounded-md border-none bg-app-pure-white py-px px-2 text-center font-medium text-app-dark-blue",
                children: genre.name
            }, genre.id));
        });
    } else {
        return 'N/A';
    }
}


/***/ }),

/***/ 288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilmHeading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function FilmHeading({ tagline , title  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-6 mb-2 text-center md:mt-0 md:mb-4 md:text-left",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mb-1 text-3xl font-light md:mb-3 md:text-5xl",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-xs font-light text-app-placeholder sm:text-sm md:text-lg",
                children: tagline
            })
        ]
    }));
};


/***/ }),

/***/ 3289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilmImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_2__]);
_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function FilmImage({ src , title  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "px-20 text-center md:pr-8 md:pl-0 lg:w-2/5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: "rounded-lg",
            src: `${_utils__WEBPACK_IMPORTED_MODULE_2__/* .TMDB_IMAGE_ENDPOINT */ .wC}/${src}`,
            alt: title,
            width: 350,
            height: 530,
            placeholder: "blur",
            blurDataURL: `data:image/svg+xml;base64,${(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .toBase64 */ .s3)((0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .shimmer */ .f8)(350, 530))}`,
            unoptimized: true
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilmInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function FilmInfo({ firstAir , lastAir , language , length , media_type , status , year ,  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: media_type === 'movie' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mb-6 flex items-center justify-between text-left text-sm lg:w-10/12 lg:text-lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-1 text-app-placeholder",
                            children: "Length"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-app-pure-white",
                            children: length
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-1 text-app-placeholder",
                            children: "Language"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-app-pure-white",
                            children: language
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-1 text-app-placeholder",
                            children: "Year"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-app-pure-white",
                            children: year
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-1 text-app-placeholder",
                            children: "Status"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-app-pure-white",
                            children: status
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mb-6 flex items-center justify-between text-left text-sm lg:w-11/12 lg:text-lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-1 text-app-placeholder",
                            children: "Language"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-app-pure-white",
                            children: language
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-1 text-app-placeholder",
                            children: "First Air"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-app-pure-white",
                            children: firstAir
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-1 text-app-placeholder",
                            children: "Last Air"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-app-pure-white",
                            children: lastAir
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-1 text-app-placeholder",
                            children: "Status"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-app-pure-white",
                            children: status
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ }),

/***/ 3144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilmRating)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6419);
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rating__WEBPACK_IMPORTED_MODULE_2__);



function FilmRating({ number  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6 flex flex-col items-center text-center md:flex-row md:items-center md:text-left",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-2 text-4xl font-medium md:mr-4 md:mb-0",
                children: number
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_rating__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "align-center flex self-center",
                initialRating: number,
                emptySymbol: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaRegStar, {}),
                fullSymbol: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStar, {}),
                readonly: true
            })
        ]
    }));
};


/***/ }),

/***/ 3615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilmResources)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


function FilmResources({ website , imdb , trailer  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-10 flex flex-wrap",
        children: [
            website === '' || website === undefined ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                href: website,
                className: "mb-4 mr-4 flex w-40 cursor-pointer items-center justify-between rounded-md border-none bg-app-greyish-blue py-3 px-8 text-sm font-medium text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue",
                target: "_blank",
                rel: "noreferrer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLink, {
                        className: "text-base"
                    })
                ]
            }),
            !imdb ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                href: `https://www.imdb.com/title/${imdb}`,
                className: "mb-4 flex w-40 cursor-pointer items-center justify-between rounded-md border-none bg-app-greyish-blue py-3 px-8 text-sm font-medium text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue",
                target: "_blank",
                rel: "noreferrer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "IMDB"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaImdb, {
                        className: "text-base"
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 4729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilmSynopsis)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function FilmSynopsis({ synopsis  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-1 md:text-lg",
                children: "Synopsis"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "font-light",
                children: synopsis ? synopsis : 'N/A'
            })
        ]
    }));
};


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


/***/ }),

/***/ 8177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Movie),
/* harmony export */   "renderRating": () => (/* binding */ renderRating),
/* harmony export */   "renderLanguage": () => (/* binding */ renderLanguage),
/* harmony export */   "renderStatus": () => (/* binding */ renderStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var _components_FilmCasts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(661);
/* harmony import */ var _components_FilmGenres__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2964);
/* harmony import */ var _components_FilmHeading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(288);
/* harmony import */ var _components_FilmImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3289);
/* harmony import */ var _components_FilmInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3178);
/* harmony import */ var _components_FilmRating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3144);
/* harmony import */ var _components_FilmResources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3615);
/* harmony import */ var _components_FilmSynopsis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4729);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4461);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2652);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__, _components_FilmImage__WEBPACK_IMPORTED_MODULE_7__, _utils__WEBPACK_IMPORTED_MODULE_14__]);
([swr__WEBPACK_IMPORTED_MODULE_3__, _components_FilmImage__WEBPACK_IMPORTED_MODULE_7__, _utils__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Movie() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id  } = router.query;
    const { data: movie , error: movieError  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(`/api/movie/${id}`, _utils__WEBPACK_IMPORTED_MODULE_14__/* .fetcher */ ._i);
    if (movieError) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: movieError
    }));
    if (!movie) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: movieError
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        movie.detail.title,
                        " | Entertainment App"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                placeholder: "Search for movies",
                searchPath: _utils__WEBPACK_IMPORTED_MODULE_14__/* .pathToSearchMovie */ .Pw
            }),
            movie ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FilmImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        src: movie.detail.poster_path,
                        title: movie.detail.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "md:w-3/5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FilmHeading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                tagline: movie.detail.tagline,
                                title: movie.detail.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FilmRating__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                number: renderRating(movie.detail.vote_average)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FilmInfo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                media_type: "movie",
                                language: renderLanguage(movie.detail.spoken_languages || []),
                                length: renderLength(movie.detail.runtime),
                                status: renderStatus(movie.detailstatus),
                                year: renderYear(movie.detail.release_date)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FilmGenres__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                genres: movie.detail.genres || []
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FilmSynopsis__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                synopsis: movie.detail.overview
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FilmCasts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                casts: movie.credits.cast
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FilmResources__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                website: movie.detail.homepage,
                                imdb: movie.detail.imdb_id
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    }));
};
function renderRating(rating) {
    if (rating !== undefined) {
        return (rating / 2).toFixed(1);
    } else {
        return 0;
    }
}
function renderLength(runtime) {
    if (runtime !== 0 && runtime !== undefined) {
        return runtime + ' min.';
    } else {
        return 'N/A';
    }
}
function renderLanguage(languages) {
    if (languages.length !== 0) {
        return languages[0].name;
    } else {
        return 'N/A';
    }
}
function renderYear(year) {
    if (!year) {
        return 'N/A';
    } else {
        return year.substring(0, 4);
    }
}
function renderStatus(status) {
    if (!status) {
        return 'N/A';
    } else {
        return status;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;