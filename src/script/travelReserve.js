/**********************************/
/*Java Script para la Gestión de Reserva de Viajes*/
/**********************************/

/*Función que verifica que el usuario haya iniciado sesión y realizar la reserva*/
function reservePackage(button){
    let user_logged = sessionStorage.getItem("logged");
    if (user_logged !== "") {
        openPopUpTravelPackages(button);
    }

    else{
        window.alert("Es necesario iniciar sesión para reservar un paquete");
        return;
    }
}

function validateParameters(){
    /*Llamamos a la funcion monthValidate ya que el usuario no puede reservar en meses distintos a noviembre y diciembre*/
    correctDate = monthValidate();
    if (correctDate !== true){
        return false;
    }

    /*Llamamos a la funcion que verifica que sea la password del usuario*/
    correctPassword = validateOperation();
    if (correctPassword !== true){
        return false;
    }

    return true;
}

/*Función que verifica aspectos escenciales con respecto a las fechas*/
function monthValidate(){
    const startDateValue = document.forms["TravelForm"]["fechaInicioTravel"].value;
    const finalDateValue = document.forms["TravelForm"]["fechaFinTravel"].value;
    const cardDate = document.forms["TravelForm"]["cardFecha"].value;

    const startDate = new Date(startDateValue);
    const finalDate = new Date(finalDateValue);
    const cardFinalDate = new Date(cardDate);

    const startMonth = startDate.getMonth();
    const finalMonth = finalDate.getMonth();
    const cardFinalMonth = cardFinalDate.getMonth();

    if (startMonth !== 10 && startMonth !== 11) {
        window.alert("Por favor, selecciona una fecha en noviembre o diciembre para el inicio del viaje.");
        return false;
    }
    if (finalMonth !== 10 && finalMonth !== 11) {
        window.alert("Por favor, selecciona una fecha en noviembre o diciembre para el fin del viaje.");
        return false;
    }
    if (startDate >= finalDate) {
        window.alert("La fecha de inicio debe ser anterior a la fecha de fin.");
        return false;
    }
    if (finalMonth >= cardFinalMonth) {
        window.alert("La tarjeta tiene una fecha de vencimiento anterior a la de fin de viaje.");
        return false;
    }

    return true;
}

/*Función que verifica que la password es igual a la guardada*/
function validateOperation(){
    let confirmOperationWithPassword = document.getElementById("passwordTravel").value;

    let user_logged = sessionStorage.getItem("logged");
    let user = JSON.parse(localStorage.getItem(user_logged));
    if (user.password !== confirmOperationWithPassword){
        window.alert("La contraseña no coincide con la almacenada en nuestra base de datos. Intente de nuevo");
        return false;
    }
    return true;
}

function validateCard(input){
    const numeroTarjeta = input.value.replace(/\s+/g, '');
    const regex = /^\d{16}$/;
    if (!regex.test(numeroTarjeta)) {
        alert("Por favor, ingresa un número de tarjeta válido de 16 dígitos. (Recuerda dejar un espacio en blanco cada 4 dígitos)");
        input.value = "";
    }
}

/*Función que al limpiar los campos, el usuario confirme la operación*/
function clearTravelForm() {
    const formularioViajes = document.getElementById("TravelForm");
    const confirmationClearTravelForm = confirm("¿Está seguro que desea borrar los datos de todos los campos?");

    if (confirmationClearTravelForm){
        formularioViajes.reset();
        console.log("Se han borrado los datos");
    }
    else{
        console.log("Se mantienen los datos");
    }
}

/*Función que al cancelar, el usuario confirme la operación*/
function closeTravelForm() {
    const confirmationCloseTravelForm = confirm("¿Está seguro que desea cerrar el formulario de Reserva de Viajes?");
    
    if (confirmationCloseTravelForm){
        closePopUpTravelPackages();
        console.log("Se ha cerrado el formulario de reserva de viajes");
    }
    else{
        console.log("No se ha cerrado el formulario");
    }
}

/*Función para almacenar los datos del paquete de viajes*/
function saveTravelData(){
    let user_logged = sessionStorage.getItem("logged");
    if (user_logged !== "") {
        let userTravelData = JSON.parse(localStorage.getItem(user_logged));
        let email = document.forms["TravelForm"]["emailTravel"].value;

        if (userTravelData.email === email){
            let package = document.forms["TravelForm"]["selectedPackage"].value;
            let phone = document.forms["TravelForm"]["phoneTravel"].value;
            let fechaInicio = document.forms["TravelForm"]["fechaInicioTravel"].value;
            let fechaFin = document.forms["TravelForm"]["fechaFinTravel"].value;
            let cardInfo = document.forms["TravelForm"]["cardNumber"].value;
            let cardOwner = document.forms["TravelForm"]["cardName"].value;
            let cardDate = document.forms["TravelForm"]["cardFecha"].value;
            let cardcode = document.forms["TravelForm"]["cvv"].value;

            let dataTravelPlan = {
                packageTravel: package,
                phoneTraveler: phone,
                emailTraveler: email,
                startDate: fechaInicio,
                endDate: fechaFin,
                cardNum: cardInfo,
                cardNickName: cardOwner,
                cardEndDate: cardDate,
                cardCVV: cardcode,
            };

            rechargeTravelData(userTravelData, dataTravelPlan);
        }
        else{
            window.alert("El correo debe coincidir con el correo ya registrado");
            return; 
        }
    }
    else{
        window.alert("Es necesario iniciar sesión para hacer una reserva");
        return;
    }
}

/*Función que recarga la información del usuario cada vez que se escribe una nueva carta*/
function rechargeTravelData(dataStore, dataTravel){

    let travelPackagesArray = dataStore.travelPackages;
    travelPackagesArray.push(dataTravel);

    localStorage.setItem(dataStore.username, JSON.stringify(dataStore));

    window.alert("La información del paquete de viaje se ha guardado correctamente");
}
