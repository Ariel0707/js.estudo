function verificar() {
var data = new Date()
var ano = data.getFullYear() 
var fano = document.getElementById(`txtano`)
var res = document.querySelector(`div#res`)

if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert(`erro`)
}else {
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value)
    var genero = ``
    var img = document.createElement(`img`)
    img.setAttribute(`id`,`foto`)
    if (fsex[0].checked){
        genero = `Homem`
        if(idade >= 0 && idade < 12){
            //Criança
            img.setAttribute(`src`, `bhomem.jpg`)
        }else if (idade < 21 ){
            //Jovem
             img.setAttribute(`src`, `jhomem.jpg`)
        }else if (idade < 50 ){
            //aduto
             img.setAttribute(`src`, `vhomem.jpg`)
        }else {
            //idoso
             img.setAttribute(`src`, `vhomem.jpg`)
        }
    }else if(fsex[1].checked){
        genero = `Mulher`
        if(idade >= 0 && idade < 12){
            //Criança
            img.setAttribute(`src`, `bmulher.jpg`)
        }else if (idade < 21 ){
            //Jovem
            img.setAttribute(`src`, `jmulher.jpg`)
        }else if (idade < 50 ){
            //aduto
            img.setAttribute(`src`, `vmulher.jpg`)
        }else {
            //idoso
            img.setAttribute(`src`, `vmulher.jpg`)
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
   
 
  
}
