// 06) Faça um script que mostrar a classificação de um filme conforme a faixa etária indicada pelo usuário:

opcaoUsuario = prompt("Digite a idade a ser consultada:")

opcaoUsuario = parseInt(opcaoUsuario)

if (opcaoUsuario < 12){
    console.log("Faixa etária: Menor que 12 anos.\n Classificação: Livre")
} else if (opcaoUsuario >= 12 && opcaoUsuario <= 14){
    console.log("Faixa etária: De 12 a 14 anos.\n Classificação: +12")
} else if (opcaoUsuario >= 15 && opcaoUsuario <= 17){
    console.log("Faixa etária: De 15 a 17 anos.\n Classificação: +15")
} else if (opcaoUsuario >= 18){
    console.log("Faixa etária: 18 anos ou mais.\n Classificação: +18")
} else {
  console.log("Por gentileza, escolha uma idade")
}

// 07) 





// 08) Faça um script que leia três números e imprima o maior
primeiroNumero = prompt("Digite o primeiro número:")
segundoNumero = prompt("Digite o segundo número:")
terceiroNumero = prompt("Digite o terceiro número:")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)
terceiroNumero = Number(terceiroNumero)

if (primeiroNumero === segundoNumero && primeiroNumero === terceiroNumero){
    console.log("Os três números informados são iguais.")
} else if (primeiroNumero === segundoNumero || primeiroNumero === terceiroNumero || segundoNumero === terceiroNumero){
    console.log("Você informou pelo menos dois números iguais.")
}  else if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero){
    console.log("O maior número é: " + primeiroNumero)
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero){
    console.log("O maior número é: " + segundoNumero)
} else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero){
    console.log("O maior número é: " + terceiroNumero)
} else {
  console.log("Por gentileza, insira três números.")
}
