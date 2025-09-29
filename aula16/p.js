function Adicionar() {
    let adi = document.getElementById(`txtn`)
    let mostra = document.getElementById(`submit`)
    if (adi.value.length == 0) {
        window.alert(`[ERRO] Por favor, digite um número!`);
        return;
    }else(adi.value.length >= 101);{
        window.alert(`[ERRO] Valor em validor!`);
        return;
    }

}
