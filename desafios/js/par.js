document.getElementById("contar").addEventListener("click", contar);

function contar() {
  const inicio = Number(document.getElementById("inicio").value);
  const fim = Number(document.getElementById("fim").value);
  const res = document.getElementById("resposta");

  if (isNaN(inicio) || isNaN(fim)) {
    alert("Preencha os valores!");
    document.getElementById("inicio").focus();
    return;
  }

  if (inicio % 2 !== 0) {
    alert("O sistema só aceita números pares.");
    document.getElementById("inicio").focus();
    return;
  }

  let resultado = "";
  let contadorPares = 0;

  for (let i = inicio; i <= fim; i += 2) {
    resultado += `${i} → `;
    contadorPares++;
  }

  resultado += `🏁<br>Total de pares encontrados: <strong style="color:#ff4081">${contadorPares}</strong>`; 
  res.innerHTML = resultado;

}
