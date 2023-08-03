/*Peça ao usuário para inserir uma senha e utilize um loop para verificar se ela atende aos
critérios de segurança (por exemplo, contém pelo menos uma letra maiúscula, um número e
um caractere especial).
 */



function descobrirSenha(senhaGerada){
const especial = ['@','!','#','$','%','&','*']
const caracteres = ['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numeros = ['1','2','3','4','5','6','7','8','9','0']
let condition = 0
    do {
        
        let temEspecial = especial.some((char) => senhaGerada.includes(char));

        let temCaracteres = caracteres.some((char) => senhaGerada.includes(char));
    
        let temNumeros = numeros.some((char) => senhaGerada.includes(char));

        if(temEspecial && temCaracteres && temNumeros){
            console.log("A senha atende aos requisitos");
            condition = 1
        }else{
            console.log("A senha não tem segurança");
            senhaGerada = prompt("Digite uma senha para ser validada novamente");
            
            
        }
    } while (condition === 0);
}


const senhaGerada = prompt("Digite uma senha para ser validada")

descobrirSenha(senhaGerada)