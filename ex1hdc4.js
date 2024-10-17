var estudantes = [];
function cadastrarEstudantes() {
    let contagem = true;
    while (contagem) {
        const estudante = prompt("Digite o nome do estudante para cadastrá-lo (Se quiser finalizar digite 'PARE' para finalizar): ");
        if (estudante && estudante.toUpperCase() !== "PARE") {
            estudantes.push(estudante);
        } else {
            contagem = false;
        }
    }
}

function exibirEstudantes() {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = ''; 

    estudantes.forEach((estudante) => {
        const linha = document.createElement("tr");
        const celula = document.createElement("td");
        celula.textContent = estudante;
        linha.appendChild(celula);
        tabela.appendChild(linha);
    });

    document.getElementById("contagem").textContent = `A quantidade de estudantes cadastrados no total é: ${estudantes.length}. Siga uma lista de todos os estudantes em questão: `;
}
