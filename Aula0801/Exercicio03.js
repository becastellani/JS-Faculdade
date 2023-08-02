/*Crie uma função que converta uma temperatura de Celsius para Fahrenheit ou vice-versa,
dependendo da escolha do usuário. Exiba o resultado no console.
 */

tipo = parseInt(prompt("Se você deseja converter para Celsius digite 1, para Fahrenheit digite 2"))
temperatura = parseFloat(prompt("Digite a temperatura: "))

function paraCelsius(farenheit){
    return 5 * (farenheit - 32) / 9;
}


function paraFarenheit(celsius){
    return celsius / 5 * 9 + 32;
}


function calcular(){
    if(tipo === 1){
        console.log("A temperatura em Celsius é: " + paraCelsius(temperatura));
    }else if(tipo === 2){

        console.log("A temperatura em Farenheit é: " + paraFarenheit(temperatura))
    }
}

calcular()