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

