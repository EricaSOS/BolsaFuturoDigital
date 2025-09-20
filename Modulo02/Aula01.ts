//EXEMPLO 01
const nome: string = "Érica Santos"
const curso: string = "JS Backend"

console.log(nome)
console.log(curso)

//EXEMPLO 02
const soma = (a: number, b: number): number => {return a+b}

console.log(soma("2",2)) // daria aviso informando que o tipo String não é aceito.

// EXEMPLO 03

const nome: string = "Fábio Marques"
const professor: boolean = true
const disciplinas: Array<string> = ["LPJS","ES","TOB"]

function mostrarDados(): void{
    console.log("Nome: " + nome)
    console.log("Professor: " + (professor ? "Sim":"Não"))
    console.log("Disciplinas: " + disciplinas)
}

mostrarDados()

// EXEMPLO 04

enum TiposDePagamento{
    credito = "cartao_credito",
    debito = "cartao_debito",
    pix = "transf_pix"
}

const pagamento: TiposDePagamento = TiposDePagamento.pix
console.log(pagamento)

// EXEMPLO 05
const pessoa: [string, number] = ["Érica", 37] // isso é uma tupla

// EXEMPLO 06
type Usuario = {
    nome: string,
    login: string,
    senha: string
}

const digaOla = (usr: Usuario): void => {
    console.log("Olá " + usr.nome + "!")
}

const usuarioLogado: Usuario = {
    nome:"Erica",
    login: "devIniciante",
    senha: "456#"
}

digaOla(usuarioLogado)
