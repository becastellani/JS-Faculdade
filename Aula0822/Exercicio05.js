/*Crie um programa que simule um jogo de dados. Peça ao usuário para lançar o dado (gerar
um número aleatório de 1 a 6) e exiba o resultado no DOM. Repita até que o usuário decida
parar de jogar */

const dadoForm = document.getElementById('lancar');
const resultadoElement = document.getElementById('resultado');
const bodyElement = document.body;



dadoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const dadoSorteado = parseInt(Math.floor(Math.random() * 6) + 1) ;
    resultadoElement.innerHTML = `O resultado eh ${dadoSorteado}`;

    
    const cores = ['red', 'green', 'blue', 'purple', 'yellow', 'orange' ]
    bodyElement.style.backgroundColor = cores[dadoSorteado - 1];
   
});