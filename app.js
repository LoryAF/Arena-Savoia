function sortear() {
    let quantidadeDupla = parseInt(document.getElementById('quantidade').value);
    let quantidadeBionicos = parseInt(document.getElementById('bionicos').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidadeDupla > (ate - de + 1)) {
        alert('Campo "Quantidade de dupla" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    let sorteados = [];
    let numero;

    // Sorteia números para os biônicos
    for (let i = 0; i < quantidadeBionicos; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    
    for (let i = 0; i < quantidadeDupla - quantidadeBionicos; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
   
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Duplas sorteadas:</label><ul>`;

    // Imprime os números dos biônicos
    if (quantidadeBionicos > 0) {
        for (let i = 0; i < quantidadeBionicos; i++) {
            resultado.innerHTML += `<li>${i + 1} biônico: ${sorteados[i]}</li>`;
        }
    }

    for (let i = quantidadeBionicos, jogo = 1; i < sorteados.length; i += 2, jogo++) { // Incrementa de 2 para pegar pares de números
        //let jogo = Math.floor(i / 2) + 1; // Calcula o número do jogo
        if (i + 1 < sorteados.length) { // Verifica se há um próximo número para o par
            resultado.innerHTML += `<li>${jogo} Jogo: ${sorteados[i]} x ${sorteados[i + 1]}</li>`;
        } else {
            resultado.innerHTML += `<li>${sorteados[i]}</li>`; // Se não houver par, exibe o último número sozinho
        }
    }
    resultado.innerHTML += `</ul>`;

    alterarStatusBotao();

}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('bionicos').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Duplas sorteadas:  nenhum até agora</label>';
    alterarStatusBotao();

}
