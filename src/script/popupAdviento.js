function popupAdviento(dia){
    let hoy = new Date().getDate();
    if (dia <= hoy) {
        document.getElementById("Frase_del_dia_ventana").style.display = "flex";
        document.getElementById("cargaRegistro").style.display = "block";
        const frasesNavidenas = [
            "La Navidad no es un momento ni una estación, sino un estado de ánimo.",
            "La magia de la Navidad está en el aire.",
            "Que tu corazón se llene de amor y alegría esta Navidad.",
            "Navidad es tiempo de dar y recibir amor.",
            "La mejor época para creer en los milagros es la Navidad.",
            "Que cada campanada sea un deseo cumplido.",
            "La Navidad es el calor que regresa al corazón de las personas.",
            "Un regalo vale poco sin un corazón que lo entregue.",
            "Esta Navidad, regala sonrisas, amor y buenos recuerdos.",
            "Los mejores regalos no vienen en cajas, vienen del corazón.",
            "Que la luz de la Navidad ilumine cada rincón de tu vida.",
            "Es tiempo de compartir y construir recuerdos inolvidables.",
            "Que tu hogar se llene de risas y felicidad esta Navidad.",
            "La verdadera esencia de la Navidad está en dar, no en recibir.",
            "La alegría de la Navidad es contagiosa. ¡Espárcela por todas partes!",
            "Navidad: el momento perfecto para estar con los que amas.",
            "Cada estrella en el cielo es un deseo navideño esperando cumplirse.",
            "La Navidad transforma lo ordinario en algo extraordinario.",
            "El espíritu de la Navidad está en cada pequeño detalle.",
            "Que tus días estén llenos de paz y amor en estas fiestas.",
            "Navidad no es lo que está bajo el árbol, sino quienes están alrededor de él.",
            "La música de la Navidad son las risas de los seres queridos.",
            "Que la paz de esta Navidad dure todo el año.",
            "El mejor adorno de Navidad es una sonrisa sincera.",
            "¡FELIZ NAVIDAD!"
        ];
        let container = document.getElementById("Frase_del_dia_ventana");
        container.innerHTML = ''; /*limpio el contenedor cada vez que pulso un día*/
        let titulo = document.createElement("h1");
        titulo.textContent = "Día" + dia;
        container.appendChild(titulo);
        let texto = document.createElement('p');
        texto.textContent = frasesNavidenas[dia - 1];
        container.appendChild(texto);
        let X = document.createElement("i");
        X.classList.add("material-icons");
        X.textContent = "cancel";
        X.onclick = closepopupAdviento
        container.appendChild(X);
    }
    else{
        window.alert("Todavía no es " + dia);
    }
}
function closepopupAdviento(){
    document.getElementById("Frase_del_dia_ventana").style.display = "none";
    document.getElementById("cargaRegistro").style.display = "none";
}