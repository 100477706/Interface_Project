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

    for (let i=0; i<localStorage.length; i++){
        let clave = localStorage.key(i);
        let [usernameStore, passwordStore] = clave.split(',');

        if (usernameStore === parameterUser){
            if(passwordStore !== parameterPassword){
                window.alert("Contraseña Incorrecta. Inténtelo de nuevo");
                return;
            }
        }
    }
    
    let logInData = `${parameterUser},${parameterPassword}`;
    validateData = localStorage.getItem(logInData);


    if (validateData){
        validateLogIn = true;
        document.getElementById("LogInBotton").style.display = "none";
        document.getElementById("RegisterBotton").style.display = "none";
        document.getElementById("MyMenu").style.display = "block";
        window.alert("Inicio de Sesión Exitoso");
        closePopUpLogIn();
    }
    else{
        window.alert("El par de usuario y contraseña, no se encuentran en los registros");
    }

}

/*Función para desplegar el menú de búsqueda*/
function openDropDown() {
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
        console.log("Se ha cerrado sesión");
    }

    else{
        console.log("Se ha mantenido la sesión");
    }
}

/*Función para abrir la información del usuario*/
function openMyMenu() {
    openPopUpMyProfile();
    let importantData = `${parameterUser},${parameterPassword}`;
    validateData = localStorage.getItem(importantData);
    userInformation(validateData);
}