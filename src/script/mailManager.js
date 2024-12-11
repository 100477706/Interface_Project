/**********************************/
/*Java Script para la Gestión del envío de cartas*/
/**********************************/

/*Función que verifica que el usuario haya iniciado sesión y el email sea el correcto*/
function sendLetter(){
    console.log("Hola");
    let user_logged = sessionStorage.getItem("logged");
    if (user_logged !== "") {
        let userMailData = JSON.parse(localStorage.getItem(user_logged));
        let emailLetter = document.forms["MailForm"]["correo"].value;

        if (userMailData.email === emailLetter){
            let cityLetter = document.forms["MailForm"]["ciudad"].value;

            let nameLetter = document.forms["MailForm"]["nombre"].value;
            let countryLetter = document.forms["MailForm"]["pais"].value;
            let messageLetter = document.forms["MailForm"]["message"].value;

            let dataLetter = {
                nameMail: nameLetter,
                emailMail: emailLetter,
                cityMail: cityLetter,
                countryMail: countryLetter,
                messageMail: messageLetter
            };

            enviarcartacorreo(dataLetter)
            rechargeData(userMailData, dataLetter);
        }
        else{
            window.alert("El correo introducido no es el mismo con el que se ha dado de alta");
            return;
        }
    }
    else{
        window.alert("Es necesario iniciar sesión para enviar una carta");
        return;
    }
}

function enviarcartacorreo(dataLetter) {
    emailjs.init("RUcPRt9XaorCJKOTE");

    // Verifica si la clave pública se ha cargado correctamente
    if (!emailjs) {
        throw new Error("No se pudo inicializar EmailJS. Verifica tu clave pública.");
    }

    // Parámetros para enviar el correo
    let templateParams = {
        nombre: dataLetter.nameMail,
        correo: dataLetter.emailMail,
        ciudad: dataLetter.cityMail,
        pais: dataLetter.countryMail,
        mensaje: dataLetter.messageMail,
    };

    emailjs.send('service_69dgpth', 'template_737dot7', templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
}

/*Función que recarga la información del usuario cada vez que se escribe una nueva carta*/
function rechargeData(dataStore, dataMail){

    let lettersArray = dataStore.letters;
    lettersArray.push(dataMail);

    localStorage.setItem(dataStore.username, JSON.stringify(dataStore));

    window.alert("La información de la carta se ha guardado correctamente");
}