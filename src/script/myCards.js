/**********************************/
/*Java Script del Menu de Cartas*/
/**********************************/

let draggedElementIndex;

/*Función para abrir el menú con todas las cartas*/
function openMyCards(){
    openPopUpMyCards();
    let user_logged = sessionStorage.getItem("logged");
    let storedData = JSON.parse(localStorage.getItem(user_logged));

    showCards(storedData);
    
}

/*Función para mostrar toda la información de las cartas*/
function showCards(data) {
    const showInfo = document.getElementById("infoCards");
    const cardsBank = data.letters;
    showInfo.innerHTML = '';

    if (cardsBank.length > 0) {
        for (let i = 0; i < cardsBank.length; i++) {
            const card = cardsBank[i];

            const cardElement = document.createElement("div");
            cardElement.classList.add("MyProfileCardsBox");
            cardElement.setAttribute("draggable", "true");
            cardElement.dataset.index = i; 

            cardElement.addEventListener("dragstart", dragStart);
            cardElement.addEventListener("dragover", dragOver);
            cardElement.addEventListener("drop", drop);

            cardElement.innerHTML = `
                <strong>Carta ${i + 1}:</strong>
                <i class="material-icons" data-index="${i}" onclick="deleteCard(${i})">delete</i><br>
                <h2>Nombre:</h2> ${card.nameMail}<br>
                <h2>Email:</h2> ${card.emailMail}<br>
                <h2>Ciudad:</h2> ${card.cityMail}<br>
                <h2>País:</h2> ${card.countryMail}<br>
                <h2>Mensaje:</h2> <div class="mensaje">${card.messageMail}</div><br>`;

            showInfo.appendChild(cardElement);
        }
    } else {
        alert("No hay cartas almacenadas. No se ha enviado ninguna carta");
        closePopUpMyCards();
    }
}

/*Función para eliminar una carta determinada*/
function deleteCard(index){
    const confirmationMyCards = confirm("¿Está seguro que desea borrar los datos de esta carta?");

    if (confirmationMyCards){
        let user_logged = sessionStorage.getItem("logged");
        let storedData = JSON.parse(localStorage.getItem(user_logged));
        const santaCards = storedData.letters;

        for (let i=0; i<santaCards.length; i++){
            if (i === index){
                santaCards.splice(index, 1);
            }
        }

        localStorage.setItem(user_logged, JSON.stringify(storedData));
        window.alert("Modificación Exitosa");
    }
    
    openMyCards();   
}

/*Función para hacer el movimiento de las cartas*/
function dragStart(event) {
    draggedElementIndex = event.target.dataset.index; 
    event.dataTransfer.effectAllowed = "move";
}

function dragOver(event) {
    event.preventDefault(); 
    event.dataTransfer.dropEffect = "move";
}

function drop(event) {
    event.preventDefault();
    const droppedElementIndex = event.target.closest(".MyProfileCardsBox").dataset.index;

    let user_logged = sessionStorage.getItem("logged");
    let storedData = JSON.parse(localStorage.getItem(user_logged));
    const cardsBank = storedData.letters;

    if (draggedElementIndex !== undefined && droppedElementIndex !== undefined) {

        const fromIndex = parseInt(draggedElementIndex, 10);
        const toIndex = parseInt(droppedElementIndex, 10);

        const temp = cardsBank[fromIndex];
        cardsBank[fromIndex] = cardsBank[toIndex];
        cardsBank[toIndex] = temp;

        localStorage.setItem(user_logged, JSON.stringify(storedData));

        showCards(storedData);
    }
}