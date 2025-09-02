// EXEMPLOS DE ESTRUTURAS DE REPETIÇÃO
// 1) WHILE
contador = 1
while (contador <= 5){
  console.log("Número:" + contador)
  contador++
}

//Com break
contador = 1
while (true){
  console.log("Número:" + contador)
  contador++

  if(contador > 5){
    break
  }
}

// 2) DO / WHILE

contador = 1

do{
  console.log("Número:" + contador)
  contador++
} while (contador <= 5)

// 3) FOR

for(contador = 1; contador <= 5; contador ++){
  console.log("Número: " + contador)
}

// DESAFIO 01: JOGO DO PIM (SILVIO SANTOS)
contador = 1

while (contador <= 25){ 

  if(contador % 3 !== 0){
    console.log(contador)
  } else {
    console.log("PIM")
  }
  
  contador++
}

// DESAFIO 02: Imprima os números ímpares de 0 a 25

for(contador = 1; contador <= 25; contador+= 2){
  console.log("Número: " + contador)
}

// 12) Escreva um programa que imprima a tabuada de qualquer número

multiplicando = prompt("Informe o número: ")

for(multiplicador = 1; multiplicador <= 10; multiplicador++){
  produto = multiplicando * multiplicador
  console.log(multiplicando + " x " + multiplicador + " = " + produto)
}



