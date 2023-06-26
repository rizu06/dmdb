"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "recoil"
const external_recoil_namespaceObject = require("recoil");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/icon-tmdb-long.svg
/* harmony default export */ const icon_tmdb_long = ({"src":"/_next/static/media/icon-tmdb-long.72aae4fd.svg","height":35,"width":489});
;// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "w-full text-center text-xs text-app-greyish-blue",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Powered by"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.themoviedb.org/about/logos-attribution",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: icon_tmdb_long,
                    width: 150,
                    height: 20,
                    alt: "powered by TMDB",
                    unoptimized: true
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./assets/image-avatar.png
/* harmony default export */ const image_avatar = ({"src":"/_next/static/media/image-avatar.17e3a141.png","height":80,"width":80,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42jWOTSsEARyH//sZ+AbCnuTmbSWbXJZSm4vDmoNdTlzEcsUcHMQeNoW0W4uD5sAXmJeUGdz25K2NmrSIk2baMY9mynN9nvr9JMKHJJ+O4d5WvaPyvufe2wbQHUsgGTxrH1wncEpCsS/Di5aC1/P3nygKm44Rmgmwxb8rd6AV82C2+VhC2LwxJHys+OjCxc40o6kZSgsFnrQpMIXfh6onNCp+41QQyZOeXEUGN6ntboH1H3zber02hLTPBxPZFYZzB6hrGwFX8YQen7Quj99EFAbSS+GYchjOFvb4qp+5kZOIrvHFuc7eHD0jy63+jNpKZ7dZV08UEZE/EoefSdL/W8oAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/icons/AppIcon.js

function AppIcon() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: "h-[20px] w-[25px] lg:h-[25.6px] lg:w-[32px]",
        width: "1em",
        height: "1em",
        viewBox: "0 0 33 27",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z",
            fill: "#FC4747"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/IconNavHome.js


function IconHome() {
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: router.pathname == '/' ? 'active-link' : 'icon-nav',
        fill: "currentColor",
        width: "1em",
        height: "1em",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/IconNavMovie.js


function IconMovie() {
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: router.pathname == '/movie' ? 'active-link' : 'icon-nav',
        fill: "currentColor",
        width: "1em",
        height: "1em",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/IconNavTv.js


function IconTv() {
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: router.pathname == '/tv' ? 'active-link' : 'icon-nav',
        fill: "currentColor",
        width: "1em",
        height: "1em",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/NavigationIcon.js


function NavigationIcon({ children , href  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "cursor-pointer",
            children: children
        })
    }));
};

;// CONCATENATED MODULE: ./components/Navigation.js









function Navigation() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "sticky top-0 z-50 flex items-center justify-between bg-app-semi-dark-blue p-5 md:mx-6 md:mt-6 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:h-5/6 lg:flex-col lg:py-9",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(AppIcon, {})
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-1/2 items-center justify-between lg:h-[200px] lg:flex-col 2xs:w-2/5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationIcon, {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(IconHome, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationIcon, {
                        href: "/movie",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(IconMovie, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationIcon, {
                        href: "/tv",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(IconTv, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://github.com/Ashutosh102",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center justify-center rounded-full bg-app-pure-white p-px",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        className: "rounded-full",
                        src: image_avatar,
                        alt: "user avatar",
                        height: 24,
                        width: 24,
                        unoptimized: true
                    })
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Layout.js



function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-app-pure-white lg:flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow",
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js







external_nprogress_default().configure({
    showSpinner: false
});
router_default().events.on('routeChangeStart', ()=>external_nprogress_default().start()
);
router_default().events.on('routeChangeComplete', ()=>external_nprogress_default().done()
);
router_default().events.on('routeChangeError', ()=>external_nprogress_default().done()
);
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_recoil_namespaceObject.RecoilRoot, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7190,676,1664,5675], () => (__webpack_exec__(1593)));
module.exports = __webpack_exports__;

})();