
/* Sem arquivo HTML
const express = require(`express`)
const app = express()
const port = 3000
const sqlite3 = require(`sqlite3`)

//Faz a conexão com o banco de dados
const db = new sqlite3.Database('./bd.sqlite', (err) => {
    if (err) {console.error(err.message)}
    console.log('Conectado ao Banco de Dados.')
})

app.get(`/pedidos`, (req, res) => {
    const sql = 'SELECT * FROM pedido'

    //Execução da instrução SQL no BD
    db.all(sql, [], (err,rows) => {
        if (err) {
            res.status(500).json({error: err.message})
            return
        }
        res.status(200)
        //Escrevendo, na resposta, o cabeçalho da tabela
        res.write('<table border= "1">')
        res.write('<thead>')
        res.write('<tr>')
        res.write('<th>Número</th>')
        res.write('<th>Prazo</th>')
        res.write('<th>Cliente</th>')
        res.write('<th>Vendedor</th>')
        res.write('</tr>')
        res.write('</thead>')
        res.write('<tbody>')
        //Laço para cada registro retornado do BD
        rows.forEach(pedido => {
            //Escrevendo, na resposta, ocorpo da tabela
            res.write('<tr>')
            res.write(`<th>${pedido.NUM_PED}</th>`)
            res.write(`<td>${pedido.PRAZO_ENTR}</td>`)
            res.write(`<td>${pedido.CD_CLI}</td>`)
            res.write(`<td>${pedido.CD_CLI}</td>`)
            res.write(`<td>${pedido.CD_VEND}</td>`)
            res.write('</tr>')
        })        
        //Escrevendo, na resposta, o rodapé da tabela
        res.write('<tfoot>')
        res.write('<tr><th scope = "row" colspan="3"> Pedidos</th><td>' +
            rows.length + '</td></tr>')
        res.write('</tbody>')
        res.write('</table>')
        res.send()
        })
    })

app.listen(port, () => {
    console.log(`Servidor ouvindo a porta ${port}!`)
})

*/

/*
//com arquivo html em separado
const express = require(`express`)
const fs = require(`fs`);
const app = express()
const port = 3000
const sqlite3 = require(`sqlite3`)
const cheerio = require(`cheerio`)

//Faz a conexão com o banco de dados
const db = new sqlite3.Database('./bd.sqlite', (err) => {
    if (err) {console.error(err.message)}
    console.log('Conectado ao Banco de Dados.')
})

app.get(`/pedidos`, (req, res) => {
    const sql = 'SELECT * FROM pedido'
    const sqlNumPedidos = 'SELECT COUNT(*) AS totalPedidos FROM pedido'
    //Execução da instrução SQL no BD
    db.all(sql, [], (err,rows) => {
        if (err) {
            res.status(500).json({error: err.message})
            return
        }

    const htmlBase = fs.readFileSync('./views/views.html') //Lê o html
    const cheerioLoad = cheerio.load(htmlBase) // carrega no cheerio o html
    const tabelaCorpo = cheerioLoad('#tabela-corpo') //pega apenas a parte da tabela-corpo
    const tabelaRodape = cheerioLoad('#tabela-rodape') //pega apenas a parte da tabela-rodape

        rows.forEach(pedido => {
            tabelaCorpo.append(`                
            <tr>
            <th>${pedido.NUM_PED}</th>
            <td>${pedido.PRAZO_ENTR}</td>
            <td>${pedido.CD_CLI}</td>
            <td>${pedido.CD_VEND}</td>
            </tr>`)            
        })
        
            tabelaRodape.append(`                
            <tr>
                <th scope="row" colspan="3">Pedidos</th>
                <td>${qtdPedido.totalPedidos}</td>                
            </tr>`)            
        })

        res.send(cheerioLoad.html())
        })
    })

app.listen(port, () => {
    console.log(`Servidor ouvindo a porta ${port}!`)
})
*/

// Consultar e aparecer pedido 

const express = require(`express`)
const fs = require(`fs`);
const app = express()
const port = 3000
const sqlite3 = require(`sqlite3`)
const cheerio = require(`cheerio`)

//Faz a conexão com o banco de dados
const db = new sqlite3.Database('./bd.sqlite', (err) => {
    if (err) {console.error(err.message)}
    console.log('Conectado ao Banco de Dados.')
})

app.get('/pedidos', (req, res) => {
    const sql = 'SELECT * FROM pedido'
    //Execução da instrução SQL no BD
    db.all(sql, [], (err,rows) => {
        if (err) {
            res.status(500).json({error: err.message})
            return
        }

    const htmlBase = fs.readFileSync('./views/views.html') //Lê o html
    const cheerioLoad = cheerio.load(htmlBase) // carrega no cheerio o html
    const tabelaCorpo = cheerioLoad('#tabela-corpo') //pega apenas a parte da tabela-corpo
    const tabelaRodape = cheerioLoad('#tabela-rodape') //pega apenas a parte da tabela-rodape

        rows.forEach(pedido => {
            tabelaCorpo.append(`                
            <tr>
            <th>${pedido.NUM_PED}</th>
            <td>${pedido.PRAZO_ENTR}</td>
            <td>${pedido.CD_CLI}</td>
            <td>${pedido.CD_VEND}</td>
            </tr>`)            
        })
  

        res.send(cheerioLoad.html())
        })
})

app.get('/pedido/:id', (req, res, next) => {
    res.send('ID: ' + req.params.id)
    //Buscar esse pedido no banco
    const sql = `SELECT * FROM ITEM_PEDIDO 
                WHERE NO_PED = ?`
    
    db.all(sql, [req.params.id], (err,rows) => {
        if (err) {
            res.status(500).json({error: err.message})
            return
        }
    })
    
    //Carregar o Html
    // Preencher os valores
    //Enviar o HTML
})

app.listen(port, () => {
    console.log(`Servidor ouvindo a porta ${port}!`)
})
