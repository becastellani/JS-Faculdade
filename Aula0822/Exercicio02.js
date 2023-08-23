/*Crie um programa que solicite dois números ao usuário por meio de um formulário. Em
seguida, calcule a soma dos dois números e exiba o resultado no DOM utilizando com a
seguinte mensagem “{valor 1} + {valor 2} é igual a {resultado}” onde o resultado deve estar
em negrito.
 */


function exibirResultado(){
    
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var soma = valor1 + valor2;

    var resultado = "A soma de " + valor1 + " + " + valor2 + " é igual a " + soma ;
    
    document.getElementById("resultado").innerHTML += resultado;
}