document.getElementById("scroll-button").addEventListener("click", function() {
    document.getElementById("featured-projects").scrollIntoView({ behavior: "smooth" });
});



<script>
    // Inicializar EmailJS con tu User ID
    emailjs.init("TU_USER_ID"); // Reemplaza TU_USER_ID con el ID que obtuviste de EmailJS

    // Manejar el evento de envío del formulario
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir recarga de la página

        // Obtener los valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Crear un objeto con los datos
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Enviar el correo usando EmailJS
        emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", templateParams)
            .then(function (response) {
                alert("¡Correo enviado con éxito!");
                // Limpiar formulario
                document.getElementById("contactForm").reset();
            })
            .catch(function (error) {
                alert("Hubo un error al enviar el correo. Intenta nuevamente.");
                console.error("Error:", error);
            });
    });
</script>
