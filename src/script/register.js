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

/*Función(es) que crea un pequeño formulario para cada hijo*/
function regalosHijos(){
    let parameterHijo = document.getElementById("hijos");
    parameterHijo.addEventListener("input", crearForm);
    
}
    
function crearForm(){  
    const hijosCount = parseInt(this.value);
    const infoHijos = document.getElementById("nombreEdadJuguetes");
    infoHijos.innerHTML = "";

    if (hijosCount > 0){
        for(let i=1; i<=hijosCount; i++){
            const hijosDiv = document.createElement("div");
            hijosDiv.classList.add("cajaHijos");

            /*Creamos el campo para el nombre de los hijos*/
            const nombreHijo = document.createElement("label");
            nombreHijo.textContent = `Nombre del hijo/a ${i}:`;
            const escrituraNombre = document.createElement("input");
            escrituraNombre.type = "text";
            escrituraNombre.className = "inputRform";
            escrituraNombre.name = `nombre${i}`;
            escrituraNombre.placeholder = "Nombre del hijo/a";
            escrituraNombre.minLength = 3;
            escrituraNombre.required = true;
            
            /*Creamos el campo para la edad de los hijos*/
            const edadHijo = document.createElement("label");
            edadHijo.textContent = `Edad del hijo/a ${i}:`;
            const escrituraEdad = document.createElement("input");
            escrituraEdad.type = "number";
            escrituraEdad.className = "inputRform";
            escrituraEdad.name = `edad${i}`;
            escrituraEdad.placeholder = "Edad del hijo/a";
            escrituraEdad.min = 0;
            escrituraEdad.required = true;

            /*Creamos el campo para los juguetes de los hijos*/
            const juguetesHijo = document.createElement("label");
            juguetesHijo.textContent = `Juguetes del hijo/a ${i}:`;
            const escrituraJuguetes = document.createElement("input");
            escrituraJuguetes.type = "text";
            escrituraJuguetes.className = "inputRform";
            escrituraJuguetes.name = `juguetes${i}`;
            escrituraJuguetes.placeholder = "Jueguetes del hijo/a";
            escrituraJuguetes.required = true;

            /*Añadimos al objeto de la división en el nuevo formulario*/
            hijosDiv.appendChild(nombreHijo);
            hijosDiv.appendChild(escrituraNombre);
            hijosDiv.appendChild(edadHijo);
            hijosDiv.appendChild(escrituraEdad);
            hijosDiv.appendChild(juguetesHijo);
            hijosDiv.appendChild(escrituraJuguetes);

            infoHijos.appendChild(hijosDiv)
        }
    }
}

window.onload = regalosHijos();


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

    let hijos = document.forms["RegisterForm"]["hijos"].value;
    if (!hijos){
        hijos = 0;
    }

    /*Parte para guardar la información del formulario dinámico de los hijos*/
    let hijosArray = [];

    if (hijos > 0){
        for (let i = 1; i <= hijos; i++) {
            let nombre = document.querySelector(`input[name="nombre${i}"]`).value;
            let edad = document.querySelector(`input[name="edad${i}"]`).value;
            let juguetes = document.querySelector(`input[name="juguetes${i}"]`).value;

            let hijosDatos = {
                nombre: nombre,
                edad: edad,
                juguetes: juguetes
            };
            
            hijosArray.push(hijosDatos);
        }
    
    }

    /*Verificamos que el nombre de usuario no exista en la base de datos*/
    for (let i=0; i<localStorage.length; i++){
        let clave = localStorage.key(i);
        let [usernameStore, passwordStore] = clave.split(',');

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
        numChildren: hijos,
        children: hijosArray
    }

    let access = `${user},${password}`;

    localStorage.setItem(access, JSON.stringify(registerData));
    
    window.alert("La información se ha guardado correctamente");
    closePopUpRegister();
}