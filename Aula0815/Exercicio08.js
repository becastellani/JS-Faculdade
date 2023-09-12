/*Crie uma função que recebe uma string como parâmetro e conta a quantidade de
ocorrências de cada palavra na frase. A função deve retornar um objeto Map, onde as chaves
são as palavras encontradas e os valores são as contagens das palavras.
 */



function contarPalavras(str) {
    const palavras = str.toLowerCase().split(/\s+/);
    const contagemPalavras = new Map();
  
    palavras.forEach(palavra => {
      const palavraLimpa = palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      if (palavraLimpa) {
        contagemPalavras.set(palavraLimpa, contagemPalavras.get(palavraLimpa) + 1 || 1);
      }
    });
  
    return contagemPalavras;
  }

  const frase = "Meu nome eh ./dasds;123d;/ Bernardo Mantoan Castellani";
  const resultado = contarPalavras(frase);
  console.dir(resultado);