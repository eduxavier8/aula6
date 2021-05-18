function carregar() {
   var msg = document.getElementById('msg')
var img = document.getElementById('imagem') 
var data = new Date()
var hora = data.getHours()
//var hora = 21
var minuto = data.getMinutes()
msg.innerHTML = `Agora Sao ${hora} horas e ${minuto} minutos`
if(hora >= 0 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background = '#ED954A'
//bom dia
} else if (hora >= 12 && hora < 19){
    img.src = 'tarde.png'
    document.body.style.background = '#B5A367'
//boa tarde
} else {
    img.src = 'noite.png'
    document.body.style.background = '#756E6E'
    //boa noite
}
}
