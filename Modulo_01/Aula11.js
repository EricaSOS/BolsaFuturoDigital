// função que soma dois números
function somar(a,b){
  return a + b
}
// resultado da soma de dois números
resultado = somar(5,7)
console.log("O resultado é: " + resultado)

// Arrow Function (Função abreviada)
somar = (a,b) => {
  return a + b
}

somar2 = (a,b) => a + b

dobro = x => x * 2

resultado = somar(5,7)
console.log("O resultado da soma é: " + resultado)
resultado = somar2(10,7)
console.log("O resultado da soma2 é: " + resultado)
resultado = dobro(6)
console.log("O resultado do dobro é: " + resultado)
