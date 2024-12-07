/**********************************/
/*Java Script para la informacion del usuario*/
/**********************************/

let userNamePassword;
let userData;

/*Función para mostrar la información del usuario*/
function userInformation(){
    let userLogged = sessionStorage.getItem("logged");
    userData = JSON.parse(localStorage.getItem(userLogged));

    document.getElementById("MyUsername").textContent = userData.username;
    document.getElementById("MyPassword").textContent = '•'.repeat(userData.password.length);
    document.getElementById("MyCity").textContent = userData.city;
    document.getElementById("MyEmail").textContent = userData.email;
    document.getElementById("MyCountry").textContent = userData.country;
    document.getElementById("MyGender").textContent = userData.gender;

    userNamePassword = `${userData.username},${userData.password}`
}


/*Función para ejecutar el cambio de nombre del usuario*/
function changeUsername(){
    let newUser = document.getElementById("chusername").value;
    let confirmWithPassword = document.getElementById("chUserpassword").value;

    /*Verificamos que el nombre de usuario no exista en la base de datos*/

    let usuario = JSON.parse(localStorage.getItem(newUser));
    if (usuario !== null){
        window.alert("Este nombre de usuario ya está registrado. Por favor, escoja otro");
        return;
    }
    let user_logged = sessionStorage.getItem("logged");
    let user = JSON.parse(localStorage.getItem(user_logged));
    if (user.password === confirmWithPassword){
        if (user.username !== newUser){
            let puntuaciones = JSON.parse(localStorage.getItem("puntuaciones"));
            for (let i = 0; i < puntuaciones.length; i++){
                console.log(puntuaciones[i].nombre);
                if (puntuaciones[i].nombre === user_logged){
                    puntuaciones[i].nombre = newUser;
                }
            }
            localStorage.setItem("puntuaciones", JSON.stringify(puntuaciones));
            localStorage.removeItem(user_logged);
            let nuevoUser = user
            nuevoUser.username = newUser;
            /*Cambiamos su valor en la letiable global para que cuando se cierre la pestaña, se siga viendo el cambio*/
            parameterUser = newUser;
            /*********************************************************************************************************/
            localStorage.setItem(newUser, JSON.stringify(nuevoUser));
            sessionStorage.setItem("logged", newUser)
            window.alert("Modificación Exitosa");
            closePopUpChangeUser();
            userInformation();

        }
        else{
            window.alert("Este es tu nombre de usuario anterior");
            return;
        } 
    }
    else{
        window.alert("Contraseña Incorrecta. Inténtelo de nuevo");
        return;
    }
}

/*Función para ejecutar el cambio de contraseña del usuario*/
function changePassword(){
    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmchPassword").value;
    let user_logged = sessionStorage.getItem("logged");
    let user = JSON.parse(localStorage.getItem(user_logged));
    if (oldPassword === user.password){
        if (newPassword !== user.password){
            if (newPassword === confirmPassword){

                user.password = newPassword;
                parameterPassword = newPassword;
                localStorage.setItem(user.username, JSON.stringify(user));
                window.alert("Modificación Exitosa");
                closePopUpChangePassword();
                userInformation();
            }
            else{
                window.alert("Las Contraseñas No Coinciden. Inténtelo de nuevo");
                return;
            }
        }
        else{
            window.alert("La Contraseña Nueva no puede ser igual a la anterior. Pruebe con otra Contraseña");
            return;
        }
    }
    else{
        window.alert("Contraseña Anterior Incorrecta. Inténtelo de nuevo");
        return;
    }
}

function changeCity(){
    let newCity = document.getElementById("chcity").value;
    let confirmWithPassword = document.getElementById("chCityPassword").value;
    let user_logged = sessionStorage.getItem("logged");
    let user = JSON.parse(localStorage.getItem(user_logged));
    if (newCity !== user.city){
        if (confirmWithPassword === user.password){
            user.city = newCity;
            localStorage.setItem(user.username, JSON.stringify(user));
            window.alert("Modificación Exitosa");
            closePopUpChangeCity();
            userInformation();
        }
        else{
            window.alert("Contraseña Incorrecta. Inténtelo de nuevo");
            return;
        }
    }
    else{
        window.alert("Esta es tu ciudad definida anteriormente");
        return;
    }

}

function changeEmail(){
    let newEmail = document.getElementById("chemail").value;
    let confirmWithPassword = document.getElementById("chEmailPassword").value;
    let user_logged = sessionStorage.getItem("logged");
    let user = JSON.parse(localStorage.getItem(user_logged));
    if (newEmail !== user.email){
        if (confirmWithPassword === user.password){
            user.email = newEmail;
            localStorage.setItem(user.username, JSON.stringify(user));
            window.alert("Modificación Exitosa");
            closePopUpChangeEmail();
            userInformation();
        }
        else{
            window.alert("Contraseña Incorrecta. Inténtelo de nuevo");
            return;
        }  
    }
    else{
        window.alert("Este es tu correo definido anteriormente");
        return;
    }
}

function changeCountry(){
    let newCountry = document.getElementById("chcountry").value;
    let confirmWithPassword = document.getElementById("chCountryPassword").value;
    let user_logged = sessionStorage.getItem("logged");
    let user = JSON.parse(localStorage.getItem(user_logged));
    if (newCountry !== user.country){
        if (confirmWithPassword === user.password){
            user.country = newCountry;
            localStorage.setItem(user.username, JSON.stringify(user));
            window.alert("Modificación Exitosa");
            closePopUpChangeCountry();
            userInformation();
        }
        else{
            window.alert("Contraseña Incorrecta. Inténtelo de nuevo");
            return;
        } 
    }
    else{
        window.alert("Este es tu país definido anteriormente");
        return;
    }   
}

function changeGender(){
    let newGender = document.getElementById("chgender").value;
    let confirmWithPassword = document.getElementById("chGenderPassword").value;
    let user_logged = sessionStorage.getItem("logged");
    let user = JSON.parse(localStorage.getItem(user_logged));
    if (newGender !== user.gender){
        if (confirmWithPassword === user.password){
            user.gender = newGender;
            localStorage.setItem(user.username, JSON.stringify(user));
            window.alert("Modificación Exitosa");
            closePopUpChangeGender();
            userInformation();
        }
        else{
            window.alert("Contraseña Incorrecta. Inténtelo de nuevo");
            return;
        }
    }
    else{
        window.alert("Este es tu género definido anteriormente");
        return;
    }
}
