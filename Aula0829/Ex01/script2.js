fetch("https://run.mocky.io/v3/e612970b-cf4a-45f7-88ee-74a64cfa2f8f", {
    method: "GET"
  })
  .then(function(resposta) {
    return resposta.json(); 
  })
  .then(function(dadosSimulados) {
    var dadosContainer = document.getElementById("dados-container");
  
   
    dadosSimulados.noticias.forEach(function(noticia) {
      var cidadeDiv = document.createElement("div");
  
      cidadeDiv.innerHTML = 
      `
      <h1> ${ noticia.titulo } </h1>
      <p> ${ noticia.conteudo.texto } </p>
      <img style="width:30%; "src="${ noticia.conteudo.imagem }">
  
      `
      dadosContainer.appendChild(cidadeDiv);
    });
  })
  
  .catch(function(erro) {
    console.error("Erro ao buscar os dados:", erro);
  });
  