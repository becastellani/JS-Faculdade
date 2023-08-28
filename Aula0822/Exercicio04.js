/*Crie um programa que solicite ao usuário o raio de um círculo por meio de um formulário.
Em seguida, calcule e exiba a área do círculo no DOM. Formate a mensagem para incluir um
link que redirecione para um site com a fórmula da área do círculo.
*/

const raioForm = document.getElementById('raioCirculo');
const resultadoElement = document.getElementById('resultado');

raioForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const raio = parseFloat(document.getElementById('raio').value);
    const area = Math.PI * Math.pow(raio, 2);

    resultadoElement.innerHTML = `O resultado da área é igual a ${area}. <br> <a href="https://exemplo.com/formula-da-area-do-circulo">Fórmula</a>`;
});


