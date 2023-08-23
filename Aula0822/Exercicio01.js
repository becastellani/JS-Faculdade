/**Crie uma função que solicite ao usuário seu nome através de um input e, em seguida, exiba
uma mensagem personalizada de boas-vindas na DOM.
 */


function exibirMensagem() {
    var nomeInput = document.getElementById("nome");
    var nome = nomeInput.value;
    var mensagem = "Bem vindo ao nosso time " + nome;

    
   document.getElementById("mensagem").innerHTML = mensagem;
    
}
