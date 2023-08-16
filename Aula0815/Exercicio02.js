/*Crie uma função que receba o nome de um aluno e suas notas em três disciplinas diferentes.
Em seguida, calcule a média das notas e retorne uma mensagem usando template strings,
informando o nome do aluno, suas notas e a média calculada. */



function MinhaFuncao(){
    media = (nota1 + nota2 + nota3) / 3
    console.log(`Sua primeira nota eh ${nota1}, a segunda eh ${nota2}, a terceira eh ${nota3}, e sua media eh igual a ${media}`)
    
}


var nota1 = parseFloat(prompt("Digite a primeira nota: "))
var nota2 = parseFloat(prompt("Digite a segunda nota: "))
var nota3 = parseFloat(prompt("Digite a terceira nota:"))


const notas = {
    nota1,
    nota2,
    nota3
}

MinhaFuncao()