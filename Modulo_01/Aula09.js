/* 14) Desenvolver uma solução para mostrar qual o valor final de um investimento financeiro.
Receber um valor como capital de entrada, número de meses aplicados e taxa de rentabilidade ao mês.
Ao final imprimir: Capital de entrada, meses, taxa e valor capitalizado (final)
*/

capitalEntrada = prompt("Informe o valor inicial do investimento:")
meses = prompt("Informe por quanto tempo (meses) deseja investir:")
taxa = prompt("Informe a taxa do investimento:")

capitalFinal = parseFloat(capitalEntrada)
taxa = parseFloat(taxa)

for(contador = 1; contador <= meses; contador++){
  capitalFinal = capitalFinal + (capitalFinal * taxa)
  console.log(capitalFinal)
}

capitalEntrada = parseFloat(capitalEntrada).toFixed(2)
capitalFinal = parseFloat(capitalFinal).toFixed(2)

console.log("Valor inicial: R$ " + capitalEntrada)
console.log("Perído da aplicação: " + meses + " meses")
console.log("Taxa: " + taxa)
console.log("Valor ao final da aplicação: R$ " + capitalFinal)
