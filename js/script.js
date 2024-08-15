document.getElementById('pedidoForm').addEventListener('submit', function(event) { //pega id pedidoForm e adiciona uma "lista de evento" ao formulario, com o action 'submit'
    event.preventDefault(); // evita o envio do formulário sem estar preenchido

    // Verifica se todos os campos são válidos
    if (this.checkValidity()) {
        // obtem os valores do formulário
        let item = document.getElementById('item').value;
        let quantidade = document.getElementById('quantidade').value;

        // exibe a mensagem de confirmação
        let confirmacao = confirm("Você deseja pedir " + quantidade +" "+ item +"(s)?");
        if (confirmacao) {
            // emite uma mensagem de sucesso
            alert('Pedido realizado com sucesso!');

        }else{
            alert('Pedido Cancelado!');
        }
    } else {
        // Se algum campo estiver inválido, mostra a mensagem de erro
        this.reportValidity();
    }
});









