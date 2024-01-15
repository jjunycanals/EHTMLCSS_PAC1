var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequirea87c;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequirea87c=i),i.register;var r=i("kMSaT").default;document.addEventListener("DOMContentLoaded",()=>{!function(){let e=document.getElementById("galery");var t=0;r.forEach(a=>{t+=1;let i=new URLSearchParams(window.location.search).get("id");t==i&&(1===a.galery.length?e.innerHTML+=`
                    <h1 class="title-category">More images</h1>
                    <picture>   
                        <source media="(max-width: 600px)" srcset="./img/${a.galery[0]}" type="image/webp" />
                        <img class="detail-img" src="./img/${a.galery[0]}" alt="${a.data}" type="image/webp" title="${a.titol}"/>
                    </picture>    
                `:e.innerHTML+=`
                <h1 class="title-category">More images</h1>
                <picture>   
                    <source media="(max-width: 600px)" srcset="./img/${a.galery[0]}" type="image/png"/>
                    <source media="(max-width: 900px)" srcset="./img/${a.galery[1]}" type="image/png"/>
                    <source media="(max-width: 1040px)" srcset="./img/${a.galery[2]}" type="image/png" />
                    <img class="detail-img"  loading="lazy" src="./img/${a.galery[3]}" alt="${a.data}" type="image/png" title="${a.titol}"/>
                </picture>          
                `)})}()});
//# sourceMappingURL=detail.ed992d20.js.map
