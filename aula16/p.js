let numeros = []; // Array para armazenar os números adicionados

function Adicionar() {
    let inputNumero = document.getElementById('txtn');
    let selectLista = document.getElementById('seltab');
    // let divResposta = document.getElementById('res'); // Este elemento não existe no HTML, mas pode ser adicionado para mostrar os resultados finais.

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
    }
    // Limpa o campo de entrada e foca nele para a próxima digitação
    inputNumero.value = '';
    inputNumero.focus();
    
}
function Fializar() {
     let inputNumero = document.getElementById('txtn');
    let selectLista = document.getElementById('seltab');
    let resultados = document.getElementById('resp');
    
     let num = Number(inputNumero.value);
     console.log(num.length());
    
  
   resultados.innerHTML +=`${num.length()}` 

    
}