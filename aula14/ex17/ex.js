function Gerar_Tabuada(){
    var numero = document.querySelector('#text1');
    var resultado = document.querySelector('div#res');

    // Valida se o campo de número está vazio
    if (numero.value.length == 0){
        window.alert(`[ERRO] Por favor, digite um número!`);
        return; // Interrompe a função se não houver número
    }

    var num = Number(numero.value)
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Gera a tabuada de 1 a 10
    for(let c = 1; c <= 10; c++) {
        let item = document.createElement('option');
        item.text = `${num} x ${c} = ${num*c}`;
       resultado.appendChild(item);
    }
}
