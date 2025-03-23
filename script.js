const form = document.getElementById('form')
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const seuNome = document.getElementById('nome')
    const sueNumero = document.getElementById ('numero')

        let linha = '<tr>';
        linha += ` <td>${seuNome.value}</td>`
        linha += ` <td>${sueNumero.value}</td>`
        linha += '</tr>';
        linhas += linha;
    
        const corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML = linhas
    
        seuNome.value = '';
        sueNumero.value = '';
})
