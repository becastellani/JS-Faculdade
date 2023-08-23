/*Crie um programa que solicite ao usuário um número através de um formulário e exiba o
dobro desse número no DOM */

const form = document.forms.registration;

form.addEventListener("submit", function (event){
    event.preventDefault();
    var n1 = parseFloat(document.getElementById("valor1").value);
    var dobro = n1 * 2;

    var titulo = document.createElement("h1");
    titulo.innerText = `O dobro é ${dobro}`;

    document.body.appendChild(titulo);
});
