const inicio = document.getElementById("inicio");
const fim = document.getElementById("fim");
const btnContar = document.getElementById("btnContar");
const resposta = document.getElementById("resposta");
const erroInicio = document.getElementById("erro-inicio");
const erroFim = document.getElementById("erro-fim");

// Adicionando evento de clique ao botão
btnContar.addEventListener("click", contarImpares);

function contarImpares() {
  // Resetando mensagens de erro
  erroInicio.textContent = "";
  erroFim.textContent = "";

  // Pegando os valores de início e fim
  const valorInicio = Number(inicio.value);
  const valorFim = Number(fim.value);

  // Validando entradas
  if (inicio.value.trim() === "") {
    erroInicio.textContent = "Por favor, informe um valor inicial";
    return;
  }

  if (fim.value.trim() === "") {
    erroFim.textContent = "Por favor, informe um valor final";
    return;
  }

  if (valorFim < valorInicio) {
    erroFim.textContent = "O valor final deve ser maior que o inicial";
    return;
  }

  // Limpando o resultado anterior
  resposta.innerHTML = "";

  // Verificando se existem números ímpares no intervalo
  let encontrouImpares = false;

  // Percorrendo o intervalo e mostrando os ímpares
  for (let i = valorInicio; i <= valorFim; i++) {
    if (i % 2 !== 0) {
      // Verificando se é ímpar
      const numeroSpan = document.createElement("span");
      numeroSpan.classList.add("numero");
      numeroSpan.textContent = i;
      resposta.appendChild(numeroSpan);
      encontrouImpares = true;
    }
  }

  // Caso não tenha encontrado nenhum ímpar
  if (!encontrouImpares) {
    resposta.textContent = "Não há números ímpares neste intervalo!";
  }
}
