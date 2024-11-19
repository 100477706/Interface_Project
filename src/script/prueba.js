
/**********************************/
/*Java Script de Prueba para el Drag and Drop*/
/**********************************/

let draggedElementIndex; // Variable global para el índice de la carta arrastrada

function showCardsPrueba(data) {
    const showInfo = document.getElementById("infoCards");
    const cardsBank = data.letters;
    showInfo.innerHTML = '';

    if (cardsBank.length > 0) {
        for (let i = 0; i < cardsBank.length; i++) {
            const card = cardsBank[i];

            const cardElement = document.createElement("div");
            cardElement.classList.add("MyProfileCardsBox");
            cardElement.setAttribute("draggable", "true");
            cardElement.dataset.index = i; // Guardar el índice de la carta actual

            // Añadir los eventos de arrastrar y soltar
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

function dragStart(event) {
    draggedElementIndex = event.target.dataset.index; // Guardar el índice de la carta arrastrada
    event.dataTransfer.effectAllowed = "move";
}

function dragOver(event) {
    event.preventDefault(); // Necesario para permitir el drop
    event.dataTransfer.dropEffect = "move";
}

function drop(event) {
    event.preventDefault();
    const droppedElementIndex = event.target.closest(".MyProfileCardsBox").dataset.index;

    // Recuperar storedData de localStorage
    const userCardsData = JSON.parse(validateData);
    const dataKey = `${userCardsData.username},${userCardsData.password}`;
    const storedData = JSON.parse(localStorage.getItem(dataKey)) || {};
    const cardsBank = storedData.letters;

    if (draggedElementIndex !== undefined && droppedElementIndex !== undefined) {
        // Convertir índices a enteros
        const fromIndex = parseInt(draggedElementIndex, 10);
        const toIndex = parseInt(droppedElementIndex, 10);

        // Intercambiar las cartas en el array
        const temp = cardsBank[fromIndex];
        cardsBank[fromIndex] = cardsBank[toIndex];
        cardsBank[toIndex] = temp;

        // Guardar el nuevo orden en localStorage
        localStorage.setItem(dataKey, JSON.stringify(storedData));

        // Actualizar la visualización y los índices de las cartas
        showCardsPrueba(storedData);
    }
}