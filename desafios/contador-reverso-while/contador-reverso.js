document.getElementById('contar').addEventListener('click', contar);

function contar() {
  let numero = parseInt(document.getElementById('numero').value);
  const resultado = document.getElementById('resultado');
  
  // Limpa o resultado anterior
  resultado.innerHTML = '';

  if(isNaN(numero)){

    alert('Digite um valor para a contagem ser valida')
    document.getElementById('numero').focus()
    return;

   } if (numero < 0) {
      alert('Digite um valor positivo')
      document.getElementById('numero').focus()
      return;
    }

    // criar um time para fazer a contagem regressiva

    const time = setInterval(() => {
      resultado.innerHTML= `<p>${numero}</p>`
      numero--

      if (numero < 0 ){
        clearInterval(time);
        resultado.innerHTML += `<p>Contagem finalizada</p>`
      }
    }, 1000);
  }