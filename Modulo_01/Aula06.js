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

