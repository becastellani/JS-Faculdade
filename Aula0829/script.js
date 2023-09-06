fetch("https://rickandmortyapi.com/api/character", {
    method: "GET"
})
.then(function(resposta){
    return resposta.json();
})
.then(function(respostaEmJson){
    var div = document.getElementById('div');
    respostaEmJson.results.forEach(element => {
        
       
        var card = document.createElement('div');

        card.innerHTML = `
            <img src="${element.image}" alt="${element.name}">
            <h2>${element.name}</h2>
            <p>Status: ${element.status}</p>
            <p>Espécie: ${element.species}</p>
            <p>Gênero: ${element.gender}</p>
            <p>Origem: ${element.origin.name}</p>
            <p>Localização: ${element.location.name}</p>
        `;

        div.appendChild(card);
    });

    

});
