/*Crie uma calculadora que solicite ao usuário o peso e a altura e calcule o IMC. Exiba a
categoria do IMC (abaixo do peso, peso normal, sobrepeso, etc.) usando condicionais.
 */

function CalcularImc(conta){

    const baixo = 18.5
    const normal = 24.99
    const sobrepeso = 29.99

    if(conta < baixo){
        console.log("Abaixo do Peso")
        console.log(conta)
    }else if(baixo < conta && conta < normal){
        console.log("Peso Normal ")
        console.log(conta)

    }else if(normal < conta && conta < sobrepeso){
        console.log("Acima do Peso")
        console.log(conta)

    }
}

var perguntaPeso = parseFloat(prompt("Digite seu Peso"))
var perguntaAltura = parseFloat(prompt("Digite sua Altura em m"))


var conta = perguntaPeso / (perguntaAltura * perguntaAltura)

CalcularImc(conta.toFixed(2))