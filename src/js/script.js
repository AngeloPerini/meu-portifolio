function submitForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var cpf = document.getElementById("cpf").value;
    var birthDate = document.getElementById("birthday").value;
    var state = document.getElementById("state").value;

    if (!/^\d{11}$/.test(cpf)) {
        alert("Por favor, insira um CPF válido com exatamente 11 números.");
        return;
    }

    // Exibição dos dados (pode ser substituído pela lógica de envio para o servidor)
    alert("Nome: " + name + "\nEmail: " + email + "\nIdade: " + age + "\nCPF: " + cpf + "\nData de Nascimento: " + birthDate + "\nEstado: " + state);
    alert('Reserva ralizada com sucesso!!!')
}