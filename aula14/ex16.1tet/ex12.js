function clicar() {
    // 1. Obter os elementos do DOM
    var inicioEl = document.querySelector('#inp1');
    var fimEl = document.querySelector('#inp2');
    var passoEl = document.querySelector('#inp3');
    var mensagem = document.querySelector('#msg');
    var resultado = document.querySelector('#msg2');
    var cont = document.getElementById('conteudo');

    // Limpa o resultado anterior e redefine o estilo
    resultado.innerHTML = '';
    mensagem.innerHTML = "Contando:";
    mensagem.style.color = 'black';
    cont.style.height = "auto"; // Ajusta a altura dinamicamente

    // 2. Validar se os campos estão preenchidos
    if (inicioEl.value.length === 0 || fimEl.value.length === 0 || passoEl.value.length === 0) {
        mensagem.style.color = 'red';
        mensagem.innerHTML = `Por favor, preencha todos os campos.`;
        return;
    }

    // 3. Converter valores para números
    var inicio = Number(inicioEl.value);
    var fim = Number(fimEl.value);
    var passo = Number(passoEl.value);

    // 4. Validar o valor do passo
    if (passo <= 0) {
        window.alert('Passo inválido! Considerando o passo como 1.');
        passo = 1;
    }

    // 5. Executar a contagem
    if (inicio < fim) {
        // Contagem crescente
        for (let i = inicio; i <= fim; i += passo) {
            resultado.innerHTML += `${i} \u{1F449} `; // Adiciona emoji de mão apontando
        }
    } else {
        // Contagem regressiva
        for (let i = inicio; i >= fim; i -= passo) {
            resultado.innerHTML += `${i} \u{1F449} `;
        }
    }

    // Adiciona um emoji de bandeira no final
    resultado.innerHTML += `\u{1F3C1}`;
}
