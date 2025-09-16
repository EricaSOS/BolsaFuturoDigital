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

// Variável Global
var globalVar = "Eu sou global" // Variável com escopo Global

function minhaFuncao(){
  console.log(globalVar) // acessível aqui
}

minhaFuncao()
console.log(globalVar) // acessível aqui também

// Variável Local
function outraFuncao(){
  var localVar = "Eu sou local" //escopo de função
  console.log(localVar) // acessível aqui
}

outraFuncao()
console.log(localVar) // ReferenceError: localVar is not defined

//Não vale o escopo para condicionais e repetições, sendo a variável global.
var idade = 18

if(idade >= 16){
  var resultado = "Pode votar"
}

console.log (resultado)


// Quebra-cabeça para análise
function exemploEscopoBloco(){
  var x = 1
  let y = 2
  const z = 3

  if (true){
    var x = 10
    let y = 20
    const z = 30

    console.log(x) // 10
    console.log(y) // 20
    console.log(z) // 30
  }
  
  console.log(x) // 10
  console.log(y) // 2
  console.log(z) // 3
}

exemploEscopoBloco();
