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
