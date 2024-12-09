/**********************************/
/*Java Script del Menu de Cartas*/
/**********************************/

/*Función para abrir el menú con todas los paquetes adquiridos*/
function openMyPackages(){
    openPopUpMyPackages();
    let user_logged = sessionStorage.getItem("logged");
    let storedData = JSON.parse(localStorage.getItem(user_logged));

    showPackages(storedData);
    
}

/*Función para mostrar toda la información de los paquetes*/
function showPackages(data) {
    const showInfo = document.getElementById("infoMyPackages");
    const PackagesBank = data.travelPackages;
    showInfo.innerHTML = '';

    if (PackagesBank.length > 0) {
        for (let i = 0; i < PackagesBank.length; i++) {
            const paquetes = PackagesBank[i];

            const paquetesElement = document.createElement("div");
            paquetesElement.classList.add("MyProfileCardsBox");
            paquetesElement.setAttribute("draggable", "true");
            paquetesElement.dataset.index = i; 

            paquetesElement.addEventListener("dragstart", dragStart);
            paquetesElement.addEventListener("dragover", dragOver);
            paquetesElement.addEventListener("drop", drop);

            paquetesElement.innerHTML = `
                <strong>Paquete Adquirido ${i + 1}:</strong>
                <i class="material-icons" data-index="${i}" onclick="deletepaquetes(${i})">delete</i><br>
                <h2>Número de Paquete:</h2> ${paquetes.packageTravel}<br>
                <h2>Teléfono:</h2> ${paquetes.phoneTraveler}<br>
                <h2>Email:</h2> ${paquetes.emailTraveler}<br>
                <h2>Fecha de Llegada:</h2> ${paquetes.startDate}<br>
                <h2>Fecha de Salida:</h2> ${paquetes.endDate}<br>
                <h2>Nombre de Tarjeta:</h2> ${paquetes.cardNickName}<br>
                <h2>Número de Tarjeta:</h2> ${maskCardNumber(paquetes.cardNum)}<br>
                <h2>CVV:</h2> ${maskCVV(paquetes.cardCVV)}<br>
                <h2>Fecha de Vencimiento:</h2> ${paquetes.cardEndDate}<br>`;


            showInfo.appendChild(paquetesElement);
        }
    } else {
        alert("No hay Paquetes almacenados. No se ha hecho ninguna reserva");
        closePopUpMyPackages();
    }
}

/*Función para eliminar una carta determinada*/
function deletepaquetes(index){
    const confirmationMyPackages = confirm("¿Está seguro que desea borrar los datos de esta compra?");

    if (confirmationMyPackages){
        let user_logged = sessionStorage.getItem("logged");
        let storedData = JSON.parse(localStorage.getItem(user_logged));
        const santaPackages = storedData.travelPackages;

        for (let i=0; i<santaPackages.length; i++){
            if (i === index){
                santaPackages.splice(index, 1);
            }
        }

        localStorage.setItem(user_logged, JSON.stringify(storedData));
        window.alert("Modificación Exitosa");
    }
    
    openMyPackages();   
}


/*Funciones auxiliares para enmascarar los datos de la tarjeta*/
function maskCardNumber(cardNum) {
    const visibleDigits = 4;
    const maskedSection = cardNum.slice(visibleDigits).replace(/./g, '•'); // Usar puntos como máscara
    return cardNum.slice(0, visibleDigits) + maskedSection;
}

function maskCVV(cvv) {
    return '***';
}