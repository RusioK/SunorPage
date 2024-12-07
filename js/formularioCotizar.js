document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendButton");
    const cotizacionForm = document.getElementById("cotizacionForm");
    const cotizacionModal = document.getElementById("cotizacionModal");
    const productNameInput = document.getElementById("product_name");
    const exampleModal = document.getElementById("exampleModal");

    // Validar el formulario
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

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
        sendButton.addEventListener("click", (event) => {
            event.preventDefault(); // Evitar recargar la página

            if (!validateForm()) return;

            sendButton.textContent = "Enviando...";
            sendButton.disabled = true;

            const data = {
                fromName: document.getElementById("from_name")?.value.trim(),
                messageId: document.getElementById("message_id")?.value.trim(),
                productName: document.getElementById("product_name")?.value.trim(),
                message: document.getElementById("message")?.value.trim(),
            };

            console.log("Datos enviados al servidor:", data); // Debugging: Verificar datos

            // Enviar datos al backend usando fetch
            fetch("http://localhost:3000/api/cotizar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json().then(() => {
                            Swal.fire({
                                icon: "success",
                                title: "¡Enviado!",
                                text: "La solicitud de cotización se creó con éxito.",
                            }).then(() => {
                                // Cerrar el modal después de la confirmación
                                const bootstrapModal = bootstrap.Modal.getInstance(cotizacionModal);
                                if (bootstrapModal) bootstrapModal.hide();
                            });

                            cotizacionForm.reset(); // Limpia el formulario
                            productNameInput.value = ""; // Limpia el campo de nombre de producto
                        });
                    } else {
                        return response.json().then((err) => {
                            console.error("Error devuelto por el servidor:", err); // Debugging
                            Swal.fire({
                                icon: "error",
                                title: "Error",
                                text: `Error al enviar: ${err.message || "Error inesperado"}`,
                            });
                        });
                    }
                })
                .catch((err) => {
                    console.error("Error al enviar la cotización:", err); // Debugging
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Ocurrió un error inesperado. Por favor, inténtalo nuevamente.",
                    });
                })
                .finally(() => {
                    sendButton.textContent = "Enviar Mensaje";
                    sendButton.disabled = false;
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
