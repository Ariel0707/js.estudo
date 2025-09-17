function carregar() {
    var msg = document.getElementById(`msg`)
    var foto = document.getElementById(`img`)
    var data = new Date()
   // var hora = data.getHours()
  var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
}
if (hora >= 0 && hora < 12 ) {
    //BOM DIA 
   foto.src = `dia22.jpg`
   }
    
else if (hora >= 12 && hora < 18){
    //BOA TARDE
    foto.src = `tarde.jpg`
}else{
    //BOA NOITE
    foto.src = `noite.png`
}
