// Gerar número aleatório entre 1 e 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let contadorTentativas = 0;
let jogoAtivo = true;

// Adicionar evento de tecla para o input
document.getElementById("numero").addEventListener("keypress", function(event) {
    if (event.key === "Enter" && jogoAtivo) {
        verificarPalpite();
    }
});

// Função principal que verifica o palpite do usuário
function verificarPalpite() {
    if (!jogoAtivo) {
        reiniciarJogo();
        return;
    }

    const palpite = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    // Verificar se é um número válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultado.innerHTML = "Por favor, digite um número válido entre 1 e 100!";
        resultado.className = "mensagem-dica";
        return;
    }

    // Incrementar contador de tentativas
    contadorTentativas++;
    document.getElementById("tentativas").innerText = `Tentativas: ${contadorTentativas}`;

    // Lógica do jogo usando while (simulado neste caso com if/else)
    if (palpite === numeroAleatorio) {
        resultado.innerHTML = `ACERTOU MIZERÁVI! 🎉 ${palpite} é o número correto!`;
        resultado.className = "mensagem-acerto";
        document.querySelector("button").innerText = "Jogar Novamente";
        jogoAtivo = false;
    } else if (palpite < numeroAleatorio) {
        resultado.innerHTML = `Tente um número MAIOR que ${palpite}! ⬆️`;
        resultado.className = "mensagem-dica";
    } else {
        resultado.innerHTML = `Tente um número MENOR que ${palpite}! ⬇️`;
        resultado.className = "mensagem-dica";
    }

    // Limpar o campo e focar nele novamente
    document.getElementById("numero").value = "";
    document.getElementById("numero").focus();
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    contadorTentativas = 0;
    document.getElementById("tentativas").innerText = "Tentativas: 0";
    document.getElementById("resultado").innerText = "";
    document.querySelector("button").innerText = "Verificar";
    jogoAtivo = true;
    document.getElementById("numero").focus();
}

// Focar no input quando a página carrega
window.onload = function() {
    document.getElementById("numero").focus();
};