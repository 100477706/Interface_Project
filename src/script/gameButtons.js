const Game1 = document.getElementById("FuncionalGame1")
const Game2 = document.getElementById("GameImage2")
const Game3 = document.getElementById("GameImage3")
const Button1 = document.getElementById("Game1Button")
const Button2 = document.getElementById("Game2Button")
const Button3 = document.getElementById("Game3Button")


function ButtonGame1(){
    //Cambiamos el juego/imagen
    Game1.style.display= "block";
    Game2.style.display= "none";
    Game3.style.display= "none";
    //Cambiamos los colores de los botones
    Button1.style.backgroundColor= "white";
    Button1.style.color = "black";
    Button2.style.backgroundColor= "red";
    Button2.style.color = "white";
    Button3.style.backgroundColor= "red";
    Button3.style.color = "white";
}

function ButtonGame2(){
    Game2.style.display= "block";
    Game1.style.display= "none";
    Game3.style.display= "none";
    //Cambiamos los colores de los botones
    Button2.style.backgroundColor= "white";
    Button2.style.color = "black";
    Button1.style.backgroundColor= "red";
    Button1.style.color = "white";
    Button3.style.backgroundColor= "red";
    Button3.style.color = "white";
}

function ButtonGame3(){
    Game3.style.display= "block";
    Game1.style.display= "none";
    Game2.style.display= "none";
    //Cambiamos los colores de los botones
    Button3.style.backgroundColor= "white";
    Button3.style.color = "black";
    Button1.style.backgroundColor= "red";
    Button1.style.color = "white";
    Button2.style.backgroundColor= "red";
    Button2.style.color = "white";
}


function juego1(){
        document.getElementById('Imagen1').style.display = 'block';
        closeGame('Imagen2');
        closeGame('Imagen3');

        resetGame1();
        clickTheCircle();
        resetGame2();

    }

function juego2(){
        document.getElementById('Imagen2').style.display = 'block';
        closeGame('Imagen1');
        closeGame('Imagen3');
        resetGame1();
        simondice();
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

        maxTime = 90;
        timeInterval = setInterval(function () {
            let minutes = Math.floor(maxTime / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            let seconds = (maxTime % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            if (maxTime <= 0) {
                clearInterval(timeInterval);
                clearInterval(circleInterval);
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
        scoreTable2.innerHTML = "score: " + nivel;
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

    document.querySelectorAll('.simondicecolores').forEach(colores => {
        colores.addEventListener('click', function () {
            usuario.push(colores.id);
            if (juego[usuario.length - 1] === usuario[usuario.length - 1]) {
                if (usuario.length === juego.length) { secuencia(); } }
            else { alert('Cadena errónea'); }
        });
    });


    function resetGame2() {
        juego = [];
        usuario = [];
        nivel = 0;

        document.querySelectorAll('.simondicecolores').forEach(color => {
            color.style.visibility = 'hidden';
        });
    }
