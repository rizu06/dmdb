(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[602],{3454:function(t,e,r){"use strict";var n,o;t.exports=(null===(n=r.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(o=r.g.process)||void 0===o?void 0:o.env)?r.g.process:r(7663)},8834:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/movie/[id]",function(){return r(4638)}])},4638:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSP:function(){return f},default:function(){return l}});var n=r(5893),o=r(9008),i=r(5426),u=r(4461),a=r(5971),c=r(2652),s=r(5313),f=!0;function l(t){var e=t.data,r=t.id,f=t.page,l=Number(f),p=1===l,d=!!e&&l===e.total_pages;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsxs)("title",{children:[r," - Search Results | Entertainment App"]})}),(0,n.jsx)(c.Z,{placeholder:"Search for movies",searchPath:s.Pw}),e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{arr:e&&e.results||[],searchTerm:r,totalResult:e.total_results}),(0,n.jsx)(a.Z,{currentPageAdvance:l+1,currentPage:l,prevHref:"".concat(s.Pw).concat(r,"?page=").concat(l-1),nextHref:"".concat(s.Pw).concat(r,"?page=").concat(l+1),isFirst:p,isLast:d,goToPreviousPage:function(){return l-1},goToNextPage:function(){return l+1},totalPages:e.total_pages})]}):(0,n.jsx)(u.Z,{})]})}},7663:function(t){!function(){var e={162:function(t){var e,r,n=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var a,c=[],s=!1,f=-1;function l(){s&&a&&(s=!1,a.length?c=a.concat(c):f=-1,c.length&&p())}function p(){if(!s){var t=u(l);s=!0;for(var e=c.length;e;){for(a=c,c=[];++f<e;)a&&a[f].run();f=-1,e=c.length}a=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function h(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new d(t,e)),1!==c.length||s||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}},u=!0;try{e[t](i,i.exports,n),u=!1}finally{u&&delete r[t]}return i.exports}n.ab="//";var o=n(162);t.exports=o}()},5934:function(t,e,r){"use strict";var n;r.d(e,{Z:function(){return l}});var o=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"===typeof t&&u.test(t)},c=[],s=0;s<256;++s)c.push((s+256).toString(16).substr(1));var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r};var l=function(t,e,r){var n=(t=t||{}).random||(t.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return f(n)}}},function(t){t.O(0,[90,544,774,888,179],(function(){return e=8834,t(t.s=e);var e}));var e=t.O();_N_E=e}]);