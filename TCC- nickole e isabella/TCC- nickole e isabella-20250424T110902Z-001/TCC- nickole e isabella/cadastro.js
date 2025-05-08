// Alterna entre os formulários de login e cadastro
function showLogin() {
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

function showRegister() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.add('active');
}

// Função de login simulada
function login(event) {
    event.preventDefault();
    alert("Login realizado com sucesso!");
    window.location.href = "index.html"; // Redireciona para a página inicial
}

// Função de cadastro simulada
function signup(event) {
    event.preventDefault();
    alert("Cadastro realizado com sucesso! Por favor, faça login.");
    showLogin(); // Alterna para o formulário de login
}
