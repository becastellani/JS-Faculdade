/*Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "profissao". Em
seguida, imprima o nome da pessoa no console. */


var pessoa = {
    nome: 'Bernardo',
    idade: '18',
    profissao: 'Suporte'
}

function exibirObjeto(pessoa){
    return console.log(pessoa.nome + ', ' + pessoa.idade + ', ' + pessoa.profissao)
}

exibirObjeto(pessoa)