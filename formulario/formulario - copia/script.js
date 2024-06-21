document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    let errors = [];

    
    if (!emailField.value) {
        errors.push('El campo de correo es obligatorio.');
    } else if (!validateEmail(emailField.value)) {
        errors.push('El correo no es válido.');
    }

   
    if (!passwordField.value) {
        errors.push('El campo de contraseña es obligatorio.');
    } else if (passwordField.value.length < 9) {
        errors.push('La contraseña debe tener al menos 9 caracteres.');
    }

    if (errors.length > 0) {
        event.preventDefault();
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = errors.join('<br>');
    } else {
        errorMessage.style.display = 'none';
        
    }
});

function validateEmail(email) {
    
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}