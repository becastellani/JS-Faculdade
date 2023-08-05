/* Crie um objeto chamado "calculadora" com métodos para adição, subtração, multiplicação e
divisão. Em seguida, use esses métodos para calcular e imprimir o resultado de uma
operação matemática no console. */


var calc = {
    adicao: function(n1,n2){
        return n1 + n2
    },
    subtracao: function(n1,n2){
        return n1 - n2
    },
    multiplicacao: function(n1,n2){
        return n1 * n2
    },
    divisao: function(n1,n2){
        return n1 / n2
    }
}

function calculadora(){

    const n1 = parseInt(prompt("Digite o primeiro valor: "));
    const n2 = parseInt(prompt("Digite o segundo valor: "));
    const opcao = parseInt(prompt("Digite qual ação você deseja fazer: 1 - Adição; 2 - Subtração; 3 - Multiplicação; 4 - Divisão"))


    switch (opcao) {

        case 1:
             console.log(calc.adicao(n1,n2))
            break;
        case 2:
            console.log(calc.subtracao(n1,n2))
            break;
        case 3:
            console.log(calc.multiplicacao(n1,n2))
            break;
        case 4:
            console.log(calc.divisao(n1,n2))
            break;
        default:
            break;
    }
}

calculadora();