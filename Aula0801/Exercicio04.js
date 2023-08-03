/*Crie um programa que gere uma senha aleatória com uma combinação de letras maiúsculas,
minúsculas, números e caracteres especiais. Peça ao usuário para escolher o tamanho da
senha.
 */

function geradorSenha(){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;"<>,.?/';
    let senha = '';
    

    for (let i = 0; i < tamanhoSenha; i++) {

        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      
        senha += caracteres.charAt(indiceAleatorio);
      }



  return senha;
}

const tamanhoSenha = prompt('Digite o tamanho da senha desejada:');
const senhaGerada = geradorSenha(tamanhoSenha);

console.log('A senha gerada foi:', senhaGerada);