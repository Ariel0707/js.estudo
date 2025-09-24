function contar(){
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')
    var rep = document.querySelector('div#rep')

for( var txti = ``; txti  <= txtf;txti++){
    console.log(txti)
   /* var inicio = Number(txti.value)
    var fim = Number(txtf.value)
    var passo = Number(txtp.value)*/

}  if (txtp <= 0){
        alert('passo invalido! considerando passo 1')
        txtp = txti
    }

    /* for( var c = inicio; c <= fim; c += passo){
        rep.innerHTML += `${c} `
        console.log(c)

    }
}*/rep.innerHTML = `${txti}`}


