// exemplo
class Cachorro{
    nome: string = ""
    peso: number = 0
    cor: string = ""

    constructor (nome: string, cor: string){ // não precisa trazer todas as propriedades
        this.nome = nome
        this. cor = cor
    }

    emitirSom(): void{
        console.log("au-au")
    }

    ouvirSom(som: string): void{
        if (som == this.nome){
            this.emitirSom()
        }
    }

    calcularValorTosa(): number{
        return this.peso * 0.75
    }
}

const cachorro: Cachorro = new Cachorro("sadan", "caramelo")
cachorro.ouvirSom("thor") // não fala, pois não é igual ao nome


// ACRESCENTANDO CLASSE COMIDA E O ATRIBUTO COMIDA

class Comida{
    nome: string = ""
    energia: number = 0

    constructor( nome: string, energia: number){
        this.nome = nome
        this.energia = energia
    }    

}

class Cachorro{
    nome: string = ""
    peso: number = 0
    cor: string = ""
    private energia: number = 100

    constructor (nome: string, cor: string){ // não precisa trazer todas as propriedades
        this.nome = nome
        this. cor = cor
    }

    emitirSom(): void{
        if (this.energia >= 30){
            console.log("au-au")
            this.energia -= 20
        }        
    }

    ouvirSom(som: string): void{
        if (som == this.nome){
            this.emitirSom()
        }
    }

    calcularValorTosa(): number{
        return this.peso * 0.75
    }

    comer(comida: Comida){
        this.energia += comida.energia

        // regra: energia não pode ser maior que 100
        if (this.energia > 100){
            this.energia = 100
        } 
    }

}

const cachorro: Cachorro = new Cachorro("sadan", "caramelo")

for(let contador = 1; contador <= 10; contador++) {
    console.log(contador)
    cachorro.emitirSom()
}

cachorro.comer(new Comida("Osso", 50))

cachorro.energia = 100 // não consegue, pois energia está privada, encapsulada

for(let contador = 11; contador <= 20; contador++) {
    console.log(contador)
    cachorro.emitirSom()
}

// EXEMPLO DE INTERFACE E IMPLEMENTAÇÃO:

interface Carro{
    partes: Array<string>
    montar(): void
}

class CarroModeloA implements Carro{
    partes: Array<string> = ["motor 1.0","cambio_manual"]

    montar(): void {
        console.log(this.partes.join(".")) // vai separar os elemntos do array, juntar e separando por pontos
    }
}

const carroA: CarroModeloA = new CarroModeloA()

carroA.montar() // "motor 1.0.cambio_manual"

const carroX: Carro = new CarroModeloA() // posso utilizar a própria interface carro

carroX.montar() // "motor 1.0.cambio_manual"


console.log("----------------------------------------------------")
class CarroModeloB implements Carro {
    partes: Array<string> = ["motor 2.0","cambio_automático"]

    montar(): void {
        console.log(this.partes.join(";")) // vai separar os elemntos do array, juntar e separando por ";"
    }
}

const carroD: CarroModeloA = new CarroModeloA()
const carroC: CarroModeloB = new CarroModeloB()

function montarCarros(carros: Array<Carro>){
    carros.forEach((carro) => carro.montar())
}

montarCarros([carroD, carroC])

