(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{Yzbp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/DevOps/Caching.md"}});var c={_frontmatter:o},l=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"caching"},"Caching"),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",i({parentName:"li"},{href:"https://roadmap.sh/guides/http-caching"}),"HTTP Caching"))),Object(n.b)("h2",{id:"terms"},"Terms"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Client: could be your browser or any application requesting the server for some resource."),Object(n.b)("li",{parentName:"ul"},"Origin Server: the source of truth, houses all the content required by the client and is responsible for fulfilling the client requests."),Object(n.b)("li",{parentName:"ul"},"Stale Content: is the cached but expired content."),Object(n.b)("li",{parentName:"ul"},"Fresh Content: is the content available in cache that hasn't expired yet."),Object(n.b)("li",{parentName:"ul"},"Cache Validation: is the process of contacting the server to check the validity of the cached content and get it updated for when it is going to expire."),Object(n.b)("li",{parentName:"ul"},"Cache Invalidation: is the process of removing any stale content available in the cache.")),Object(n.b)("h2",{id:"caching-locations"},"Caching locations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Browser cache: the local browser storage"),Object(n.b)("li",{parentName:"ul"},"Proxy cache: unlike browser cache which serves a single user, proxy caches may serve hundreds of different users accessing the same content. They are usually implemented on a broader level by ISPs or any other independent entities for example."),Object(n.b)("li",{parentName:"ul"},"Reverse proxy cache: Reverse proxy cache or surrogate cache is implemented close to the origin servers in order to reduce the load on server. Unlike proxy caches which are implemented by ISPs etc to reduce the bandwidth usage in a network, surrogates or reverse proxy caches are implemented near to the origin servers by the server administrators to reduce the load on server.")),Object(n.b)("p",null,"Although you can control the reverse proxy caches (since it is implemented by you on your server) you can not avoid or control browser and proxy caches. If your website is not configured to use these caches properly, it will still be cached using whatever the defaults are set on these caches."),Object(n.b)("h2",{id:"caching-headers"},"Caching Headers"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Expires: Prior to ",Object(n.b)("inlineCode",{parentName:"li"},"Cache-Control"),", Expires was the timestamp for how long something should be considered fresh."),Object(n.b)("li",{parentName:"ul"},"Pragma: Another pre-HTTP/1.1. Everything you could do is now done by ",Object(n.b)("inlineCode",{parentName:"li"},"Cache-Control"),"."),Object(n.b)("li",{parentName:"ul"},"Cache-Control",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"private"),": only cached in the browser or no proxies"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"public"),": cached by all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"no-store"),": not cached at all"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"no-cache"),": can be maintained but the cached content is to be re-validated (using ",Object(n.b)("inlineCode",{parentName:"li"},"ETag")," for example) from the server before being served. That is, there is still a request to server but for validation and not to download the cached content."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"max-age"),": seconds the content will be cached"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"s-maxage"),": max age for shared caches - overrides ",Object(n.b)("inlineCode",{parentName:"li"},"max-age")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"must-revalidate"),": enforces revalidation of browser cache before serving"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"proxy-revaliate"),": means all caches must revalidate"))),Object(n.b)("li",{parentName:"ul"},"Validators",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"ETag: Entity tag introduced in HTTP/1.1. A unique identifier that the server attaches with some resource."),Object(n.b)("li",{parentName:"ul"},"Last-Modified: Indicates the date and time at which content was last modified.")))),Object(n.b)("h2",{id:"content-delivery-networks-vs-caches"},"Content Delivery Networks vs Caches"),Object(n.b)("p",null,"CDNs are geographically distributed networks of proxy servers and their objective is to serve content to users more quickly. Caching is the process of storing information for a set period of time on a computer. The main difference between CDNs and caching is while CDNs perform caching, not everything that performs caching is a CDN."),Object(n.b)("h2",{id:"caching-recommendations"},"Caching Recommendations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'Agressive caching for static content with "fingerprinted" names (eg. ',Object(n.b)("inlineCode",{parentName:"li"},"[name].[hash].[ext]"),")"),Object(n.b)("li",{parentName:"ul"},"Look and decide if you need caching for dynamic content ie RSS blog could have a few hours but stock inventory you want the latest information"),Object(n.b)("li",{parentName:"ul"},"Always add the validators (preferably ETags) in your response"),Object(n.b)("li",{parentName:"ul"},"Do not cache user specific information or sensitive content in public proxies - when in doubt, don't cache at all"),Object(n.b)("li",{parentName:"ul"},"Separate content that changes often from those that do"),Object(n.b)("li",{parentName:"ul"},"Test and monitor caching headers sent from your site ie ",Object(n.b)("inlineCode",{parentName:"li"},"curl -I http:/your.site"))))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/DevOps/Caching.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-dev-ops-caching-md-42dd22fb62fdb7f5966e.js.map