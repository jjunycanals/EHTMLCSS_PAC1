document.addEventListener("DOMContentLoaded",()=>{!function(){let a=document.getElementById("grid-cat");fetch("./data/category.json").then(a=>a.json()).then(t=>{var e=0;a&&t.forEach(t=>{e+=1,a.innerHTML+=`
                        <article class="category">
                            <div class="cat-header">
                                <span>${e}</span>
                                <div class="cat-img"><img src="./img/${t.detall.multimedia}" alt="${t.titol}"></div>
                            </div>
                            <div class="cat-body">
                                <span>${t.data}</span>
                                <h2>${t.titol}</h2>
                                <a href="detail.html?id=${e}" id="${e}" class="cat-link">M\xe9s informaci\xf3</a>
                            </div>
                        </article>
                    `})}).catch(a=>console.log(a))}()});//# sourceMappingURL=category.js.map

//# sourceMappingURL=category.js.map
