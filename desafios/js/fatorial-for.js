function calcularFatorial() {
  // Captura elementos HTML uma vez só (melhor performance)
  const inputNumero = document.getElementById("numero");
  const resultadoDiv = document.getElementById("res");
  
  // Pega o valor digitado e converte pra número
  let num = Number(inputNumero.value);
  
  // Validação com tratamento de negativos e não-números
  if (inputNumero.value === "" || isNaN(num) || num < 0) {
    alert("Digite um número positivo válido para calcular o fatorial!");
    inputNumero.focus();
    return;
  }
  
  // Casos especiais tratados separadamente (0! e 1! = 1)
  if (num === 0 || num === 1) {
    resultadoDiv.innerHTML = `O Fatorial de ${num} é igual a 1`;
    return;
  }
  
  // Calculando o fatorial
  let resultado = 1;
  
  // Loop otimizado sem else desnecessário 
  // (early return é prática ninja em entrevistas)
  for (let i = num; i >= 1; i--) {
    resultado *= i;
    
    // Proteção contra estouro de limite (fatorial cresce MUITO rápido)
    if (!isFinite(resultado)) {
      resultadoDiv.innerHTML = `O Fatorial de ${num} é muito grande para calcular!`;
      return;
    }
  }
  
  // Formata o resultado com separador de milhares (detalhe que impressiona)
  resultadoDiv.innerHTML = `O Fatorial de ${num} é igual a ${resultado.toLocaleString('pt-BR')}`;
}