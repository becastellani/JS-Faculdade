/*Peça ao usuário para digitar 5 números e, em seguida, calcule a média desses números.
Exiba o resultado no console.
*/ 

numeros = [];
const quantidadeNumeros = parseInt(prompt("Digite a quantidade de numeros que voce deseja digitar"));

function obterNumero(){
    for (let i = 0; i < quantidadeNumeros; i++) {
       const numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
       numeros.push(numero);
    }
}

obterNumero();

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

const media = soma / numeros.length;
console.log("A média dos números é:", media);
