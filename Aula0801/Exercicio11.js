/*1) Crie um objeto chamado "contaBancaria" com métodos para depositar e sacar dinheiro,
além de uma propriedade para o saldo atual. Em seguida, faça algumas operações de
depósito e saque e imprima o saldo atual no console. */


const contaBancaria = {
    saldo: 0,
  
    depositar: function (valor) {
      this.saldo += valor;
      console.log("Saldo atual: " + this.saldo);
    },
  
    sacar: function (valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log("Saque realizado. Saldo atual: " + this.saldo);
      } else {
        console.log("Saldo insuficiente para realizar o saque.");
      }
    },
  };

  let escolha;

  do {
    escolha = parseInt(prompt("O que deseja fazer? 0 - Sair, 1 - Depositar, 2 - Sacar"));
    if (escolha === 0) {
      break; // Sai do loop
    } else if (escolha === 1) {
      const valorDeposito = parseInt(prompt("Quanto você deseja depositar?"));
      contaBancaria.depositar(valorDeposito);
    } else if (escolha === 2) {
      const valorSaque = parseInt(prompt("Quanto você deseja sacar?"));
      contaBancaria.sacar(valorSaque);
    }
  } while (true);

