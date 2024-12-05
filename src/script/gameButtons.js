function juego1(){
    document.getElementById('Imagen1').style.display = 'block';
    document.getElementById('marcadoresglobales').style.display = 'block';
    closeGame('Imagen2');
    closeGame('Imagen3');

    resetGame1();
    actualizarMarcadores("Haz clic en el círculo");
    clickTheCircle();
    resetGame2();
    }

    function juego2() {
    document.getElementById('Imagen2').style.display = 'block';
    document.getElementById('marcadoresglobales').style.display = 'block';
    closeGame('Imagen1');
    closeGame('Imagen3');
    resetGame1();
    actualizarMarcadores("Simón dice");
    simondice();
    juegoActivo = true; // Activar estado del juego 2
}

    let game3Radio = document.getElementById('juego3');
    game3Radio.addEventListener('click', function () {
        document.getElementById('Imagen3').style.display = 'block';
        closeGame('Imagen1');
        closeGame('Imagen2');
    });


    function closeGame(game) {
        document.getElementById(game).style.display = 'none';
    }

    let imagen = document.getElementById('circulo');
    let timeInterval;
    let circleInterval;
    let maxTime = 10;

    function clickTheCircle() {

        maxTime = 5;
        timeInterval = setInterval(function () {
            let minutes = Math.floor(maxTime / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            let seconds = (maxTime % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            if (maxTime <= 0) {
                clearInterval(timeInterval);
                clearInterval(circleInterval);
                guardarPuntuacion(score); // Guarda la puntuación al terminar el juego
                actualizarMarcadores("Haz clic en el círculo");
            }

            document.getElementById('gameTimer').innerHTML = minutes + ':' + seconds;
            maxTime--;
        }, 1000);


        let scoreTable = document.getElementById('gameScore');
        let score = 0;
        scoreTable.innerHTML = "score: " + score;

        circleInterval = setInterval(function moveCircle() {
            imagen.style.display = 'block';
            imagen.style.visibility = 'hidden';
            let container = document.getElementById('Imagen1');
            let containerWidth = container.clientWidth;
            let containerHeight = container.clientHeight;

            let circulo = document.getElementById('circulo');
            let circulowidth = circulo.clientWidth;
            let circuloheight = circulo.clientHeight;

            let gameScore = document.getElementById('gameScore');
            let gameScoreHeight = gameScore.clientHeight;

            let gameTimer = document.getElementById('gameTimer');
            let gameTimereHeight = gameTimer.clientHeight;

            let maxLeft = containerWidth - circulowidth;
            let maxBottom = containerHeight - circuloheight - gameScoreHeight - gameTimereHeight;

            let mLeft = getRandom(maxLeft) + "px";
            let mBot = getRandom(maxBottom) + "px";

            imagen.style.left = mLeft;
            imagen.style.bottom = mBot;
            imagen.style.visibility = 'visible';

        }, 1000);

        imagen.addEventListener('click', function () {
            document.getElementById('circulo').style.visibility = 'hidden';
            score++;
            scoreTable.innerHTML = "score: " + score;
        });
    }

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    function resetGame1() {
        clearInterval(timeInterval);
        clearInterval(circleInterval);
        imagen.style.visibility = 'hidden';
    }




let colores = ['r', 'v', 'a', 'am'];
let juego = [];
let usuario = [];
let nivel = 0;

function simondice() {
    juego = [];
    usuario = [];
    nivel = 0;
    secuencia();
}
function secuencia() {
    usuario = [];
    let scoreTable2 = document.getElementById('gameScore2');
    let scoreTable22 = document.getElementById('gameScore22');
    scoreTable2.innerHTML = "score: " + nivel;
    scoreTable22.innerHTML = "Rojo: 1, Verde: 2, Azul: 3, Amarillo: 4";
    nivel++;
    juego.push(colores[Math.floor(Math.random() * 4)]);

    document.querySelectorAll('.simondicecolores').forEach(color => {
        color.style.visibility = 'hidden';
    });

    juego.forEach((color, tamano) => {
        setTimeout(() => {
            document.getElementById(color).style.visibility = 'visible';
            setTimeout(() => {
                document.getElementById(color).style.visibility = 'hidden';
                if (tamano === juego.length - 1) {
                    document.querySelectorAll('.simondicecolores').forEach(color => {
                        color.style.visibility = 'visible';
                    });
                }
            }, 1200);
        }, tamano * 1300);
    });
}

// Mapeo de teclas a colores
const teclaAColor = {
    '1': 'r',
    '2': 'v',
    '3': 'a',
    '4': 'am'
};
// Escucha eventos de teclado para seleccionar colores
document.addEventListener('keydown', function (event) {
    if (!juegoActivo) return; // Solo procesar teclas si el juego 2 está activo

    const color = teclaAColor[event.key];
    if (color) {
        usuario.push(color);
        if (juego[usuario.length - 1] === usuario[usuario.length - 1]) {
            if (usuario.length === juego.length) {
                secuencia();
            }
        } else {
            guardarPuntuacion(nivel - 1); // Guarda la puntuación
            actualizarMarcadores("Simón dice");
            alert('Cadena errónea');
        }
    }
});

function resetGame2() {
    juego = [];
    usuario = [];
    nivel = 0;
    juegoActivo = false; // Desactivar estado del juego 2

    document.querySelectorAll('.simondicecolores').forEach(color => {
        color.style.visibility = 'hidden';
    });
}


function guardarPuntuacion(puntuacion) {
    let logInData = `${parameterUser},${parameterPassword}`;
    const usuario = localStorage.getItem(logInData); // Verifica si hay sesión iniciada
    if (usuario) {
        const puntuaciones = JSON.parse(localStorage.getItem('puntuaciones')) || []; // Obtiene puntuaciones previas o un array vacío
        const usuarioNombre = JSON.parse(usuario).username;

        // Busca si ya existe una puntuación para el usuario y el juego actual
        const indiceExistente = puntuaciones.findIndex(registro =>
            registro.nombre === usuarioNombre &&
            registro.juego === (juegoActivo ? "Simón dice" : "Haz clic en el círculo")
        );

        if (indiceExistente !== -1) {
            // Si existe un registro previo, reemplázalo si la nueva puntuación es mayor
            if (puntuacion > puntuaciones[indiceExistente].puntuacion) {
                puntuaciones[indiceExistente].puntuacion = puntuacion;
                console.log(`Puntuación actualizada: ${JSON.stringify(puntuaciones[indiceExistente])}`);
            } else {
                console.log('La puntuación no se actualizó porque es menor o igual a la existente.');
            }
        } else {
            // Si no existe un registro previo, lo agrega
            const nuevoRegistro = {
                nombre: usuarioNombre,
                juego: juegoActivo ? "Simón dice" : "Haz clic en el círculo",
                puntuacion: puntuacion
            };
            puntuaciones.push(nuevoRegistro);
            console.log(`Nueva puntuación guardada: ${JSON.stringify(nuevoRegistro)}`);
        }

        // Guarda las puntuaciones actualizadas en localStorage
        localStorage.setItem('puntuaciones', JSON.stringify(puntuaciones));
    } else {
        alert('Inicia sesión para guardar tu puntuación.');
    }
}


function actualizarMarcadores(juegoActual) {
    const puntuaciones = JSON.parse(localStorage.getItem('puntuaciones')) || [];

    // Filtra las puntuaciones por juego
    const puntuacionesJuego = puntuaciones
        .filter(registro => registro.juego === juegoActual)
        .sort((a, b) => b.puntuacion - a.puntuacion) // Ordena de mayor a menor puntuación
        .slice(0, 5); // Toma las 5 mejores puntuaciones

    // Actualiza los marcadores en el HTML
    for (let i = 0; i < 3; i++) {
        const nombreElemento = document.getElementById(`nombre${i + 1}`);
        const puntajeElemento = document.getElementById(`puntaje${i + 1}`);

        if (puntuacionesJuego[i]) {
            const { nombre, puntuacion } = puntuacionesJuego[i];
            nombreElemento.textContent = `${nombre}  ....  ${puntuacion}`;
            puntajeElemento.textContent = ""; // Limpia el elemento de puntuación separado
        } else {
            // Si no hay puntuación para esta posición, usa el valor por defecto
            nombreElemento.textContent = "Nombre  ....  ?";
            puntajeElemento.textContent = ""; // Limpia el elemento de puntuación separado
        }
    }
}


