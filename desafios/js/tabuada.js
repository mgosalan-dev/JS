function X10(){
  var n = document.getElementById('numero').value
  var tab = document.getElementById('seltab')
  const LIMITE = 10;
  
  if (n === ""){
    alert("Digite um valor para ver a tabuada dele.")
    document.getElementById('numero').focus()
    return;

  } else{
    const num = Number(n)
    tab.innerHTML = '';

    for(let c = 1; c <= LIMITE; c++){
      let item = document.createElement('option') // Guardando o elemento criado em uma variável
      item.text = `${num} x ${c} = ${num*c}`
      item.value = `tab${c}`
      tab.appendChild(item);
    }
  }
}

document.getElementById('btnMultiplicar').addEventListener('click', X10)
