/**
  Crie uma classe chamada "Retângulo" que tenha os atributos largura e altura. A classe deve
ter um método chamado calcularArea que retorna a área do retângulo (largura * altura).
 */

class Retangulo {
    constructor(largura, altura) {
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.largura * this.altura;
    }
  }
  
  const retangulo = new Retangulo(10, 20);
  console.log("Área do retângulo:", retangulo.calcularArea());