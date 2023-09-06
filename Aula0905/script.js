const API ="http://localhost:5558/tarefa"

async function listarTarefas(){
    

    const result = await fetch(API, {
        method: "GET",
    });

    const data = await result.json();

    const conteudo = document.querySelector("div#conteudo");
    conteudo.style.marginTop = "40px"
    conteudo.innerText = "";


    data.forEach(function(tarefa) {
        const button = document.createElement("button");
        button.innerHTML = "Exterminar"

        const strong = document.createElement("strong");
        strong.innerText = tarefa.id;
        
        button.addEventListener("click", function () {
            ExcluirTarefa(tarefa.id);  // Chame a função ExcluirTarefa com o ID da tarefa como parâmetro.
        });


        const p = document.createElement("p");
        p.appendChild(strong)
        p.innerText = tarefa.titulo
        p.appendChild(button);
        conteudo.appendChild(p);
    });
}

async function salvarTarefa(event) {
    event.preventDefault();

    const titulo = document.querySelector("input#tarefa").value;

    fetch(API, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ titulo }),
    });
}


async function ExcluirTarefa(tarefaId) {
    await fetch(`${API}/${tarefaId}`, {  
        method: "DELETE",
    });
    
  
    listarTarefas();
}



window.addEventListener("load", listarTarefas);
document.querySelector("form")
.addEventListener("submit", salvarTarefa);


