const email = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');
email.addEventListener('blur', () => {
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;




if (!emailRegex.test(email.value)) {
errorEmail.textContent = 'Por favor, ingresa un email válido.';
}
});
email.addEventListener('focus', () => {
errorEmail.textContent = ''; // Limpia el error
});

