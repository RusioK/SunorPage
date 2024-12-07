document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('button');
    const alertBox = document.getElementById('alert');
    const form = document.getElementById('form');

    // Validar correo electrónico
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Validar número de teléfono en formato chileno
    function validatePhone(phone) {
        const phonePattern = /^\+56\d{9}$/;
        return phonePattern.test(phone);
    }

    // Mostrar alertas
    function showAlert(message, type) {
        alertBox.style.display = 'block';
        alertBox.textContent = message;
        alertBox.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
        alertBox.style.color = 'white';
        alertBox.style.padding = '15px';
        alertBox.style.borderRadius = '5px';
        alertBox.style.marginBottom = '20px';
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

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

        // Validaciones
        if (!name || !email || !empresa || !ciudad || !telefono || !message) {
            showAlert('Por favor, complete todos los campos.', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showAlert('Por favor, ingrese un correo electrónico válido.', 'error');
            return;
        }

        if (!validatePhone(telefono)) {
            showAlert('Por favor, ingrese un número de teléfono válido con el formato +569XXXXXXXX.', 'error');
            return;
        }

        if (empresa.length < 3) {
            showAlert('El nombre de la empresa debe tener al menos 3 caracteres.', 'error');
            return;
        }

        if (ciudad.length < 3) {
            showAlert('El nombre de la ciudad debe tener al menos 3 caracteres.', 'error');
            return;
        }

        // Configuración para enviar al backend
        const data = {
            name: name,
            email: email,
            empresa: empresa,
            ciudad: ciudad,
            telefono: telefono,
            message: message
        };

        // Enviar datos al backend
        btn.textContent = 'Enviando...';
        btn.disabled = true;

        fetch("http://localhost:3000/api/contact", { // Cambia localhost por tu dominio en producción
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    showAlert('¡Mensaje enviado con éxito!', 'success');
                    form.reset();
                } else {
                    response.json().then((err) => {
                        showAlert(`Error al enviar el mensaje: ${err.message}`, 'error');
                    });
                }
            })
            .catch((err) => {
                console.error('Error al enviar el mensaje:', err);
                showAlert('Ocurrió un error inesperado. Por favor, inténtalo nuevamente.', 'error');
            });
        
    });
});
