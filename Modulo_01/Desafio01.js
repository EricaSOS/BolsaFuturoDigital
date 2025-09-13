/* Desafio: Melhorar o simulador de um caixa de supermercado (exercício de fixação 15).
- O usuário precisa informar: a descrição e o valor do produto e a quantidade comprada
- Ao final, o sistema deve mostrar o cupom da venda.
*/

descricaoProduto = new Array()
quantidadeProduto = new Array()
valorUnidadeProduto = new Array()
valorTotalItem = new Array()

quantidadeItens = 0
valorItem = 0
valorTotalItem = 0
calculoItem = 0

valorTotalCompra = 0


console.log("Olá, vamos iniciar o registro dos seus produtos.\n Para finalizar, digite 'SSSS' no campo produto.)")
nomeProduto = prompt("Informe o produto:")

for(itemCompra = 1, nomeProduto != "SSSS", itemCompra++){
  descricaoProduto.push(nomeProduto)
  quantidadeItens = Number(prompt("Quantidade de produtos: "))
  quantidadeProduto.push(quantidadeItens)
  valorItem = parseFloat(prompt("Valor do produto (R$)")).replace(",",".")
  valorUnidadeProduto.push(valorItem)
  calculoItem = quantidadeItens * valorItem
  valorTotalItem.push(calculoItem)

  valorProduto = parseFloat(valorProduto)
  totalProduto = totalProduto + valorProduto
  contadorProduto++
  valorProduto = valorProduto.toFixed(2).replace(".",",")
  console.log("Produto " + contadorProduto + ": " + nomeProduto +" ........... R$ " + valorProduto)
  nomeProduto = prompt("Informe o produto:")
}
  
  
  


totalProduto = totalProduto.toFixed(2).replace(".",",")

console.log("CUPOM DA VENDA \n --------------------------------------")
console.log("ITEM       DESCRIÇÃO            QTD   VALOR      TOTAL")
console.log("---------------------------------------")

