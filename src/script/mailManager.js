/**********************************/
/*Java Script para la Gestión del envío de cartas*/
/**********************************/

/*Función que verifica que el usuario haya iniciado sesión y el email sea el correcto*/
function sendLetter(){
    if (validateLogIn === true){
        let userMailData = JSON.parse(validateData);
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
    var templateParams = {
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
    let DataKey = `${dataStore.username},${dataStore.password}`;
    let storedData = JSON.parse(localStorage.getItem(DataKey)) || {};

    let lettersArray = storedData.letters || [];
    lettersArray.push(dataMail);

    let newRegisterData = {
        username: dataStore.username,
        password: dataStore.password,
        city: dataStore.city,
        email: dataStore.email,
        country: dataStore.country,
        gender: dataStore.gender,
        letters: lettersArray
    }

    localStorage.setItem(DataKey, JSON.stringify(newRegisterData));

    window.alert("La información de la carta se ha guardado correctamente");
}