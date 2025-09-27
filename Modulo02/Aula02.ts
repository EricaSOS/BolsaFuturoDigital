// Teoria
// Exemplo 01
class Usuario{
    nome: string = ""
    login: string = ""
    senha: string = ""
}

const usuarioLogado: Usuario = new Usuario()

usuarioLogado.nome = "Fabio"
usuarioLogado.login = "fmarques"
usuarioLogado.senha = "456#"

// Exemplo 02: com método construtor

class Usuario{
    nome: string = ""
    login: string = ""
    senha: string = ""

 constructor(nome: string, login: string, senha: string){
        this.nome = nome
        this.login = login
        this.senha = senha
    }
}
const usuarioLogado: Usuario = new Usuario("Fábio", "fmarques", "456#")

