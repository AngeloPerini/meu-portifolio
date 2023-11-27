function isValidState(state) {
    var validStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];


    state = state.toUpperCase();

    return validStates.includes(state);
}

function isAdult(age) {
    var minimumAge = 18;

    return parseInt(age) >= minimumAge;
}

function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();


    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('age').value = age;
}

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var state = document.getElementById('state').value.toUpperCase(); 
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
    var destination = document.getElementById('destination').value;


    if (!isAdult(age)) {
        alert('Desculpe, apenas maiores de 18 anos podem fazer uma reserva.');
        return;
    }


    if (!isValidState(state)) {
        alert('Por favor, insira um estado válido.');
        return;
    }

    var reservationDetails = `
        Nome: ${name}
        E-mail: ${email}
        CPF: ${cpf}
        Estado: ${state}
        Telefone: ${phone}
        Idade: ${age}
        Destino: ${destination}
    `;

    alert('Detalhes da Reserva:\n\n' + reservationDetails);
    alert('Reserva realizada com Sucesso!!!')
    window.location.href = 'index.html';
}

