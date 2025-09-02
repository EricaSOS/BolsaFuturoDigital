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

//Com continue


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
