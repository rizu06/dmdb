(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1729)}])},7969:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(5893),r=i(5675),a=i(5313);function s(e){var t=e.isTrending,i=e.src,s=e.alt;return(0,n.jsx)("div",{className:"relative w-full rounded-lg",children:(0,n.jsx)("div",{className:t?'relative h-[140px] w-[240px] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-app-dark-blue after:opacity-50 after:content-[""] sm:h-[230px] sm:w-[470px]':"relative h-[133px] md:h-[140px] lg:h-[174px]",children:(0,n.jsx)(r.default,{className:"rounded-lg",src:i,alt:s,layout:"fill",objectFit:"cover",placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((0,a.s3)((0,a.f8)(240,140))),unoptimized:!0})})})}},3292:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(5893);function r(e){var t=e.className,i=void 0===t?"":t;return(0,n.jsx)("svg",{className:i,width:"1em",height:"1em",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z",fill:"#FFF",opacity:".75"})})}function a(e){var t=e.className;return(0,n.jsx)("svg",{className:t,width:"1em",height:"1em",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z",fill:"#FFF",opacity:".75"})})}function s(e){var t=e.category,i=e.isTrending,r=(e.rating,e.title),a=e.year;return(0,n.jsxs)("div",{className:i?"absolute left-4 bottom-4 z-40 h-fit w-fit truncate text-ellipsis":null,children:[(0,n.jsxs)("div",{className:i?"mt-2 mb-1 flex text-[11px] font-light text-app-pure-white md:text-[15px]":"mt-2 mb-1 flex text-[11px] font-light text-app-grey md:text-[13px]",children:[(0,n.jsx)("p",{children:o(a)}),(0,n.jsxs)("div",{className:i?'flex items-center px-[8px] before:content-["\u2022"]':'flex items-center px-[6px] before:content-["\u2022"]',children:[c(t),(0,n.jsx)("p",{className:i?"pl-[6px] pr-[6px]":"pl-1 pr-1",children:l(t)})]})]}),(0,n.jsx)("h2",{className:i?"md:heading-sm text-ellips w-[200px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[420px] md:h-6":"md:heading-xs text-ellips w-[150px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[180px] md:w-[200px] lg:w-[268px]",children:r})]})}function o(e){return e?e.substring(0,4):"N/A"}function c(e){return"movie"===e?(0,n.jsx)(r,{className:"pl-1 text-base"}):(0,n.jsx)(a,{className:"pl-1 text-base"})}function l(e){return"movie"===e?"Movie":"TV Series"}},7982:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(5893),r=i(1163),a=i(7969),s=i(3292);function o(e){var t=e.id,i=e.category,o=e.rating,c=e.src,l=e.title,p=e.year,u=(0,r.useRouter)();return(0,n.jsxs)("div",{className:"card-hover-animation mb-4 grow basis-1/5 2xs:w-[130px] xs:w-full cursor-pointer",onClick:function(){"movie"===i?u.push("/movie/".concat(t)):"tv"===i&&u.push("/tv/".concat(t))},children:[(0,n.jsx)(a.Z,{src:c,alt:l}),(0,n.jsx)(s.Z,{id:t,category:i,rating:o,title:l,year:p})]})}},3726:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var n=i(5893),r=i(8100),a=(i(9889),i(5313)),s=i(7982),o=i(1664);function c(e){var t=e.href,i=e.isHomePage,r=(e.isTrending,e.media_type),a=e.title;return(0,n.jsxs)("div",{className:"mb-4 flex items-end justify-between sm:mb-6",children:[i?(0,n.jsxs)("div",{className:"flex items-end",children:[(0,n.jsx)("h2",{className:"section-title py-px sm:py-0",children:a}),(0,n.jsx)("p",{className:"movie"===r?"ml-2 rounded-md border-2 py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-pure-white sm:ml-4 sm:text-[10px]":"ml-2 rounded-md border-2 border-app-pure-white bg-app-pure-white py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-dark-blue sm:ml-4 sm:text-[10px] ",children:r})]}):(0,n.jsx)("h2",{className:"section-title",children:a}),(0,n.jsx)(o.default,{href:t,as:t,passHref:!0,children:(0,n.jsx)("a",{className:"cursor-pointer text-xs font-medium uppercase tracking-wide text-app-greyish-blue hover:underline",children:"See more"})})]})}var l=i(4461);function p(e){var t=e.Component,i=void 0===t?s.Z:t,o=e.endpoint,p=e.href,u=e.isHomePage,d=e.isTrending,m=e.limit,h=void 0===m?8:m,x=e.media_type,f=void 0===x?"movie":x,v=e.title,g=e.type,w=void 0===g?"movie":g,b=(0,r.ZP)(o,a._i),j=b.data;return b.error?(0,n.jsx)("div",{children:"Error occurred"}):(0,n.jsx)(n.Fragment,{children:j?(0,n.jsxs)("section",{className:d?"mb-6 h-full w-full overflow-hidden md:mb-10 lg:overflow-visible":"mb-6 md:mb-10",children:[(0,n.jsx)(c,{title:v,href:p,isHomePage:u,isTrending:d,media_type:w}),(0,n.jsx)("section",{className:d?"h-scroll relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2":"card-collection-wrapper",children:(0,a.Z1)((0,a.WQ)(j.results||[],h),i,f)})]}):(0,n.jsx)(l.Z,{})})}},4461:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(5893);function r(){return(0,n.jsx)("div",{className:"my-8 flex items-center justify-center",children:(0,n.jsx)("div",{className:"loader"})})}},2652:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(5893),r=i(1163),a=i(7294);function s(e){var t=e.className;return(0,n.jsx)("svg",{className:t,fill:"currentColor",width:"1em",height:"1em",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"})})}function o(){return(0,n.jsx)("button",{type:"submit",className:"text-capitalize flex items-center justify-center rounded-md bg-app-greyish-blue py-2 px-3 text-xs text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue",children:"Search"})}function c(e){var t=e.placeholder,i=void 0===t?"Search for movies or TV series":t,c=e.searchPath,l=(0,r.useRouter)(),p=(0,a.useState)(""),u=p[0],d=p[1];return(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==u.length&&(l.push("".concat(c).concat(u.trim(),"?page=1")),d(""))},className:"flex grow pb-6 md:pb-10 lg:mt-9",children:[(0,n.jsx)(s,{className:"h-6 w-6 md:h-8 md:w-8"}),(0,n.jsx)("input",{className:"md:heading-md md:placeholder:heading-md mx-4 w-full rounded-none border-b border-app-dark-blue bg-app-dark-blue pb-[8px] text-base font-light caret-app-red placeholder:text-base placeholder:text-app-placeholder focus:border-b focus:border-app-greyish-blue focus:outline-none",type:"text",placeholder:i,onChange:function(e){return d(e.target.value)},value:u}),(0,n.jsx)(o,{})]})}},9889:function(e,t,i){"use strict";i.d(t,{Gr:function(){return r},YB:function(){return a},FU:function(){return s},bs:function(){return o}});var n=i(5313);function r(e,t,i,r){return"".concat(n.ws,"/").concat(e,"?api_key=").concat(n.jQ,"&with_genres=").concat(t,"&name=").concat(i,"&page=").concat(r)}var a="movie/upcoming",s="tv/on_the_air",o="tv/top_rated"},1729:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n=i(5893),r=i(9008),a=i(1163),s=i(7969),o=i(3292);function c(e){var t=e.id,i=e.category,r=e.rating,c=e.src,l=e.title,p=e.year,u=(0,a.useRouter)();return(0,n.jsxs)("div",{className:"relative w-full cursor-pointer",onClick:function(){"movie"===i?u.push("/movie/".concat(t)):"tv"===i&&u.push("/tv/".concat(t))},children:[(0,n.jsx)(s.Z,{isTrending:!0,src:c,alt:l}),(0,n.jsx)(o.Z,{isTrending:!0,id:t,category:i,rating:r,title:l,year:p})]})}var l=i(3726),p=i(2652),u=i(5313);function d(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.default,{children:(0,n.jsx)("title",{children:"Home | Entertainment App"})}),(0,n.jsx)(p.Z,{searchPath:u.FV}),(0,n.jsx)(l.Z,{isHomePage:!0,isTrending:!0,Component:c,endpoint:"/api/movie/trending/1",href:"/movie/trending/1",limit:10,title:"Trending"}),(0,n.jsx)(l.Z,{isHomePage:!0,endpoint:"/api/movie/popular/1",href:"/movie/popular/1",limit:6,title:"Popular"}),(0,n.jsx)(l.Z,{isHomePage:!0,endpoint:"/api/movie/now/1",href:"/movie/now/1",limit:6,title:"Now playing"}),(0,n.jsx)(l.Z,{isHomePage:!0,endpoint:"/api/movie/upcoming/1",href:"/movie/upcoming/1",limit:6,title:"Upcoming"}),(0,n.jsx)(l.Z,{isHomePage:!0,endpoint:"/api/movie/top/1",href:"/movie/top/1",limit:6,title:"Top rated"}),(0,n.jsx)(l.Z,{isHomePage:!0,isTrending:!0,Component:c,endpoint:"/api/tv/trending/1",href:"/tv/trending/1",limit:10,media_type:"tv",title:"Trending",type:"tv series"}),(0,n.jsx)(l.Z,{isHomePage:!0,endpoint:"/api/tv/popular/1",href:"/tv/popular/1",limit:6,media_type:"tv",title:"Popular",type:"tv series"}),(0,n.jsx)(l.Z,{isHomePage:!0,endpoint:"/api/tv/airing/1",href:"/tv/airing/1",limit:6,media_type:"tv",title:"Airing today",type:"tv series"}),(0,n.jsx)(l.Z,{isHomePage:!0,endpoint:"/api/tv/onair/1",href:"/tv/onair/1",limit:6,media_type:"tv",title:"On air",type:"tv series"}),(0,n.jsx)(l.Z,{isHomePage:!0,endpoint:"/api/tv/top/1",href:"/tv/top/1",limit:6,media_type:"tv",title:"Top rated",type:"tv series"})]})}},5313:function(e,t,i){"use strict";i.d(t,{ws:function(){return s},jQ:function(){return o},wC:function(){return c},FV:function(){return l},Pw:function(){return p},sI:function(){return u},_i:function(){return d},f8:function(){return m},s3:function(){return h},Z1:function(){return x},WQ:function(){return f}});var n=i(5893),r=i(5934),a=i(3454),s=a.env.TMDB_ENDPOINT,o=a.env.TMDB_API_KEY,c="https://image.tmdb.org/t/p/original",l="/search/",p="/search/movie/",u="/search/tv/",d=function(e){return fetch(e).then((function(e){return e.json()}))},m=function(e,t){return'\n<svg width="'.concat(e,'" height="').concat(t,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(e,'" height="').concat(t,'" fill="#333" />\n  <rect id="r" width="').concat(e,'" height="').concat(t,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(e,'" to="').concat(e,'" dur="1s" repeatCount="indefinite"  />\n</svg>\n')},h=function(e){return window.btoa(e)},x=function(e,t,i){return e.map((function(e){return(0,n.jsx)(t,{id:e.id,category:e.media_type||i,rating:e.adult,src:e.backdrop_path?"".concat(c,"/").concat(e.backdrop_path):"".concat(c,"/").concat(e.poster_path),title:e.title?e.title:e.original_name||e.original_title,year:e.release_date||e.first_air_date},e.id||(0,r.Z)())}))},f=function(e,t){return e.slice(0,t)}},9008:function(e,t,i){e.exports=i(5443)}},function(e){e.O(0,[784,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);