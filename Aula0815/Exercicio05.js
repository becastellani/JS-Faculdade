/*Crie uma função que receba um array de números como parâmetro e retorne o maior
elemento do array */




function minhaArray(numeros) {
    var maior = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(minhaArray(numeros));