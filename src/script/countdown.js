let christmas = new Date("December 24, 2024 23:59:59").getTime();
let interval;


function contador() {
    let currentTime = new Date().getTime();

    if (currentTime > christmas){
        
        let currentYear = new Date().getFullYear();
        let christmasYear = new Date("December 24, 2024 23:59:59").getFullYear();

        let newChristmasYear = currentYear - christmasYear;

        christmas = christmas = new Date(`December 24, ${christmasYear + newChristmasYear} 23:59:59`).getTime();
    }

    let timeDiference = christmas - currentTime;

    /*Conversion del resultado a los valores de dias, horas, minutos y segundos*/
    let countdown = {
        days: Math.floor(timeDiference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDiference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiference % (1000 * 60)) / 1000),
    };

    /*Impresion de los valores por pantalla*/
    document.getElementById("dias").innerHTML = countdown.days;
    document.getElementById("horas").innerHTML = countdown.hours;
    document.getElementById("minutos").innerHTML = countdown.minutes;
    document.getElementById("segundos").innerHTML = countdown.seconds;
}

/*Actualizacion del contador cada segundo*/
function funcionamientoContador(){
    contador();
    interval = setInterval(contador, 1000);
}

window.onload = funcionamientoContador();