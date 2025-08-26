// 01) Faça um programa que receba a idade e retorne se a pessoa pode tirar CNH.
// Declaração de Variáveis
idadeUsuario = 0
limiteIdadeMinima = 18
saldoIdade = 0

//Recebe informações do Usuário
idadeUsuario = Number(idadeUsuario)

//Desvio Condicional
if(idadeUsuario >= limiteIdadeMinima){
  console.log("Parabéns! Você já pode tirar sua habilitação de Motorista.")
} else {
  saldoIdade = limiteIdadeMinima - idadeUsuario
  console.log("Falta" + saldoIdade + " anos para você tirar a sua Habilitação de Morotista")
}

// 02) Crie um programa que leia um número e retorne se é par ou ímpar:
numeroDigitado = 0

//Recebe informações do Usuário
numeroDigitado = prompt("Digite um número:")

numeroDigitado = Number(numeroDigitado)

if(numeroDigitado % 2 === 0){
  console.log("O número " + numeroDigitado + "é Par.") 
} else {
  console.log("O número " + numeroDigitado + "é Impar.")
}

// 03) Lei um número de 1 a 12 e mostre o mês correspondente
numeroDigitado = 0

numeroDigitado = prompt("Informe um número entre 1 e 12:")

numeroDigitado = Number(numeroDigitado)

switch(numeroDigitado){
  case 1:
    console.log
}
