// 01) Receber cinco notas e calcular a média entre elas:

// Declaração de variáveis
primeiraNota = 0
segundaNota = 0
terceiraNota = 0
quartaNota = 0
quintaNota = 0
mediaNotas = 0

// Receber informações do usuário
primeiraNota = prompt("Insira a primeira nota: ")
segundaNota = prompt("Insira a segunda nota: ")
terceiraNota = prompt("Insira a terceira nota: ")
quartaNota = prompt("Insira a quarta nota: ")
quintaNota = prompt("Insira a quinta nota: ")

// Confirmando o tipo da variável
console.log(typeof(primeiraNota)) // String

// COnverter as variáveis notas em números
primeiraNota = parseInt(primeiraNota)
segundaNota = parseInt(segundaNota)
terceiraNota = parseInt(terceiraNota)
quartaNota = parseInt(quartaNota)
quintaNota = parseInt(quintaNota)

// Calcular o que se pede
mediaNotas = (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota)/5

// Mostrar o resultado para o usuário no console
console.log("A média das notas é: " + mediaNotas)


// 02) Escreva um script que converta a temperatura de Fahrenheit para Celsius.
// Declaração de variáveis
temperaturaFahrenheit = 0
temperaturaCelsius = 0

// Receber informações do usuário
temperaturaFahrenheit = prompt("Insira a temperatura em Fahrenheit:")

// Confirmando o tipo da variável
console.log(typeof(temperaturaFahrenheit))  // Apesar de String, na fórmula ele converte, pois como não há dúvida se é concatenação ou soma...

// Calcular o que se pede
temperaturaCelsius = (5/9) * (temperaturaFahrenheit - 32)

// Mostrar o resultado para o usuário no console
console.log("A temperatura em Celsius é: " + temperaturaCelsius + "°C")
