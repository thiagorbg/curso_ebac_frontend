const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carla', nota: 7 },
    { nome: 'Daniel', nota: 4 },
    { nome: 'Eduarda', nota: 9 }
];

function alunosAprovados(lista) {
    return lista.filter(aluno => aluno.nota >= 6);
}

// Exemplo de uso:
const aprovados = alunosAprovados(alunos);
console.log(aprovados);