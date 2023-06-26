(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{7969:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(5675),i=r(5313);function s(e){var t=e.isTrending,r=e.src,s=e.alt;return(0,n.jsx)("div",{className:"relative w-full rounded-lg",children:(0,n.jsx)("div",{className:t?'relative h-[140px] w-[240px] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-app-dark-blue after:opacity-50 after:content-[""] sm:h-[230px] sm:w-[470px]':"relative h-[133px] md:h-[140px] lg:h-[174px]",children:(0,n.jsx)(a.default,{className:"rounded-lg",src:r,alt:s,layout:"fill",objectFit:"cover",placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((0,i.s3)((0,i.f8)(240,140))),unoptimized:!0})})})}},3292:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893);function a(e){var t=e.className,r=void 0===t?"":t;return(0,n.jsx)("svg",{className:r,width:"1em",height:"1em",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z",fill:"#FFF",opacity:".75"})})}function i(e){var t=e.className;return(0,n.jsx)("svg",{className:t,width:"1em",height:"1em",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z",fill:"#FFF",opacity:".75"})})}function s(e){var t=e.category,r=e.isTrending,a=(e.rating,e.title),i=e.year;return(0,n.jsxs)("div",{className:r?"absolute left-4 bottom-4 z-40 h-fit w-fit truncate text-ellipsis":null,children:[(0,n.jsxs)("div",{className:r?"mt-2 mb-1 flex text-[11px] font-light text-app-pure-white md:text-[15px]":"mt-2 mb-1 flex text-[11px] font-light text-app-grey md:text-[13px]",children:[(0,n.jsx)("p",{children:o(i)}),(0,n.jsxs)("div",{className:r?'flex items-center px-[8px] before:content-["\u2022"]':'flex items-center px-[6px] before:content-["\u2022"]',children:[c(t),(0,n.jsx)("p",{className:r?"pl-[6px] pr-[6px]":"pl-1 pr-1",children:l(t)})]})]}),(0,n.jsx)("h2",{className:r?"md:heading-sm text-ellips w-[200px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[420px] md:h-6":"md:heading-xs text-ellips w-[150px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[180px] md:w-[200px] lg:w-[268px]",children:a})]})}function o(e){return e?e.substring(0,4):"N/A"}function c(e){return"movie"===e?(0,n.jsx)(a,{className:"pl-1 text-base"}):(0,n.jsx)(i,{className:"pl-1 text-base"})}function l(e){return"movie"===e?"Movie":"TV Series"}},7982:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893),a=r(1163),i=r(7969),s=r(3292);function o(e){var t=e.id,r=e.category,o=e.rating,c=e.src,l=e.title,u=e.year,d=(0,a.useRouter)();return(0,n.jsxs)("div",{className:"card-hover-animation mb-4 grow basis-1/5 2xs:w-[130px] xs:w-full cursor-pointer",onClick:function(){"movie"===r?d.push("/movie/".concat(t)):"tv"===r&&d.push("/tv/".concat(t))},children:[(0,n.jsx)(i.Z,{src:c,alt:l}),(0,n.jsx)(s.Z,{id:t,category:r,rating:o,title:l,year:u})]})}},5426:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(5313),i=r(7982);function s(e){var t=e.arr,r=void 0===t?[]:t,s=e.isGenre,o=e.limit,c=void 0===o?20:o,l=e.media_type,u=void 0===l?"movie":l,d=e.searchTerm,p=void 0===d?"":d,f=e.totalResult,h=void 0===f?0:f;return(0,n.jsxs)(n.Fragment,{children:[s?null:(0,n.jsx)("h1",{className:"md:heading-lg mb-6 text-xl font-light lg:mb-8",children:"Found ".concat(h," results for '").concat(p,"'")}),(0,n.jsx)("section",{className:"card-collection-wrapper",children:(0,a.Z1)((0,a.WQ)(r,c),i.Z,u)})]})}},4461:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893);function a(){return(0,n.jsx)("div",{className:"my-8 flex items-center justify-center",children:(0,n.jsx)("div",{className:"loader"})})}},5971:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893),a=r(1664),i=r(9327);function s(e){var t=e.currentPage,r=e.prevHref,s=e.nextHref,o=e.isFirst,c=e.isLast,l=e.goToPreviousPage,u=e.goToNextPage,d=e.totalPages;return(0,n.jsxs)("div",{className:"my-16 flex items-center justify-center",children:[(0,n.jsx)(a.default,{href:r,as:r,children:(0,n.jsxs)("a",{onClick:l,className:o?"disabled-link flex cursor-not-allowed items-center justify-center rounded-lg rounded-r-none border-2 py-2 pl-4 pr-6 font-medium":"flex items-center justify-center rounded-lg rounded-r-none border-2 py-2 pl-4 pr-6 font-medium hover:bg-app-pure-white hover:text-app-dark-blue",children:[(0,n.jsx)(i.ZhP,{className:"mr-2"}),(0,n.jsx)("span",{children:"Prev"})]})}),(0,n.jsxs)("p",{className:"border-t-2 border-b-2 bg-app-pure-white py-2 px-4 text-app-dark-blue",children:["Page ",t," of ",d]}),(0,n.jsx)(a.default,{href:s,as:s,children:(0,n.jsxs)("a",{onClick:u,className:c?"disabled-link flex cursor-not-allowed items-center justify-center rounded-lg rounded-l-none border-2 py-2 pr-4 pl-6 font-medium":"flex items-center justify-center rounded-lg rounded-l-none border-2 py-2 pr-4 pl-6 font-medium hover:bg-app-pure-white hover:text-app-dark-blue",children:[(0,n.jsx)("span",{children:"Next"}),(0,n.jsx)(i.d2D,{className:"ml-2"})]})})]})}function o(e){var t=e.currentPageAdvance,r=e.currentPage,a=e.prevHref,i=e.nextHref,o=e.isFirst,c=e.isLast,l=e.goToPreviousPage,u=e.goToNextPage,d=e.totalPages;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{display:"none"},children:(0,n.jsx)(s,{currentPage:t,prevHref:a,nextHref:i,isFirst:o,isLast:c,goToPreviousPage:l,goToNextPage:u,totalPages:d})}),(0,n.jsx)(s,{currentPage:r,prevHref:a,nextHref:i,isFirst:o,isLast:c,goToPreviousPage:l,goToNextPage:u,totalPages:d})]})}},2652:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),a=r(1163),i=r(7294);function s(e){var t=e.className;return(0,n.jsx)("svg",{className:t,fill:"currentColor",width:"1em",height:"1em",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"})})}function o(){return(0,n.jsx)("button",{type:"submit",className:"text-capitalize flex items-center justify-center rounded-md bg-app-greyish-blue py-2 px-3 text-xs text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue",children:"Search"})}function c(e){var t=e.placeholder,r=void 0===t?"Search for movies or TV series":t,c=e.searchPath,l=(0,a.useRouter)(),u=(0,i.useState)(""),d=u[0],p=u[1];return(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==d.length&&(l.push("".concat(c).concat(d.trim(),"?page=1")),p(""))},className:"flex grow pb-6 md:pb-10 lg:mt-9",children:[(0,n.jsx)(s,{className:"h-6 w-6 md:h-8 md:w-8"}),(0,n.jsx)("input",{className:"md:heading-md md:placeholder:heading-md mx-4 w-full rounded-none border-b border-app-dark-blue bg-app-dark-blue pb-[8px] text-base font-light caret-app-red placeholder:text-base placeholder:text-app-placeholder focus:border-b focus:border-app-greyish-blue focus:outline-none",type:"text",placeholder:r,onChange:function(e){return p(e.target.value)},value:d}),(0,n.jsx)(o,{})]})}},5313:function(e,t,r){"use strict";r.d(t,{ws:function(){return s},jQ:function(){return o},wC:function(){return c},FV:function(){return l},Pw:function(){return u},sI:function(){return d},_i:function(){return p},f8:function(){return f},s3:function(){return h},Z1:function(){return m},WQ:function(){return x}});var n=r(5893),a=r(5934),i=r(3454),s=i.env.TMDB_ENDPOINT,o=i.env.TMDB_API_KEY,c="https://image.tmdb.org/t/p/original",l="/search/",u="/search/movie/",d="/search/tv/",p=function(e){return fetch(e).then((function(e){return e.json()}))},f=function(e,t){return'\n<svg width="'.concat(e,'" height="').concat(t,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(e,'" height="').concat(t,'" fill="#333" />\n  <rect id="r" width="').concat(e,'" height="').concat(t,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(e,'" to="').concat(e,'" dur="1s" repeatCount="indefinite"  />\n</svg>\n')},h=function(e){return window.btoa(e)},m=function(e,t,r){return e.map((function(e){return(0,n.jsx)(t,{id:e.id,category:e.media_type||r,rating:e.adult,src:e.backdrop_path?"".concat(c,"/").concat(e.backdrop_path):"".concat(c,"/").concat(e.poster_path),title:e.title?e.title:e.original_name||e.original_title,year:e.release_date||e.first_air_date},e.id||(0,a.Z)())}))},x=function(e,t){return e.slice(0,t)}},9008:function(e,t,r){e.exports=r(5443)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,s({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return n.createElement(u,s({attr:s({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,a=e.attr,i=e.size,c=e.title,l=o(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}}}]);