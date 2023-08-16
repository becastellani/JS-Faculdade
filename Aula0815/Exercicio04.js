/*Crie uma função que receba um array de números como parâmetro e retorne a soma de
todos os elementos do array */





function minhaArray(numeros){
    let soma =0
for (let i in numeros) {
    
    soma += numeros[i];
    
}
return soma
}


const numeros = [1,2,3,4,5,6,7,8,9,10]


console.log(minhaArray(numeros));