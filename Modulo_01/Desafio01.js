/* Desafio: Melhorar o simulador de um caixa de supermercado (exercício de fixação 15).
- O usuário precisa informar: a descrição e o valor do produto e a quantidade comprada
- Ao final, o sistema deve mostrar o cupom da venda.
*/

descricaoProduto = new Array() //ITEM       DESCRIÇÃO            QTD   VALOR      TOTAL

quantidadeItens = 0
valorItem = 0
valorTotalItem = 0
valorTotalCompra = 0

console.log("Olá, vamos iniciar o registro dos seus produtos.\n Para finalizar, digite 'SSSS' no campo produto.)")
nomeProduto = prompt("Informe o produto:")

for(itemCompra = 1; nomeProduto != "SSSS"; itemCompra++){
  quantidadeItens = Number(prompt("Quantidade de produtos: "))
  valorItem = parseFloat(prompt("Valor do produto (R$)")).replace(",",".")
  valorTotalItem = quantidadeItens * valorItem
  valorTotalCompra = valorTotalCompra + valorTotalItem  
  descricaoProduto.push(itemCompra, nomeProduto, quantidadeItens, valorItem, valorTotalItem)
  nomeProduto = prompt("Informe o produto:")  
}
  
  
  


totalProduto = totalProduto.toFixed(2).replace(".",",")

console.log("CUPOM DA VENDA \n --------------------------------------")
console.log("ITEM       DESCRIÇÃO            QTD   VALOR      TOTAL")
console.log("---------------------------------------")

