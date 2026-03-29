let tarefas = [];

function adicionar(t) {
    tarefas.push({texto: t, concluida: false});
};

function remover(i) {
    tarefas.splice(i, 1);
};

function marcarConcluida(i) {
    if (tarefas[i].concluida != true) {
        tarefas[i].concluida = true;
    }
};

function listar() {
    for (let i = 0; i < tarefas.length; i++) {
        console.log(`${tarefas[i].concluida == true ? "→ [x]" : "→ [ ]"} ${tarefas[i].texto}`) 
    }
    console.log()
};

adicionar("Estudar JavaScript")
adicionar("Fazer exercicios")
adicionar("Revisar codigo")
listar()
marcarConcluida(0)
listar()
remover(1)
listar()
