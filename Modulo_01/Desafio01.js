/* Desafio: Melhorar o simulador de um caixa de supermercado (exercício de fixação 15).
- O usuário precisa informar: a descrição e o valor do produto e a quantidade comprada
- Ao final, o sistema deve mostrar o cupom da venda.
*/

descricaoProduto = new Array() //ITEM       DESCRIÇÃO            QTD   VALOR      TOTAL

quantidadeItens = 0
valorItem = 0
valorTotalItem = 0
valorTotalCompra = 0
itemCupom = 1

nomeProduto = prompt("Para finalizar, digite '0' (zero) no produto.\n \n Informe o produto:")

for(itemCompra = 0; nomeProduto != 0; itemCompra++){
    quantidadeItens = prompt("Quantidade de produtos: ").replace(",",".")
    quantidadeItens = parseFloat(quantidadeItens)
    valorItem = prompt("Valor do produto (R$)").replace(",",".")
    valorItem = parseFloat(valorItem)

    valorTotalItem = quantidadeItens * valorItem
    valorTotalCompra = valorTotalCompra + valorTotalItem

    valorItem = valorItem.toFixed(2).replace(".",",")
    valorTotalItem = valorTotalItem.toFixed(2).replace(".",",")
    quantidadeItens = quantidadeItens.toFixed(3).replace(".",",")
    
    descricaoProduto.push(nomeProduto, quantidadeItens, valorItem, valorTotalItem)
    nomeProduto = prompt("Informe o produto:")  
}

//Impressão do Cupom Fiscal
console.log("              CUPOM DA VENDA              ")
console.log("---------------------------------------------------------")
console.log("ITEM       DESCRIÇÃO\nQTD   VALOR      TOTAL")
console.log("---------------------------------------------------------")
for(itemCompra = 0; itemCompra < descricaoProduto.length-1; itemCompra+=4){    
    console.log(itemCupom + "          " + descricaoProduto[itemCompra])
    console.log(descricaoProduto[itemCompra+1] + "       " + descricaoProduto[itemCompra+2] + "       "+ descricaoProduto[itemCompra+3]) 
    itemCupom++ 
}
console.log("---------------------------------------------------------")
valorTotalCompra = valorTotalCompra.toFixed(2).replace(".",",")
console.log("TOTAL R$                " + valorTotalCompra)
