function atualizarSaudacao() {
    const selectElement = document.getElementById('language-select');
    const welcomeMessageElement = document.getElementById('welcome-message');

    const selectedLanguage = selectElement.value;

    let saudacao = '';
    switch (selectedLanguage) {
        case 'en':
            saudacao = 'Welcome!';
            break;
        case 'es':
            saudacao = '¡Bienvenido!';
            break;
        case 'fr':
            saudacao = 'Bienvenue!';
            break;
        case 'pt-BR':
            saudacao = 'Bem-vindo!';
            break;
        default:
            saudacao = 'Saudação de boas-vindas será exibida aqui.';
    }

   
    welcomeMessageElement.textContent = saudacao;
}


const selectElement = document.getElementById('language-select');
selectElement.addEventListener('change', atualizarSaudacao);


const idiomaPreferido = navigator.language;
selectElement.value = idiomaPreferido;
atualizarSaudacao();