/**Crie um programa que gere uma senha aleatória com uma combinação de letras maiúsculas,
minúsculas, números e caracteres especiais. Peça ao usuário para escolher o tamanho da
senha. Exiba a senha no DOM. */

function geradorSenha(event){
    event.preventDefault();

    var senhaAtual = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    var quantidade = parseFloat(document.getElementById('qtd').value);
    var resultadoElement = document.getElementById('resultado')


    for (let i = 0; i < quantidade; i++) {
        let char = Math.floor(Math.random() * caracteres.length + 1 );

        senhaAtual += caracteres.charAt(char);
        
    }
    resultadoElement.innerHTML = `${senhaAtual}`


    
}


function copiarSenha() {
    var senhaElement = document.getElementById('resultado');
    var senhaTexto = senhaElement.innerText;

    var textarea = document.createElement('textarea');
    textarea.value = senhaTexto;

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Senha copiada para a área de transferência');
}



