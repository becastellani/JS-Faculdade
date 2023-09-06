/* Crie uma função que converta uma temperatura de Celsius para Fahrenheit ou vice-versa,
dependendo da escolha do usuário. Exiba o resultado no DOM.
*/


function calculoGeral() {
    var numero = parseFloat(document.getElementById("num").value)
    var respostaElement =  document.getElementById('resposta');
    var situacaoElement = document.getElementById('situacao');

    if (document.getElementById("CelsiusParaFT").checked == true) {
        var fahrenheit = celsiusPara(numero);
        respostaElement.innerHTML = fahrenheit;
        if (fahrenheit >= 86) {  
            situacaoElement.innerHTML = "Está bem quente!";
        } else if (fahrenheit < 50) {  
            situacaoElement.innerHTML = "Está bem frio!";
        } else {
            situacaoElement.innerHTML = "A temperatura está confortavel!";
        }
    } else if (document.getElementById("FtParaCelsius").checked == true) {
        var celsius = farenPara(numero);
        respostaElement.innerHTML = celsius;
        if (celsius >= 30) {  
            situacaoElement.innerHTML = "Está bem quente!";
        } else if (celsius < 10) {  
            situacaoElement.innerHTML = "Está bem frio!";
        } else {
            situacaoElement.innerHTML = "A temperatura está confortavel!";
        }
    }



    function celsiusPara(x)
            {
            return (1.8*x + 32);
            }

            function farenPara(x)
            {

            return ( (x-32)*5/9 );
            }
   
}