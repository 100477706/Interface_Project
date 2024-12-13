/**********************************/
/*Java Script del Formulario de Log In*/
/**********************************/

let validateData;
let parameterUser;
let parameterPassword;
let validateLogIn;

/*Función que verifica que el usuario esté registrado*/
function userRegister() {
    validateLogIn = false;
    parameterUser = document.getElementById("liusername").value;
    parameterPassword = document.getElementById("lipassword").value;
    let user = JSON.parse(localStorage.getItem(parameterUser));
    if (user === null) {
        window.alert("El par de usuario y contraseña, no se encuentran en los registros");
    }else {
        console.log(user.password, parameterPassword);
        if (user.password === parameterPassword) {
            validateLogIn = true;
            document.getElementById("LogInBotton").style.display = "none";
            document.getElementById("RegisterBotton").style.display = "none";
            document.getElementById("MyMenu").style.display = "block";
            sessionStorage.setItem("logged", parameterUser);
            window.alert("Inicio de Sesión Exitoso");

            userInformation();
            closePopUpLogIn();
        }else {
            console.log("Contraseña incorrecta")
        }
    }

}

/*Función para desplegar el menú de búsqueda*/
function openDropDown() {
    /*Cerramos los juegos para que no interfieran con las otras opciones de la web*/
    closeGame('Imagen2');
    closeGame('Imagen1')
    closeGame('Imagen3')
    juegoActivo = false;
    dropDownMenu = document.getElementById("DropDown");
    dropDownMenu.style.display = "block";
}

/*Función para quitar el menú de búsqueda*/
function closeDropDown(event) {
    const dropDownMenu = document.getElementById("DropDown");
    const myAccountButton = document.getElementById("MyAccount");
    
    if (!myAccountButton.contains(event.target) && !dropDownMenu.contains(event.target)) {
        dropDownMenu.style.display = "none";
    }
}

document.addEventListener("click", closeDropDown);

/*Función para Cerrar la Sesión*/
function closeSession(){
    const confirmationClose = confirm("¿Está seguro que desea Cerrar Sesión?");

    if (confirmationClose){
        validateLogIn = false;
        document.getElementById("MyMenu").style.display = "none";
        document.getElementById("LogInBotton").style.display = "flex";
        document.getElementById("RegisterBotton").style.display = "flex";
        sessionStorage.setItem("logged", "")
        console.log("Se ha cerrado sesión");
    }

    else{
        console.log("Se ha mantenido la sesión");
    }
}

/*Función para abrir la información del usuario*/
function openMyMenu() {
    openPopUpMyProfile();
    userInformation();
}
if (sessionStorage.getItem("logged") === null){
        sessionStorage.setItem("logged", "")
    }
if (sessionStorage.getItem('logged') !== ""){
    document.getElementById("MyMenu").style.display = "block";
}else{
    document.getElementById("LogInBotton").style.display = "flex";
    document.getElementById("RegisterBotton").style.display = "flex";
}