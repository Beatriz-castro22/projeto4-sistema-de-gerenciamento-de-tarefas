const input = document.getElementById("tarefaInput");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");

const tarefas = [];

function atualizarContador() {
    contador.textContent = tarefas.length;
}

function renderizar() {

    lista.innerHTML = "";

    tarefas.forEach((tarefa) => {

        const li = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = tarefa.descricao;

        if (tarefa.concluida) {
            texto.classList.add("concluida");
        }

        const btnConcluir = document.createElement("button");
        btnConcluir.textContent = "Concluir";

        btnConcluir.addEventListener("click", () => {
            tarefa.concluida = true;
            renderizar();
        });

        li.appendChild(texto);
        li.appendChild(btnConcluir);

        lista.appendChild(li);
    });

    atualizarContador();
}

botao.addEventListener("click", () => {

    const texto = input.value.trim();

    if (texto === "") {
        return;
    }

    tarefas.push({
        descricao: texto,
        concluida: false
    });

    input.value = "";

    renderizar();
});