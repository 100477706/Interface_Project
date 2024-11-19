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