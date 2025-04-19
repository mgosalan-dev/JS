 let numeros = []; // aqui guardamos tudo o que o usuario digitar
document.getElementById('somar').addEventListener('click', somar)

function somar(){
  let input = document.getElementById('numero')
  const resultado = document.getElementById('resultado')
  const continuar = document.getElementById('continuar')
  const valor = Number(input.value)

  if(isNaN(valor) || input.value.trim() === ""){
    alert('Digite um valor para testarmos')
    document.getElementById('numero').focus()
    return;
  }
  numeros.push(valor)
  input.value=""
  input.focus()

  let soma = 0
  let i = 0
  continuar.innerHTML=""
  resultado.innerHTML=""
  while(i < numeros.length && numeros[i] !== 0){
    soma += numeros[i]
    i++
    continuar.innerHTML =`Você digitou ${numeros}, digite 0 para parar`
    

    resultado.innerHTML +=`${i} + `
  } if(numeros === 0){
    continuar.innerHTML=""
    resultado.innerHTML= `A soma final é de ${soma}`
  }
    
}
