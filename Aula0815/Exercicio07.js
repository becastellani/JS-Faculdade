/*Crie uma função que receba um array de números como parâmetro e retorne true se todos
os elementos do array forem números pares, caso contrário, retorne false */

function ehPar(array) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'number' || array[i] % 2 !== 0) {
        return false;
      }
    }
    return true;
  }
  
  // Exemplos de uso:
  const array1 = [10, 4, 6, 26];
  const array2 = [20, 3, 5, 7];
  const array3 = [4, 30, 22, 7];
  
  console.log(ehPar(array1)); // Output: true
  console.log(ehPar(array2)); // Output: false
  console.log(ehPar(array3)); // Output: false
  