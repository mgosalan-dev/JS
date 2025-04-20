let numeros = []; // Armazena todos os números digitados pelo usuário

document.getElementById("somar").addEventListener("click", somar);

function somar() {
  let input = document.getElementById("numero");
  const resultado = document.getElementById("resultado");
  const continuar = document.getElementById("continuar");
  const valor = Number(input.value);

  // Validação: impede valores inválidos ou campo vazio
  if (isNaN(valor) || input.value.trim() === "") {
    alert("Digite um valor para testarmos");
    input.focus();
    return;
  }

  numeros.push(valor);
  input.value = "";
  input.focus();

  if (valor === 0) {
    continuar.textContent = "Você digitou 0 o sistema parou";

    let soma = 0;
    let i = 0;

    // Soma todos os valores do array
    while (i < numeros.length) {
      soma += numeros[i];
      i++;
    }

    resultado.textContent = `A soma total é ${soma}`;
  } else {
    continuar.textContent = `Você digitou ${valor}, digite 0 para sair do programa`;

    let expressao = "";
    let n = 0;

    // Monta uma string com os números digitados no formato "1 + 2 + 3"
    while (n < numeros.length) {
      expressao += numeros[n];

      if (n < numeros.length - 1) {
        expressao += " + ";
      }
      n++;
    }

    resultado.textContent = expressao;
  }
}
