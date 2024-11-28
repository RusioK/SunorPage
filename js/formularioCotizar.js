document.addEventListener("DOMContentLoaded", function () {
    try {
        emailjs.init("ECOp68bJKsmYRN75I"); // Reemplaza con tu User ID
        console.log("EmailJS inicializado correctamente.");
    } catch (error) {
        console.error("Error al inicializar EmailJS:", error);
    }

    const sendButton = document.getElementById("sendButton");
    const cotizacionForm = document.getElementById("cotizacionForm");
    const cotizacionModal = document.getElementById("cotizacionModal");
    const productNameInput = document.getElementById("product_name"); // Campo del formulario que mostrará el nombre del producto
    const exampleModal = document.getElementById("exampleModal");

    // Validar el formulario
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    // Validar el formulario
    function validateForm() {
        const fromName = document.getElementById("from_name")?.value.trim();
        const messageId = document.getElementById("message_id")?.value.trim();
        const message = document.getElementById("message")?.value.trim();

        if (!fromName) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, ingresa tu nombre.",
            });
            return false;
        }
        if (!validateEmail(messageId)) {
            Swal.fire({
                icon: "error",
                title: "Correo inválido",
                text: "Por favor, ingresa un correo electrónico válido.",
            });
            return false;
        }
        if (!message) {
            Swal.fire({
                icon: "error",
                title: "Mensaje vacío",
                text: "Por favor, ingresa un mensaje.",
            });
            return false;
        }
        return true;
    }

    // Evento de envío del formulario
    if (sendButton) {
        sendButton.addEventListener("click", () => {
            if (!validateForm()) return;

            sendButton.textContent = "Enviando...";

            emailjs
                .sendForm("default_service", "template_11b4txw", cotizacionForm)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "¡Enviado!",
                        text: "La solicitud de cotización se creó con éxito.",
                    }).then(() => {
                        // Cerrar el modal después de la confirmación
                        const bootstrapModal = bootstrap.Modal.getInstance(cotizacionModal);
                        if (bootstrapModal) bootstrapModal.hide();
                    });

                    cotizacionForm.reset();
                    productNameInput.value = ""; // Limpia el campo de nombre de producto
                    sendButton.textContent = "Enviar Mensaje";
                })
                .catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Error al enviar: " + JSON.stringify(err),
                    });
                    sendButton.textContent = "Enviar Mensaje";
                });
        });
    }

    // Transferir el nombre del producto al modal de cotización
    if (cotizacionModal) {
        cotizacionModal.addEventListener("show.bs.modal", function (event) {
            const button = event.relatedTarget; // Botón que activó el modal
            if (button) {
                const productName = button.getAttribute("data-bs-whatever");
                if (productNameInput) productNameInput.value = productName; // Establece el valor del campo en el formulario
            }
        });

        // Limpiar el formulario al cerrar el modal
        cotizacionModal.addEventListener("hidden.bs.modal", function () {
            if (productNameInput) productNameInput.value = ""; // Limpia el campo del producto
            cotizacionForm.reset(); // Limpia todo el formulario
        });
    }

    // Vincular datos del modal de detalle al botón "Cotizar"
    if (exampleModal) {
        const cotizarButton = document.getElementById("cotizarButton");
        if (cotizarButton) {
            cotizarButton.addEventListener("click", function () {
                const productNameElement = document.getElementById("productName");
                const productName = productNameElement ? productNameElement.textContent : "";
                if (cotizacionModal && productNameInput) {
                    productNameInput.value = productName; // Pasa el nombre al modal de cotización
                }
            });
        }
    }
});
