/**********************************/
/*Java Script del Formulario de Registro*/
/**********************************/

/*Función que verifica que las Contraseñas Coincidan*/

function checkPassword() {
    let confirmedPassword = document.getElementById("confirmPassword").value;
    let password = document.getElementById("password").value;

    if (password !== confirmedPassword){
        window.alert("Las Contraseñas no coinciden");
        return false;
    }
    return true;
}

window.onload = checkPassword()

/*Función que al limpiar los campos, el usuario confirme la operación*/
function clearForm() {
    const formulario = document.getElementById("RegisterForm");
    const confirmationClear = confirm("¿Está seguro que desea borrar los datos de todos los campos?");

    if (confirmationClear){
        formulario.reset();
        console.log("Se han borrado los datos");
    }
    else{
        console.log("Se mantienen los datos");
    }
}

/*Función que al cancelar, el usuario confirme la operación*/
function closeForm() {
    const confirmationClose = confirm("¿Está seguro que desea cerrar el formulario de Registro?");
    
    if (confirmationClose){
        closePopUpRegister();
        console.log("Se ha cerrado el formulario de registro");
    }
    else{
        console.log("No se ha cerrado el formulario");
    }
}

/*Función que registra la información del usuario en el storage*/
function almacenarDatos() {
    let user = document.forms["RegisterForm"]["username"].value;
    let password = document.forms["RegisterForm"]["password"].value;
    let city = document.forms["RegisterForm"]["ciudad"].value;
    let email = document.forms["RegisterForm"]["correo"].value;
    let country = document.forms["RegisterForm"]["pais"].value;
    let gender = document.forms["RegisterForm"]["gender"].value;


    /*Verificamos que el nombre de usuario no exista en la base de datos*/
    for (let i=0; i<localStorage.length; i++){
        let usernameStore = localStorage.key(i);

        if (usernameStore === user){
            window.alert("Este nombre de usuario ya está registrado. Por favor, escoja otro");
            return;
        }
    }

    /*Guardamos la información de los usuarios en un JSON */
    let registerData = {
        username: user,
        password: password,
        city: city,
        email: email,
        country: country,
        gender: gender,
        letters: []
    }

    localStorage.setItem(user, JSON.stringify(registerData));
    
    window.alert("La información se ha guardado correctamente");
    closePopUpRegister();
}