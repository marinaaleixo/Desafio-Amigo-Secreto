// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo'); // Obtém o campo de texto onde o usuário digita o nome
    const nome = amigoInput.value.trim(); // Obtém o valor do campo e remove espaços extras

    // Verifica se o nome não está vazio antes de adicionar à lista
    if (nome !== "") {
        amigos.push(nome); // Adiciona o nome ao array de amigos
        amigoInput.value = ""; // Limpa o campo de texto

        // Atualiza a lista na interface
        atualizarListaAmigos();
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    // Adiciona cada nome à lista exibida
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto aleatório
function sortearAmigo() {
    // Verifica se há pelo menos um amigo na lista
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome.");
        return;
    }

    // Sorteia um amigo aleatório
    const indexSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indexSorteado];

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Resultado: ${amigoSorteado}</li>`;
}
