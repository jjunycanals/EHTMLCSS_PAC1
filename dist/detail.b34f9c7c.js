var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequirea87c;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequirea87c=a),a.register;var r=a("kMSaT").default;document.addEventListener("DOMContentLoaded",()=>{!function(){let e=document.getElementById("galery");var t=0;r.forEach(i=>{t+=1;let a=new URLSearchParams(window.location.search).get("id");t==a&&(1===i.galery.length?e.innerHTML+=`
                    <h1 class="title-category">More images</h1>
                    <picture>   
                        <source media="(max-width: 600px)" srcset="./img/${i.galery[0]}" type="image/webp" />
                        <img class="detail-img" src="./img/${i.galery[0]}" alt="${i.data}" type="image/webp" title="${i.titol}"/>
                    </picture>    
                `:e.innerHTML+=`
                <h1 class="title-category">More images</h1>
                <picture>   
                    <source media="(max-width: 600px)" srcset="./img/${i.galery[0]}" type="image/png"/>
                    <source media="(max-width: 900px)" srcset="./img/${i.galery[1]}" type="image/png"/>
                    <source media="(max-width: 1040px)" srcset="./img/${i.galery[2]}" type="image/png" />
                    <img class="detail-img" src="./img/${i.galery[3]}" alt="${i.data}" type="image/png" title="${i.titol}"/>
                </picture>          
                `)})}()});
//# sourceMappingURL=detail.b34f9c7c.js.map
