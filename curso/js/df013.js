/**
 * Gera uma tabuada e exibe no elemento select
 */
function tabuada() {
  const num = document.getElementById('txtn');
  const tab = document.getElementById('seltab');
  const LIMITE = 10;
  
  if (num.value.length === 0) {
    alert('Por favor, digite um número antes de gerar a tabuada.');
    num.focus(); // Coloca o foco de volta no input
    return; // Early return pattern é mais limpo que else gigante
  }
  
  const n = Number(num.value);
  tab.innerHTML = ''; // Limpa resultados anteriores
  
  for (let c = 1; c <= LIMITE; c++) {
    const item = document.createElement('option');
    item.text = `${n} x ${c} = ${n*c}`;
    item.value = `tab${c}`; // Bom ter um value nos options
    tab.appendChild(item);
  }
}