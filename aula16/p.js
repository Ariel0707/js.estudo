function Adicionar() {
    let adi = document.getElementById(`txtn`)
    let mostra = document.getElementById(`submit`)
    let respota = document.getElementById(`res`)
    
        if (adi.value.length == 0) {
            window.alert(`[ERRO] Por favor, digite um número!`);
        
        } else{
        let num = Number(adi.value) 
        let c = num
        while (c = 100){
            let item = document.createElement(`option`)
            item.text = `${num}`
            mostra.appendChild(item)
            c++
        }

        } 
        
    }
       
    
    

        
    

 

    


