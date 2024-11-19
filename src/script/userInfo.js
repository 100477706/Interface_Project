/**********************************/
/*Java Script para la informacion del usuario*/
/**********************************/

let userNamePassword;
let userData;

/*Función para mostrar la información del usuario*/
function userInformation(data){
    userData = JSON.parse(data);

    document.getElementById("MyUsername").textContent = userData.username;
    document.getElementById("MyPassword").textContent = '•'.repeat(userData.password.length);
    document.getElementById("MyCity").textContent = userData.city;
    document.getElementById("MyEmail").textContent = userData.email;
    document.getElementById("MyCountry").textContent = userData.country;
    document.getElementById("MyGender").textContent = userData.gender;
    document.getElementById("MyNumChildren").textContent = userData.numChildren;
    showChildren(userData.numChildren);

    userNamePassword = `${userData.username},${userData.password}`
}

/*Función para mostrar la información de cada hijo*/
function showChildren(num){
    const showInfo = document.getElementById("infoHijos");
    const numHijos = num;
    showInfo.innerHTML = '';

    if (numHijos > 0){
        for (let i=0; i<numHijos; i++){
            let childrenArray = userData.children[i];
            let nombre = childrenArray.nombre;
            let edad = childrenArray.edad;
            let juguetes = childrenArray.juguetes;

            const hijosContent = document.createElement("div");
            hijosContent.classList.add("MyProfileChildrenBox");
            hijosContent.innerHTML = `<strong>Hijo/a ${i+1}:</strong>
                                        <i class="material-icons" data-index="${i}" onclick="openPopUpChangeChildren(${i})">edit</i><br>
                                        <h2>Nombre:</h2> ${nombre}<br>
                                        <h2>Edad:</h2> ${edad}<br>
                                        <h2>Juguetes:</h2> ${juguetes}<br>`;

            showInfo.append(hijosContent);
        }
    }
}

/*Función para ejecutar el cambio de nombre del usuario*/
function changeUsername(){
    let newUser = document.getElementById("chusername").value;
    let confirmWithPassword = document.getElementById("chUserpassword").value;

    /*Verificamos que el nombre de usuario no exista en la base de datos*/
    for (let i=0; i<localStorage.length; i++){
        let clave = localStorage.key(i);
        let [usernameStore, passwordStore] = clave.split(',');

        if (usernameStore === newUser){
            window.alert("Este nombre de usuario ya está registrado. Por favor, escoja otro");
            return;
        }
    }

    if (userData.password === confirmWithPassword){
        if (userData.username !== newUser){

            let oldDataKey = `${userData.username},${userData.password}`;
            localStorage.removeItem(oldDataKey);
            
            userData.username = newUser;
            /*Cambiamos su valor en la letiable global para que cuando se cierre la pestaña, se siga viendo el cambio*/
            parameterUser = newUser;
            /*********************************************************************************************************/
            let newDataKey = `${newUser},${userData.password}`;
            localStorage.setItem(newDataKey, JSON.stringify(userData));
            window.alert("Modificación Exitosa");
            closePopUpChangeUser();
            userInformation(JSON.stringify(userData));

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

    if (oldPassword === userData.password){
        if (newPassword !== userData.password){
            if (newPassword === confirmPassword){

                let oldDataKey = `${userData.username},${userData.password}`;
                localStorage.removeItem(oldDataKey);

                userData.password = newPassword;
                /*Cambiamos su valor en la letiable global para que cuando se cierre la pestaña, se siga viendo el cambio*/
                parameterPassword = newPassword;
                /*********************************************************************************************************/
                let newDataKey = `${userData.username},${newPassword}`;
                localStorage.setItem(newDataKey, JSON.stringify(userData));
                window.alert("Modificación Exitosa");
                closePopUpChangePassword();
                userInformation(JSON.stringify(userData));
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

    if (newCity !== userData.city){
        if (confirmWithPassword === userData.password){
            let oldDataKey = `${userData.username},${userData.password}`;
            localStorage.removeItem(oldDataKey);
                
            userData.city = newCity;

            let newDataKey = `${userData.username},${userData.password}`;
            localStorage.setItem(newDataKey, JSON.stringify(userData));
            window.alert("Modificación Exitosa");
            closePopUpChangeCity();
            userInformation(JSON.stringify(userData));
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

    if (newEmail !== userData.email){
        if (confirmWithPassword === userData.password){
            let oldDataKey = `${userData.username},${userData.password}`;
            localStorage.removeItem(oldDataKey);
                
            userData.email = newEmail;

            let newDataKey = `${userData.username},${userData.password}`;
            localStorage.setItem(newDataKey, JSON.stringify(userData));
            window.alert("Modificación Exitosa");
            closePopUpChangeEmail();
            userInformation(JSON.stringify(userData));
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

    if (newCountry !== userData.country){
        if (confirmWithPassword === userData.password){
            let oldDataKey = `${userData.username},${userData.password}`;
            localStorage.removeItem(oldDataKey);
                
            userData.country = newCountry;

            let newDataKey = `${userData.username},${userData.password}`;
            localStorage.setItem(newDataKey, JSON.stringify(userData));
            window.alert("Modificación Exitosa");
            closePopUpChangeCountry();
            userInformation(JSON.stringify(userData));
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

    if (newGender !== userData.gender){
        if (confirmWithPassword === userData.password){
            let oldDataKey = `${userData.username},${userData.password}`;
            localStorage.removeItem(oldDataKey);
                
            userData.gender = newGender;

            let newDataKey = `${userData.username},${userData.password}`;
            localStorage.setItem(newDataKey, JSON.stringify(userData));
            window.alert("Modificación Exitosa");
            closePopUpChangeGender();
            userInformation(JSON.stringify(userData));
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

function changeChildren(){
    const form = document.getElementById("ChangeChildrenForm");
    const index = form.getAttribute("data-index");

    const newName = document.getElementById("nameChildren").value;
    const newAge = document.getElementById("ageChildren").value;
    const newToys = document.getElementById("toysChildren").value;

    let oldDataKey = `${userData.username},${userData.password}`;
    localStorage.removeItem(oldDataKey);

    userData.children[index].nombre = newName;
    userData.children[index].edad = parseInt(newAge);
    userData.children[index].juguetes = newToys;

    let newDataKey = `${userData.username},${userData.password}`;
    localStorage.setItem(newDataKey, JSON.stringify(userData));
    
    window.alert("Modificación Exitosa");
    closePopUpChangeChildren();
    userInformation(JSON.stringify(userData));
}