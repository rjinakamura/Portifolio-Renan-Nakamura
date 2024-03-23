// js para mensagens de sucesso e erro no link do contato
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        if (nameValue === "" || emailValue === "" || messageValue === "") {
            displayFormStatus("Por favor, preencha todos os campos.", "error");
            return;
        }

        // Envio da mensagem
        setTimeout(function() {
            form.reset(); // Limpa o campo
            displayFormStatus("Obrigado! Sua mensagem foi enviada com sucesso.", "success");
        }, 1000);
    });

    // Função para exibir mensagens de status do contato
    function displayFormStatus(message, status) {
        formStatus.textContent = message;
        formStatus.style.display = "block";
        formStatus.className = status;
      
        // Ocultando a mensagem de contato
        setTimeout(function() {
            formStatus.style.display = "none";
        }, 5000);
    }
});
