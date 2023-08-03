/*Peça ao usuário para digitar uma palavra e conte quantas vogais (A, E, I, O, U) existem na
palavra. Exiba o resultado no console.
*/

function descobrirVogal(palavra){
    const vogais = ['A','E', 'I', 'O', 'U'];
    let contagem = 0;

    for (let i = 0; i < palavra.length; i++) {
        const letra = palavra[i].toUpperCase();

        if (vogais.includes(letra)) {
          contagem++;
        }
      }

      return contagem;
}

const palavraEnviada = prompt("Digite uma palavra");
const quantidadeVogais = descobrirVogal(palavraEnviada);

console.log(`A palavra "${palavraEnviada}" possui ${quantidadeVogais} vogais.`);


