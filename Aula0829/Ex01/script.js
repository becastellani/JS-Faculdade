 fetch("https://run.mocky.io/v3/b1c93129-a657-4e06-a7a7-7b1159cdfe87", {
  method: "GET"
})
.then(function(resposta) {
  return resposta.json(); 
})
.then(function(dadosSimulados) {
  var dadosContainer = document.getElementById("dados-container");

 
  dadosSimulados.cidades.forEach(function(cidade) {
    var cidadeDiv = document.createElement("div");

    cidadeDiv.innerHTML = 
    `
    <h1> ${ cidade.nome } </h1>
    <h1> ${ cidade.temperatura.atual} </h1>
    <img style="width:30%; "src="${ cidade.temperatura.imagem }">

    `
    dadosContainer.appendChild(cidadeDiv);
  });
})

.catch(function(erro) {
  console.error("Erro ao buscar os dados:", erro);
});
