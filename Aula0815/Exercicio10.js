/*Crie uma função que recebe dois arrays de mesmo tamanho, um contendo chaves e outro
contendo valores. A função deve retornar um objeto Map, onde as chaves são os elementos
do primeiro array e os valores são os elementos correspondentes do segundo array.
 */


function minhaFuncao(chaves, valores) {
    const mapa = new Map();
  
    for (let i = 0; i < chaves.length; i++) {
      mapa.set(chaves[i], valores[i]);
    }
  
    return mapa;
  }
  
  const chaves = ["nome", "idade", "cidade"];
  const valores = ["Bernardo", 18, "Campinas"];
  const mapa = minhaFuncao(chaves, valores);
  console.dir(mapa);