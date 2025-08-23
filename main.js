document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar');
    const nome = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const repositorios = document.querySelector('#repost');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#linkElement');

    const endpoint = 'https://api.github.com/users/thiagorbg';

    fetch(endpoint)
        .then(function(res) {
            if (!res.ok) {
                throw new Error('Erro na requisição');
            }
            return res.json();
        })
        .then(function(data) {
            nome.innerText = data.name || 'Nome não disponível';
            userName.innerText = data.login;
            avatar.src = data.avatar_url;
            seguindo.innerText = data.following; // número de pessoas que ele segue
            seguidores.innerText = data.followers; // número de seguidores
            repositorios.innerText = data.public_repos;
            linkElement.href = data.html_url;
            console.log(data);
        })
        .catch(function(error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao buscar os dados.');
        });
});
