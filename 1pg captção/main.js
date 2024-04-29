const signupButton = document.getElementById("signup-button");
const form = document.getElementById("form1");

signupButton.addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão de envio
    
    // Validação dos campos
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (fullname.trim() === "" || email.trim() === "" || phone.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Envio do email
    const emailData = {
        fullname: fullname,
        email: email,
        phone: phone
    };

    // Enviar os dados por email
    sendEmail(emailData);

    // Redirecionamento após o envio do email
    window.location.href = "../3pg Home/home.html";
});

function sendEmail(data) {
    // Requisição HTTP para o servidor Node.js para enviar o email
    fetch('http://localhost:3000/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar email.');
        }
        console.log('Email enviado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar email:', error);
    });
}
