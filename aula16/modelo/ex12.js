let num = document.querySelector(`input#frun`)
let liste = document.querySelector(`select#flista`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n){
    if(Number(n)>= 1 && Number(n) <= 100) {
        return true

    }else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
   }

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement(`option`)
       item.text = `Valor ${num.value} adicionado`
       liste.appendChild(item)
       res.innerHTML =``

    }else{
        window.alert(`Valor invalido ou ja encontrado na lsta`)
    }
    num.value = ``
    num.focus()
}


function Finalizar() {
    if(valores.length == 0){
        window.alert(`Adicione valores antes de finalizar!`)
    }else{
        let tot = valores.length
        let maior = valores[0]
        let meno = valores[0]
        let soma = 0
        let media = 0


        for(let pos in valores){
            soma += valores [pos]
            if(valores[pos]> maior)
                maior = valores[pos]
            if(valores[pos] < meno)
                meno = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo ${tot} numeros cadratados </p>`
        res.innerHTML += `<p> O maior valor infomado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor infomado foi ${meno} </p>` 
         res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
         res.innerHTML += `<p>A media dos valores digitados e ${media}</p>` 
    }
    
}
