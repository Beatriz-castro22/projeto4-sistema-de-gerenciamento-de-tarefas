function adicionarTarefa(lista, texto) {

    if (!texto || texto.trim() === "") {
        return lista;
    }

    lista.push({
        descricao: texto,
        concluida: false
    });

    return lista;
}

function concluirTarefa(tarefa) {

    tarefa.concluida = true;

    return tarefa;
}

module.exports = {
    adicionarTarefa,
    concluirTarefa
};