/* 14) Desenvolver uma solução para mostrar qual o valor final de um investimento financeiro.
Receber um valor como capital de entrada, número de meses aplicados e taxa de rentabilidade ao mês.
Ao final imprimir: Capital de entrada, meses, taxa e valor capitalizado (final)
*/
capitalEntrada = prompt("Informe o valor inicial do investimento:").replace(",",".") // tratamento da vírgula da entrada do usuário brasileiro
meses = prompt("Informe por quanto tempo (meses) deseja investir:")
taxa = prompt("Informe a taxa do investimento (em decimais):").replace(",",".") // tratamento da vírgula da entrada do usuário brasileiro

capitalFinal = parseFloat(capitalEntrada)
taxa = parseFloat(taxa)

for(contador = 1; contador <= meses; contador++){
  capitalFinal = capitalFinal + (capitalFinal * taxa)
  console.log(capitalFinal)
}

capitalEntrada = parseFloat(capitalEntrada).toFixed(2).replace(".",",") // tratamento do ponto para aparecer vírgula para entendimento de usuário brasileiro
capitalFinal = parseFloat(capitalFinal).toFixed(2).replace(".",",") // tratamento do ponto para aparecer vírgula para entendimento de usuário brasileiro

console.log("Valor inicial: R$ " + capitalEntrada)
console.log("Perído da aplicação: " + meses + " meses")
console.log("Taxa: " + taxa)
console.log("Valor ao final da aplicação: R$ " + capitalFinal)


/* 15) Desenvolver uma solução para simular um caixa de supermercado.
Ao final, imprimir somente o Total da Compra (soma dos produtos)
Dicas: 
- Iremos receber os produtos e seus valores dentro de um laço;
- Devemos implementar uma solução de saída de laço.
*/
console.log("Olá, vamos iniciar o registro dos seus produtos.\n Para finalizar, digite 'SSSS' no campo produto.)")
nomeProduto = prompt("Informe o produto:")

totalProduto = 0
contadorProduto = 0

while(nomeProduto != "SSSS"){  
  valorProduto = prompt("Informe o valor do produto (em reais)").replace(",",".")
  valorProduto = parseFloat(valorProduto)
  totalProduto = totalProduto + valorProduto
  contadorProduto++
  valorProduto = valorProduto.toFixed(2).replace(".",",")
  console.log("Produto " + contadorProduto + ": " + nomeProduto +" ........... R$ " + valorProduto)
  nomeProduto = prompt("Informe o produto:")
}

totalProduto = totalProduto.toFixed(2).replace(".",",")

console.log("Valor total da compra: R$ " + totalProduto)
