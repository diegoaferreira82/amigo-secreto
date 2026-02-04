//
let amigos = [];
let listaAmigos = document.getElementById('lista-amigos');

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (!amigos.includes(nomeAmigo) && nomeAmigo != '') {
        amigos.push(nomeAmigo);
        listaAmigos.textContent = amigos;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.textContent = '';
    for (let i = 0; i < amigos.length; i++) {
        if (i != amigos.length - 1) {
            listaSorteio.innerHTML += `${amigos[i]} -> ${amigos[i + 1]}<br>`;
            console.log(`${i} -- ${amigos[i]} -> ${amigos[i + 1]}`);
        } else {
            listaSorteio.innerHTML += `${amigos[i]} -> ${amigos[0]}<br>`;
            console.log(`${i} -- ${amigos[i]} -> ${amigos[0]}`);
        }
    }
}

function reiniciar() {
    amigos = [];
    listaAmigos.textContent = '';
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}