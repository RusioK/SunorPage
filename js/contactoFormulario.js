const btn = document.getElementById('button');
const alertBox = document.getElementById('alert');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.init('ECOp68bJKsmYRN75I');

    // Ocultar alertas anteriores
    alertBox.style.display = 'none';
    alertBox.textContent = '';

    // Obtener valores de los campos
    const name = document.getElementById('to_names').value.trim();
    const email = document.getElementById('message_ide').value.trim();
    const empresa = document.getElementById('nameEmpresa').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const message = document.getElementById('messages').value.trim();

    // Validar campos vacíos
    if (!name || !email || !empresa || !ciudad || !telefono || !message) {
        showAlert('Por favor, complete todos los campos.', 'error');
        return;
    }

    // Validar correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showAlert('Por favor, ingrese un correo electrónico válido.', 'error');
        return;
    }

    // Validar teléfono (Chile: +56 seguido de 9 dígitos)
    const phonePattern = /^\+56\d{9}$/;
    if (!phonePattern.test(telefono)) {
        showAlert('Por favor, ingrese un número de teléfono válido con el formato +569XXXXXXXX.', 'error');
        return;
    }

    // Validación adicional (si necesitas alguna para empresa o ciudad)
    if (empresa.length < 3) {
        showAlert('El nombre de la empresa debe tener al menos 3 caracteres.', 'error');
        return;
    }

    if (ciudad.length < 3) {
        showAlert('El nombre de la ciudad debe tener al menos 3 caracteres.', 'error');
        return;
    }

    // Enviar el formulario
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const serviceID = 'default_service';
    const templateID = 'template_36en1ze';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.textContent = 'Enviar';
            btn.disabled = false;
            showAlert('¡Mensaje enviado con éxito!', 'success');
            this.reset();
        }, (err) => {
            btn.textContent = 'Enviar';
            btn.disabled = false;
            showAlert('Error al enviar el mensaje. Intente nuevamente.', 'error');
        });
});

function showAlert(message, type) {
    alertBox.style.display = 'block';
    alertBox.textContent = message;
    alertBox.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    alertBox.style.color = 'white';
    alertBox.style.padding = '15px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.marginBottom = '20px';
}
