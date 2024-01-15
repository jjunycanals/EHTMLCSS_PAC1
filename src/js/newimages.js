import category from '../data/category.js';
var datosjson = category;

function printDetail() {
    const content = document.getElementById('galery');
    var i = 0;
    datosjson.forEach(element => {
        i += 1;
        // obtenir l'id de la categoria de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (i == id) {
            var size = element.galery.length;
            if (size === 1) {
                content.innerHTML += `
                    <h1 class="title-category">More images</h1>
                    <picture>   
                        <source media="(max-width: 600px)" srcset="./img/${element.galery[0]}" type="image/webp" />
                        <img class="detail-img" loading="lazy" src="./img/${element.galery[0]}" alt="${element.data}" type="image/webp" title="${element.titol}"/>
                    </picture>    
                `;
            } else {
                content.innerHTML += `
                <h1 class="title-category">More images</h1>
                <picture>   
                    <source media="(max-width: 600px)" srcset="./img/${element.galery[0]}" type="image/png"/>
                    <source media="(max-width: 900px)" srcset="./img/${element.galery[1]}" type="image/png"/>
                    <source media="(max-width: 1040px)" srcset="./img/${element.galery[2]}" type="image/png" />
                    <img class="detail-img" loading="lazy" src="./img/${element.galery[3]}" alt="${element.data}" type="image/png" title="${element.titol}"/>
                </picture>          
                `;
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {printDetail();});