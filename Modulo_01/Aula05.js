// OBS: Aula 04 foi teórica, não teve exercícios.

// 01) Elabora um script que calcule o IMC (Índice de Massa Corporal) de uma pessoa:
// Declaração de variáveis
peso = 0 // lado 01
altura = 0 // lado 02
imc = 0 // Índice de Massa Corporal

// Receber informações do usuário
peso = prompt("Insira o peso da pessoa (kg):").replace(',', '.')
altura = prompt("Insira a altura da pessoa (metro):").replace(',', '.')

//Formatação
peso = Number(peso)
altura = Number(altura)

pesoFormatado = peso.toFixed(2)
alturaFormatada = altura.toFixed(2)

// Calcular o que se pede
imc = pesoFormatado /(alturaFormatada ** 2)

//Formatação
imcFormatado = imc.toFixed(2).replace('.', ',')

// Mostrar o resultado para o usuário no console
console.log("O IMC da pessoa é: " + imcFormatado)



// 02) Desenvolva uma solução que receba 02 numeros e imprima os valores trocados.
// 1ª Tentativa, usando uma terceira variável
primeiroNumero = prompt("Digite o primeiro número:")
segundoNumero = prompt("Digite o segundo número:")

variavelauxiliar = primeiroNumero
primeiroNumero = segundoNumero
segundoNumero =  variavelauxiliar

console.log("O primeiro número passou a ser: " + primeiroNumero)
console.log("O segundo número passou a ser: " + segundoNumero)

// Professor passou desafio de não usarmos uma terceira variável para fazer a alteração.
