document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById('sendButton');
    const cotizacionForm = document.getElementById('cotizacionForm');
    const productNameInput = document.getElementById('product_name');

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateForm() {
        const fromName = document.getElementById('from_name').value.trim();
        const messageId = document.getElementById('message_id').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!fromName) {
            alert('Por favor, ingresa tu nombre.');
            return false;
        }
        if (!validateEmail(messageId)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return false;
        }
        if (!message) {
            alert('Por favor, ingresa un mensaje.');
            return false;
        }
        return true;
    }

    if (sendButton) {
        sendButton.addEventListener('click', (event) => {
            event.preventDefault();

            if (!validateForm()) return;

            sendButton.textContent = 'Enviando...';
            sendButton.disabled = true;

            const data = {
                fromName: document.getElementById('from_name').value.trim(),
                messageId: document.getElementById('message_id').value.trim(),
                productName: document.getElementById('product_name').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            // Enviar datos al backend usando fetch
            fetch("http://localhost:3000/api/cotizar", { // Cambia localhost por tu dominio si está en producción
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
                .then((response) => {
                    if (response.ok) {
                        alert('¡La solicitud de cotización se creó con éxito!');
                        cotizacionForm.reset(); // Limpia el formulario
                        productNameInput.value = ''; // Limpia el campo de producto
                    } else {
                        return response.json().then((err) => {
                            alert(`Error al enviar la cotización: ${err.error}`);
                        });
                    }
                })
                .catch((err) => {
                    console.error('Error al enviar la cotización:', err);
                    alert('Ocurrió un error inesperado. Por favor, inténtalo nuevamente.');
                })
                .finally(() => {
                    sendButton.textContent = 'Enviar Mensaje';
                    sendButton.disabled = false;
                });
        });
    }
});
