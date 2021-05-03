// hora del sistema


function mouthBynumber(mes){
    let mounthText
    if (mes == 0) {mounthText = "enero"}
    if (mes == 1) {mounthText = "febrero"}
    if (mes == 2) {mounthText = "marzo"}
    if (mes == 3) {mounthText = "abril"}
    if (mes == 4) {mounthText = "mayo"}
    if (mes == 5) {mounthText = "junio"}
    if (mes == 6) {mounthText = "julio"}
    if (mes == 7) {mounthText = "agosto"}
    if (mes == 8) {mounthText = "setpiembre"}
    if (mes == 9) {mounthText = "octubre"}
    if (mes == 10) {mounthText = "noviembre"}
    if (mes == 11) {mounthText = "diciembre"}
    return mounthText
}

function saludo(){
    const hora = new Date().getHours()
    const dia = new Date().getDate()
    const mes = new Date().getMonth()
    const ano = new Date().getFullYear()

    let mensajeDiaTardeNoche

    if (hora < 13) {mensajeDiaTardeNoche = "Buenos días"; styleName ="mañana"}
    else if (hora < 19) {mensajeDiaTardeNoche = "Buenas tardes"; styleName ="tarde"}
    else if (hora < 24) {mensajeDiaTardeNoche = "Buenas noches"; styleName ="noche"}
    
    document.getElementById("greetings").innerHTML = mensajeDiaTardeNoche
    document.getElementById("greetingWithDate").innerHTML = ("Hoy es " + dia + " de " + mouthBynumber(mes) + " de " + ano)
    document.body.className = styleName
}


saludo()