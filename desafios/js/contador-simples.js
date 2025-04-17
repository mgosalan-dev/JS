function contar() {
  // definindo variaveis ligadas ao HTML
  var ini = document.getElementById("txti");
  var fi = document.getElementById("txtf");
  var pas = document.getElementById("txtp");
  var r = document.getElementById("res");

  if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
    alert("Opa, preenche todos os campos aí, meu consagrado! ⚠️");
    r.innerHTML = "Impossivel fazer a contagem";
    return; // para a função aqui
  }

  // CONVERSÃO PARA USO
  var inicio = Number(ini.value);
  var fim = Number(fi.value);
  var passo = Number(pas.value);

  // verificação do passo

  if (passo <= 0) {
    alert("Passo invalido! Considerando passo 1");
    passo = 1;
  }

  // verificando se inicio e fim são iguais
  if (inicio === fim){
  alert("O início e o fim não podem ser iguais! 😅");
  r.innerHTML = "Não faz sentido contar se o início e o fim são iguais.";
  return;
  }

  // Começando a contagem
  r.innerHTML = "Contando: <br>";
  let conteudo = "";
  // valor crescente
  if (inicio < fim) {
    let valor = inicio;
    while (valor <= fim) {
      conteudo += `${valor} 👉`;
      valor += passo
    }
  } else {
    // valor decrescente
    if (inicio > fim) {
      let valor = inicio;
      while (valor >= fim) {
        conteudo += `${valor} `;
        valor -= passo;
      }
    }
    
  }
  conteudo += "🏁";
  r.innerHTML += conteudo;
}
