const email = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');

const password = document.getElementById('password');
const errorPassword = document.getElementById('errorPassword');

const repeatPassword = document.getElementById('repeatPassword');
const errorRepeatPassword = document.getElementById ('errorRepeatPassword');

const loginBtn = document.getElementById('loginBtn');

const validacionDatos = document.getElementById('validacionDatos');

// Validaciones individuales
email.addEventListener('blur', () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email.value)) {
            errorEmail.textContent = 'Email inválido.';
}
});
password.addEventListener('blur', () => {
if (password.value.length < 8) {
errorPassword.textContent = 'La contraseña debe tener al menos 8 caracteres.';
}
});

//Validacion de contraseña
repeatPassword.addEventListener('blur', () => {
    if (repeatPassword.value !== password.value) {
        errorRepeatPassword.textContent = 'La contraseñas no son iguales.' ;
     }});

// Limpiar errores al enfocar
email.addEventListener('focus', () => errorEmail.textContent = '');
password.addEventListener('focus', () => errorPassword.textContent ='');
repeatPassword.addEventListener('focus', () => errorRepeatPassword.textContent ='');


// Validacion de todos los datos

loginBtn.addEventListener('click', () => {
 


if (!email.value) {
    errorEmail.textContent = "Debe escribir un mail";
    
}

if (!password.value) {
    errorPassword.textContent = "Debe escribir una contraseña";
    
}

if (!repeatPassword.value) {
    errorRepeatPassword.textContent = "Debe repetir la contraseña anterior";
    
}
    
if (!errorEmail.textContent && !errorPassword.textContent  && !errorRepeatPassword.text) {
    alert("Todos los datos son correctos");
} 
})

