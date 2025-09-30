function Adicionar() {
    let adi = document.getElementById(`txtn`)
    let mostra = document.getElementById(`submit`)
    let respota = document.getElementById(`res`)
    
    if (adi.value.length == 0) {
        window.alert(`[ERRO] Por favor, digite um número!`);
        return;
    } else(adi.value.length > 100);{
        window.alert(`[ERRO] Valor em validor!`);
       return;
    } {
        let num = Number(adi.value)
        respota.innerHTML = '';
        for(let num in adi){
            let item = document.createElement(`option`)
            item.text = `${num} `
            respota.appendChild(item)

        }
    }
        
    
     let num = Number(adi.value)
    respota.innerHTML = '';
      for(let num in adi){
        let item = document.createElement(`option`)
        item.text = `${num} `
        respota.appendChild(item)

        }
    

 

    

}
