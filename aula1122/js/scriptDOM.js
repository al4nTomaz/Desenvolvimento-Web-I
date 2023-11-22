let listaPost = [
    {
        titulo: "titulo post",
        descricao: "muito contúdo!!",
        imgUrl: "./img/cards/mcrying.jpg",
    },

    {
        titulo: "titulo post",
        descricao: "muito contúdo!!",
        imgUrl: "./img/cards/mcrying.jpg",
    },

    {
        titulo: "titulo post",
        descricao: "muito contúdo!!",
        imgUrl: "./img/cards/mcrying.jpg",
    }
];
var container = document.querySelector(".container");

listaPost.forEach((elemento) => {
    let card = `
        <div class="card">
                <div class="card-img">
                <figure>
                    <img src="${elemento.imgUrl}" alt="musculoso chorando :(">
                </figure>
            </div>
            <div class="card-conteudo">
                <h2>${elemento.titulo}</h2>
                <p>${elemento.descricao}</p>
                <a href="">veja mais!</a>
            </div>
        </div>`;
    container.innerHTML += card;    
})