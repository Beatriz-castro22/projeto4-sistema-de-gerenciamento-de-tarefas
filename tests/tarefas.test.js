const {
    adicionarTarefa,
    concluirTarefa
} = require("../tarefas");

describe("Sistema de tarefas", () => {

    test("Adicionar tarefa válida", () => {

        const lista = [];

        adicionarTarefa(
            lista,
            "Estudar JavaScript"
        );

        expect(lista.length).toBe(1);
    });

    test("Adicionar tarefa vazia", () => {

        const lista = [];

        adicionarTarefa(
            lista,
            ""
        );

        expect(lista.length).toBe(0);
    });

    test("Concluir tarefa", () => {

        const tarefa = {
            descricao: "Teste",
            concluida: false
        };

        concluirTarefa(tarefa);

        expect(
            tarefa.concluida
        ).toBe(true);
    });

});