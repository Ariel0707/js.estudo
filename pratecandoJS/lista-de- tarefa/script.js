let tarefas = [];

function adicionarTarefa() {
   
      // Adiciona a tarefa à lista
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim()
   
    let mensagem = document.getElementById(`mensagem`)

        // Validação para campo vazio
    if (tarefa== "") {
        // Exibe mensagem de erro
       let mensagemerro = document.createElement("p");
       mensagemerro.style.color = "red";
       mensagemerro.textContent = "Por favor, digite uma tarefa!";
       mensagem.appendChild(mensagemerro);
       
    } else{
        // Exibe mensagem de sucesso

        let mensagemsucesso =`Tarefa adicionada com sucesso!`;
            mensagem.textContent = mensagemsucesso;
        
       

        //cria novo item (li) e insere na lista ul
        tarefas.push(tarefa);
        renderizarTarefas();
      
    }
      


    // Limpa o campo de entrada após adicionar a tarefa
    
    inputTarefa.value = ""
    
    }
 
    
 

// Função para renderizar as tarefas na lista
function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    // Itera sobre as tarefas e cria um item de lista para cada uma
   
    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = 'Remover'
        botaoRemover.onclick = () => removerTarefa(i)

        
        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = 'Editar'
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)

        
    }
}
function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i){
     let tarefaEditada = prompt("Editar a tarefa:")
     if (tarefaEditada.trim() !== ""){
       tarefas[i] = tarefaEditada
       renderizarTarefas()
     }
}

function limparLista(){
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de  tarefas limpa com sucesso!"
}