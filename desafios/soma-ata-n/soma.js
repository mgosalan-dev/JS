

function contar(){
  var n = document.getElementById('Numero').value
  var r = document.getElementById('res')

  if(n === ""){
    alert("Digite um valor para fazer a soma:")
    document.getElementById('Numero').focus()
    return;
  } else{
    // Convertendo para número
    n = Number(n);
    let contador = 1
    let soma = 0

    while(contador <= n){
      soma += contador ;
      contador++;
    }
    r.innerHTML = `A soma dos numeros de 1 até ${n} é igual a ${soma}`
  }
  

}

document.getElementById('btncontar').addEventListener('click', contar)