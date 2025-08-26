// 09) Faça um script que mostrar a classificação de um filme conforme a faixa etária indicada pelo usuário:

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
