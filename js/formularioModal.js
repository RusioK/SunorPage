document.addEventListener("DOMContentLoaded", function () {
    emailjs.init('ECOp68bJKsmYRN75I');

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
        sendButton.addEventListener('click', () => {
            if (!validateForm()) return;
    
            sendButton.textContent = 'Enviando...';
    
            const templateParams = {
                to_name: "Admin", // Recipient name
                from_email: document.getElementById('message_id').value,
                from_name: document.getElementById('from_name').value,
                product_name: document.getElementById('product_name').value,
                message: document.getElementById('message').value,
                reply_to: document.getElementById('message_id').value
            };
    
            emailjs.send('default_service', 'template_11b4txw', templateParams)
                .then(() => {
                    alert('¡La solicitud de cotización se creó con éxito!');
                    cotizacionForm.reset();
                    productNameInput.value = '';
                    sendButton.textContent = 'Enviar Mensaje';
                })
                .catch((err) => {
                    console.error('Error al enviar:', err);
                    alert('Error al enviar el correo. Por favor, intenta nuevamente.');
                    sendButton.textContent = 'Enviar Mensaje';
                });
        });
    }
    
    
});
