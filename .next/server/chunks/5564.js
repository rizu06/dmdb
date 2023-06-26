"use strict";
exports.id = 5564;
exports.ids = [5564];
exports.modules = {

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Genres)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/CardGenre.js


const CardGenre = /*#__PURE__*/ external_react_default().forwardRef(({ oddBgColor ='odd:bg-app-greyish-blue' , onClick , href , text  }, ref)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        onClick: onClick,
        ref: ref,
        className: `card-hover-animation m-2 flex h-44 w-44 grow items-center justify-center rounded-lg p-8 text-center text-xl font-medium even:bg-app-semi-dark-blue ${oddBgColor}`,
        children: text
    }));
});
CardGenre.displayName = 'CardGenre';
/* harmony default export */ const components_CardGenre = (CardGenre);

;// CONCATENATED MODULE: ./components/Genres.js



function Genres({ arr =[] , media_type , oddBgColor  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "mb-10 flex flex-wrap justify-between",
        children: arr.map((genre)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/${media_type}/genre/${genre.id}?name=${genre.name}&page=1`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_CardGenre, {
                    oddBgColor: oddBgColor,
                    text: genre.name
                })
            }, genre.id)
        )
    }));
};


/***/ })

};
;