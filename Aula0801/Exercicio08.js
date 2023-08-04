/*Crie um programa que permite ao usuário adicionar itens a uma lista de compras e exiba a
lista completa quando ele finalizar.
*/


function adicionarProduto(lista) {
    const produto = prompt("Digite o nome do produto que deseja adicionar à lista de compras:");
    lista.push(produto);
  }
  
  function exibirListaCompleta(lista) {
    console.log("Lista de compras:");
    lista.forEach((produto, index) => {
      console.log(`${index + 1}. ${produto}`);
    });
  }
  
  function programaListaDeCompras() {
    const listaDeCompras = [];
  
    let continuar = true;
  
    while (continuar) {
      const opcao = prompt("Deseja adicionar um produto à lista? (Sim/Nao)");
  
      if (opcao.toLowerCase() === "Sim") {
        adicionarProduto(listaDeCompras);
      } else if (opcao.toLowerCase() === "Nao") {
        continuar = false;
      } else {
        console.log("Opção inválida. Por favor, digite 'Sim' para adicionar ou 'Nao' para finalizar.");
      }
    }
  
    exibirListaCompleta(listaDeCompras);
  }
  
  programaListaDeCompras();
  