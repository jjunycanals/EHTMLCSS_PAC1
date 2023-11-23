function printDetail() {
    const content = document.getElementById('cat-detail');
    fetch('./data/category.js')
        .then(response => response.json())
        .then(data => {
            var i = 0;
            if (content){
                data.forEach(element => {
                    i += 1;
                    // obtenir l'id de la categoria de la URL
                    const urlParams = new URLSearchParams(window.location.search);
                    const id = urlParams.get('id');
                    if (i == id) {
                        content.innerHTML += `
                            <header>
                                <h1 class="title-category">${element.titol}</h1>
                                <p class="subtitle">${element.lloc}</p>
                                <time class="data" datetime="${element.data}">${element.data}</time>
                            </header>
                            <section class="detail">  
                                <div class="detail-photo">
                                    <figure>
                                        <img class="detail-img" src="./img/${element.detall.multimedia}" alt="${element.data}">
                                        <figcaption>${element.lloc}</figcaption>
                                    </figure>
                                </div>
                                <div class="detail-text">     
                                    <p>${element.detall.text}</p>
                                </div>
                            </section>
                            `;
                    }
                    
                });
            }
        })
        .catch(e => console.log(e))
}

document.addEventListener('DOMContentLoaded', () => {printDetail();});