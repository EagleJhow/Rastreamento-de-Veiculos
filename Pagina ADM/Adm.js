 // Espera o documento estar pronto antes de executar o código
 document.addEventListener("DOMContentLoaded", function() {
    // Referência ao formulário e tabela
    var form = document.getElementById("formVeiculo");
    var tableBody = document.getElementById("tableBody");

    // Função para adicionar uma linha na tabela com base nos dados do formulário
    function adicionarVeiculo(event) {
        event.preventDefault();

        // Captura os valores inseridos pelo usuário
        var id = document.getElementById("inputId").value;
        var nome = document.getElementById("inputNome").value;
        var data = document.getElementById("inputData").value;
        var placa = document.getElementById("inputPlaca").value;
        var horarioSaida = document.getElementById("inputHorarioSaida").value;
        var kmRodado = document.getElementById("inputHorarioSaida").value;

        // Cria a nova linha na tabela
        var newRow = tableBody.insertRow();

        var cellId = newRow.insertCell(0);
        var cellNome = newRow.insertCell(1);
        var cellData = newRow.insertCell(2);
        var cellPlaca = newRow.insertCell(3);
        var cellHorarioSaida = newRow.insertCell(4);
        var cellKmRodado = newRow.insertCell(5);

        cellId.innerHTML = id;
        cellNome.innerHTML = nome;
        cellData.innerHTML = data;
        cellPlaca.innerHTML = placa;
        cellHorarioSaida.innerHTML = horarioSaida;
        cellKmRodado.innerHTML = kmRodado;

        // Limpa os campos do formulário
        form.reset();
    }

    // Adiciona um ouvinte de evento de envio para o formulário
    form.addEventListener("submit", adicionarVeiculo);
});