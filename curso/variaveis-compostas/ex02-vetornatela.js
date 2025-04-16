let valores = [8,9,4,3,4]

console.log(valores[0]) // mostra o vetor e sua posicicao lembrando que na programação sempre vem o 0 -> 1 -> 2 -> etc...
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/
// mostrando a a estrutra interia 

for (let pos= 0; pos < valores.length; pos++){
  console.log(`A poscição ${pos} tem o valor ${valores[pos]}`) // assim ele mostra as posciçoes e o valor dela 
}
console.log('')
console.log('usando a estrutura for in que é mais limpa e direta:')
console.log('')

// estrutura ainda mais simplificada usando o for in

for(let pos in valores){
  console.log(`A poscição ${pos} tem o valor ${valores[pos]}`)
}
