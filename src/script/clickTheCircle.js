let Score= 0;
let TimeLeft = 90//1:30 minutos 
let GameInterval;
let CircleInterval;

const StartButton = document.getElementById('Game1Start');
const ScoreDisplay = document.getElementById('Game1Score');
const timerDisplay = document.getElementById('Game1Timer');
const circle = document.getElementById('Game1Circle');   
const gameSpace = document.getElementById('FuncionalGame1');


// Mueve el círculo a una posición aleatoria
function moveCircle() {
    let rect = gameSpace.getBoundingClientRect();
    let maxX = rect.width - circle.clientWidth;
    let maxY = rect.height - circle.clientHeight;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    circle.style.top = `${randomY}px`;
    circle.style.left = `${randomX}px`;
}


circle.addEventListener('click', () => {
    Score++;
    ScoreDisplay.textContent = `Puntaje: ${Score}`;
    moveCircle(); 
});

// Actualiza el temporizador
function updateTimer() {
    TimeLeft--;

    //Conversion del resultado a los valores de dias, horas, minutos y segundos
    let seconds;
    let minutes= Math.floor(TimeLeft / 60);
    if (minutes >= 1){
        seconds= TimeLeft - 60;
    }
    else{
        seconds= TimeLeft;
    }
    //Impresion de los valores por pantalla

    document.getElementById("minutosGame1").innerHTML = minutes;
    document.getElementById("segundosGame1").innerHTML = seconds;


    if (TimeLeft <= 0) {
        finishGame1();
    }
}

 // Inicia el juego
 function startGame1() {
    StartButton.style.display = "none";
    circle.style.display = "block"; 
    moveCircle();
    // Actualiza el tiempo y la posición del círculo cada segundo
    GameInterval = setInterval(updateTimer, 1000); 
    CircleInterval = setInterval(moveCircle, 1000); 
}

//termina el juego
function finishGame1(){
    //Liberamos los intervalos
    clearInterval(GameInterval);
    clearInterval(CircleInterval);
    //Avisamos al usuario de su score
    alert(`¡Tiempo terminado! Puntaje final: ${Score}`);
    //mostramos nuevamente el botón de start y ocultamos el circulo
    StartButton.style.display = "block";
    circle.style.display = "none";
    //reiniciamos el timer y el score
    Score = 0;
    TimeLeft = 90;
    document.getElementById("minutosGame1").innerHTML = 1;
    document.getElementById("segundosGame1").innerHTML = 30;
    ScoreDisplay.textContent = `Puntaje: ${Score}`;
}