// Aprendizado sobre arrays
numerosPrimos = [2, 3, 5, 7, 11]
arrayDiversos = [1.1, , true, "a"]
console.log(typeof(numerosPrimos))
console.log(numerosPrimos)
console.log(arrayDiversos)

// Exemplos de como alterar elementos em posições específicas

fibonacci = [1, 2, 3, 5, 8, 13]

console.log(fibonacci)
console.log(fibonacci[0])

fibonacci[0] = 9
console.log(fibonacci)

fibonacci[0] = 1
fibonacci[6] = 21

console.log(fibonacci)

a = new Array(2)

console.log(a)
a[3] = 4
console.log(a)

// Utilizando push() e unshift()
tamanho = 0
fibonacci = [1, 2, 3, 5, 8, 13]

tamanho = fibonacci.unshift(0)

console.log(tamanho)
console.log(fibonacci)

tamanho = fibonacci.push(21)

console.log(tamanho)
console.log(fibonacci)
