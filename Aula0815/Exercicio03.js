/*Considere o seguinte objeto que contém informações sobre um usuário:

a) Utilize a desestruturação para extrair as propriedades nome, idade e email do objeto usuario
e armazená-las em variáveis separadas.
b) Em seguida, utilize a desestruturação para extrair as propriedades cidade, estado e pais do
objeto endereco e armazená-las em variáveis separadas.
 */


const usuario = {
    nome: "Maria",
    idade: 28,
    email: "maria@example.com",
    endereco: {
        cidade: "Sao Paulo",
        estado: "SP",
        pais: "Brasil",
    }
} ;

var {nome, idade, email, endereco:{cidade, estado, pais}} = usuario

function primeiraDes() {
    console.log("Nome: ", nome)
    console.log("Idade: ", idade)
    console.log("Email: ", email)
    
}


function segundaDes(){
    console.log("Cidade: ", cidade)
    console.log("Estado: ", estado)
    console.log("Pais: ", pais)

}

primeiraDes()
segundaDes()


