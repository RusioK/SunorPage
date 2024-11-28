// Inicializar EmailJS con tu User ID
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init('ECOp68bJKsmYRN75I');

    const sendButton = document.getElementById('sendButton');
    const clearButton = document.getElementById('clearButton');
    const cotizacionForm = document.getElementById('cotizacionForm');
    const exampleModal = document.getElementById('exampleModal');
    const productNameInput = document.getElementById('product_name');
    const categoryFilter = document.getElementById('categoryFilter');
    const productContainer = document.getElementById('productContainer');

    // Validar el formulario
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

    // Evento de envío
    if (sendButton) {
        sendButton.addEventListener('click', () => {
            if (!validateForm()) return;

            sendButton.textContent = 'Enviando...';

            emailjs.sendForm('default_service', 'template_11b4txw', cotizacionForm)
                .then(() => {
                    alert('¡La solicitud de cotización se creó con éxito!');
                    cotizacionForm.reset();
                    productNameInput.value = '';
                    sendButton.textContent = 'Enviar Mensaje';
                }, (err) => {
                    alert('Error al enviar: ' + JSON.stringify(err));
                    sendButton.textContent = 'Enviar Mensaje';
                });
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        const exampleModal = document.getElementById('exampleModal');
        
        if (exampleModal) {
            exampleModal.addEventListener('show.bs.modal', function(event) {
                const button = event.relatedTarget;
                const productName = button.getAttribute('data-bs-whatever');
                const productDescription = button.getAttribute('data-bs-description');
                
                const modalTitle = exampleModal.querySelector('.modal-title');
                const productNameElement = exampleModal.querySelector('#productName');
                const productDescriptionElement = exampleModal.querySelector('#productDescription');
                
                modalTitle.textContent = 'Detalles del Producto';
                productNameElement.textContent = productName;
                productDescriptionElement.textContent = productDescription;
            });
        }
    });
    
    
    
});





