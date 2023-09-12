/*Crie uma função que receba um array de números como parâmetro e retorne um novo array
sem elementos duplicados. */


function remover(meuArray) {
    const unico = [];
    
    for (let i = 0; i < meuArray.length; i++) {
        if (unico.indexOf(meuArray[i]) === -1) {
            unico.push(meuArray[i]);
        }
    }
    
    return unico;
}


const entrada = [1, 2, 2, 3, 4, 4, 5];
const resultado = remover(entrada);
console.log(resultado); 
