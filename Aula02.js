// 01) CÁLCULO DE ÁREA DE TRIÂNGULO
// Declarar variáveis 
baseTriangulo = 0
alturaTriangulo = 0
areaTriangulo = 0

// Coletar informações do usuário
baseTriangulo = prompt("Informe a base do triângulo: ")
alturaTriangulo = prompt("Informe a altura do triângulo: ")

// Calcular a área
areaTriangulo = (baseTriangulo * alturaTriangulo)/2

// Verificar o tipo da variável areaTriangulo
console.log(typeof(areaTriangulo))

// Mostrar no console
console.log("A área do triângulo é de " + areaTriangulo)


// 02) CONVERSOR DE TEMPO (deve aparecer como o exemplo dado no slide)
// Declarar variáveis
idadeAno = 0
idadeDias = 0
idadeHoras = 0
idadeMinutos = 0
idadeSegundos = 0

// Coletar informações do usuário
idadeAno = prompt("Insira sua idade em anos: ")

// Calcular idade
idadeDias = idadeAno * 365 // 365 dias no ano, considerando ano não bissexto
idadeHoras = idadeDias * 24 // 24 horas em um dia
idadeMinutos = idadeHoras * 60 // 60 minutos em uma hora
idadeSegundos = idadeMinutos * 60 // 60 segundos em uma hora

// Imprimir os resultados no console
console.log("Você tem " + idadeAno + " anos; " + idadeDias + " dias; " + idadeHoras + " horas; " + idadeMinutos + " minutos; " + idadeSegundos + " segundos")


