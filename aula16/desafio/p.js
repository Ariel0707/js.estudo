let numeros = []; // Array para armazenar os números adicionados
let res = document.getElementById('res'); // Elemento para exibir os resultados

function Adicionar() {
    let inputNumero = document.getElementById('txtn');
    let selectLista = document.getElementById('seltab');

    let num = Number(inputNumero.value);

    // Valida se o campo está vazio, se o número está no intervalo correto ou se já foi adicionado
    if (inputNumero.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!');
    } else if (num < 1 || num > 100) {
        window.alert('[ERRO] Por favor, digite um número entre 1 e 100!');
    } else if (numeros.indexOf(num) != -1) {
        window.alert('[ERRO] Este número já foi adicionado. Por favor, digite outro.');
    } else {
        // Adiciona o número ao array
        numeros.push(num);

        // Cria e adiciona o elemento <option> ao <select>
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado.`;
        selectLista.appendChild(item);
        res.innerHTML = ''; // Limpa o resultado anterior ao adicionar novo número
    }
    // Limpa o campo de entrada e foca nele para a próxima digitação
    inputNumero.value = '';
    inputNumero.focus();
}

function Finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let tot = numeros.length;
        let maior = numeros[0];
        let menor = numeros[0];
        let soma = 0;
        let media = 0;

        for (let pos in numeros) {
            soma += numeros[pos];
            if (numeros[pos] > maior) {
                maior = numeros[pos];
            }
            if (numeros[pos] < menor) {
                menor = numeros[pos];
            }
        }
        media = soma / tot;

        res.innerHTML = ''; // Limpa o conteúdo anterior
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}
