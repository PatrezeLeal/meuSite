document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const mensagemCadastro = document.getElementById('mensagem-cadastro');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        
       

        // Validação dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;        

        if (nome.trim() === '' || email.trim() === '' || telefone.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Cria um objeto com os valores dos campos do formulário
        const cadastro = {
            nome: nome,
            email: email,
            telefone: telefone
        };

        // Exibe o objeto no console
        console.log(cadastro);

        // Oculta o formulário e exibe a mensagem de cadastro
        form.style.display = 'none';
        mensagemCadastro.style.display = 'block';
    });
    
});
