/*Crie um programa que simule um jogo de dados. Peça ao usuário para lançar o dado (gerar
        um número aleatório de 1 a 6) e exiba o resultado no console. Repita até que o usuário
        decida parar de jogar.*/ 


        parar = 0;

        function randomizar(maximo){
            return Math.floor(Math.random() * maximo)
            
        }
        do{
            parar = parseInt(prompt("Deseja sortear? (0 para SIM e 1 para NAO"));
            console.log(parseInt(randomizar(6)));
        }while(parar === 0)
        console.log("Você parou!!!")