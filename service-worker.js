"use strict";var precacheConfig=[["/index.html","6b8d3f321b68c79ddd3692ab9a049cec"],["/static/css/1.1e5612f5.chunk.css","588568bad6b20554ca20c8b703c793f8"],["/static/css/main.cde68d76.chunk.css","0d0a04010bad787fd3df3ef08507eaa8"],["/static/js/1.9d0b1d17.chunk.js","dba57b31365ce78ecdccb99ed924a221"],["/static/js/main.e0fab6d6.chunk.js","447995809ef6bf63a302e583d5c1c292"],["/static/js/runtime~main.229c360f.js","3b44b5daad3fcbefa8b355dfbc3d9630"],["/static/media/3dprinting1.36aa605d.PNG","36aa605d275b3c9b05862769ea5d45f7"],["/static/media/3dprinting2.1681ed3c.PNG","1681ed3cbcd4f7bd676381a9bee88fc3"],["/static/media/Aktiv1.6b035750.PNG","6b035750a57cc03fdb6845fa39779fde"],["/static/media/Aktiv2.e225542e.PNG","e225542e09c08180c7286e9ec044fbbf"],["/static/media/Aktiv3.3f054c04.PNG","3f054c043bc166613770965904c7c80a"],["/static/media/Jainish_Mehta_Resume_May_2022.ae12afe2.pdf","ae12afe2b20778e951547f998e456072"],["/static/media/UWlogo.8d593cf2.png","8d593cf2330e4cf74ebdca1db1789858"],["/static/media/Undergrad_Transcript_3B.134dccf7.pdf","134dccf7fc3bd35e66bd5033add581e6"],["/static/media/astronaut.8af22516.png","8af2251635f82b4fc0b32f719c3e6819"],["/static/media/ceyc.21c4eb28.PNG","21c4eb2880c8ff4fce3216966de6a8b9"],["/static/media/cityofedmonton.34b450a5.png","34b450a57e0e4a95bc9350fcc121b5d9"],["/static/media/jainishlogo.db2f1d53.PNG","db2f1d535509cc8aeff6cca52f96805a"],["/static/media/manulife.b39739bd.png","b39739bda09ce38a242a2fb6ee676693"],["/static/media/missioncontrol.bb577268.png","bb57726818a250dfbab195893434879e"],["/static/media/montreal.541228f9.PNG","541228f94e6ce9d03a2e04e4585242c3"],["/static/media/niagarafalls.d3f2dd9f.png","d3f2dd9f467353c69cad48790e748200"],["/static/media/nvidia.ab1c6fbd.png","ab1c6fbde6f94b18516fbfba95cb566e"],["/static/media/profilepic.1cd291b5.PNG","1cd291b56392e20cdf3cc74dc7d8c8db"],["/static/media/projectportfolio.fb0adde8.pdf","fb0adde833689df497aec4655fb492cc"],["/static/media/smartv.9da0969c.PNG","9da0969cfa529f69874cddd8d6dc76e7"],["/static/media/space.82af3c04.png","82af3c04061eb2c953ef6d1975d30c0d"],["/static/media/space4.85e6f7a4.png","85e6f7a44426e3877fa17655cad9ab85"],["/static/media/space5.7a206ae8.png","7a206ae825c762a147b2f6b090375deb"],["/static/media/space6.417ecfc5.png","417ecfc581faf67abbb97b94b7c41d44"],["/static/media/syrup.063f674e.png","063f674e5530e143d31b62c60a089bcc"],["/static/media/teradata.83faa485.png","83faa4853ca0f3f26a1b922ac74476ec"],["/static/media/thrifter1.ae6ef65d.PNG","ae6ef65d6351b0fc89ae770645863818"],["/static/media/thrifter2.5535025a.PNG","5535025aac12f2acaaf298d50e56befe"],["/static/media/thrifter3.8f054fca.PNG","8f054fca6363618a47d66f1acdeee3f1"],["/static/media/trophy.45cc7643.png","45cc7643655fe535532318e80f746b54"],["/static/media/waterloop1.d4267413.PNG","d42674135e73cba735d62bfa844b11f2"],["/static/media/waterloop2.3b2310b0.PNG","3b2310b05cb7d81a060e3a41a7fa9665"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});