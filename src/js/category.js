import category from '../data/category.js';
var datosjson = category;

function printCat() {
    const content = document.getElementById('grid-cat');
    var i = 0;
    if (content){
        datosjson.forEach(element => {
            i += 1;
            content.innerHTML += `
                <article class="category">
                    <div class="cat-header">
                        <span class="button">${element.categoria}</span>
                        <div class="cat-img">
                        <img style="width: 300px"
                            loading="lazy"
                            src="./img/${element.detall.multimedia}" 
                            alt="${element.titol}"
                            sizes ="(max-width: 400px) ./img/${element.detall.sizemultimedia[0]} 400vw,
                                    (max-width: 600px) ./img/${element.detall.sizemultimedia[1]} 600vw,
                                    (max-width: 800px) ./img/${element.detall.sizemultimedia[0]} 800vw
                                    "
                            srcset ="
                                ./img/${element.detall.sizemultimedia[0]} 400w,
                                ./img/${element.detall.sizemultimedia[1]} 600w,
                                ./img/${element.detall.sizemultimedia[0]} 800w
                                "
                        >
                        </div>
                    </div>
                    <div class="cat-body">
                        <span>${element.data}</span>
                        <h2>${element.titol}</h2>
                        <a href="detail.html?id=${i}" id="${i}" class="cat-link">Read more</a>
                        <svg version="1.2" width="0" height="0" viewBox="0 0 740 600">
                            <defs>
                                <clipPath id="mask">
                                <rect x="0" y="0" width="200" height="600">
                                    <animate attributeType="XML" attributeName="x" from="-200" to="740"
                                        dur="10s" repeatCount="indefinite"/>
                                </rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </article>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {printCat();});

