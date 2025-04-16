let num = [5, 8, 9, 6]
console.log (`o vetor tem ${num.length} posicoes`)
console.log('')

// alteração de vetor ou adção de valor
console.log(`para adicionar um valor ao vetor é usado o pusho poque vai direto para o final.`)
console.log('')
num.push(7)
num.push(4)
num.push(3)

console.log(`Agora tem ${num.length} posicoes`)

// colocando os vetores em ordem crescent
num.sort()
console.log(`os vetor em ordem crescente: ${num}`)