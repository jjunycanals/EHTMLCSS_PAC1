document.addEventListener("DOMContentLoaded",()=>{!function(){let t=document.getElementById("cat-detail");fetch("./data/category.json").then(t=>t.json()).then(e=>{var a=0;t&&e.forEach(e=>{a+=1;// obtenir l'id de la categoria de la URL
let i=new URLSearchParams(window.location.search),l=i.get("id");console.log(a),a==l&&(t.innerHTML+=`
                            <header>
                                <h1 class="title-category">${e.titol}</h1>
                                <p class="subtitle">${e.lloc}</p>
                                <time class="data" datetime="${e.data}">${e.data}</time>
                            </header>
                            <section class="detail">  
                                <div class="detail-photo">
                                    <figure>
                                        <img class="detail-img" src="./img/${e.detall.multimedia}" alt="${e.data}">
                                        <figcaption>${e.lloc}</figcaption>
                                    </figure>
                                </div>
                                <div class="detail-text">     
                                    <p>${e.detall.text}</p>
                                </div>
                            </section>
                            `)})}).catch(t=>console.log(t))}()});//# sourceMappingURL=detail.8950042c.js.map

//# sourceMappingURL=detail.8950042c.js.map
