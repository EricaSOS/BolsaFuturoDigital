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
    //const tabelaRodape = cheerioLoad('#tabela-rodape') //pega apenas a parte da tabela-rodape

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
    //Buscar esse pedido no banco
    const sql = `SELECT PROD.COD_PROD, PROD.DESC_PROD, PROD.UNID_PROD, IPED.QTD_PED, PROD.VAL_UNIT, (IPED.QTD_PED * PROD.VAL_UNIT) AS 'VAL_TOTAL', SUM(IPED.QTD_PED * PROD.VAL_UNIT) AS VALOR_TOTAL
                    FROM ITEM_PEDIDO IPED, PEDIDO PED, PRODUTO PROD
                        WHERE IPED.NO_PED = PED.NUM_PED
                            AND IPED.CD_PROD = PROD.COD_PROD
                            AND PED.NUM_PED = ?`
    
    db.all(sql, [req.params.id], (err,rows) => {
        if (err) {
            res.status(500).json({error: err.message})
            return
        }    
    
    //Carregar o Html
    const htmlBase = fs.readFileSync('./views/pedido.html') //Lê o html
    const cheerioLoad = cheerio.load(htmlBase) // carrega no cheerio o html
    const itensPedido = cheerioLoad('#items-pedido') //pega apenas a parte da tabela-corpo
    const totalPedido = cheerioLoad('#total-pedido')
    // Preencher os valores

    
    rows.forEach(itemPedido => {
        itensPedido.append(`
                <div class="row g-0">
                    <div class="col-1 text-center">${itemPedido.COD_PROD}</div>
                    <div class="col-4">${itemPedido.DESC_PROD}</div>
                    <div class="col-1 text-center">${itemPedido.UNID_PROD}</div>
                    <div class="col-2 text-center">${itemPedido.QTD_PED}</div>
                    <div class="col-2 text-right">R$ ${itemPedido.VAL_UNIT}</div>
                    <div class="col-2 text-right">R$ ${itemPedido.VAL_TOTAL}</div>
                </div>
                `)
        })
    
    //Enviar o HTML
    res.send(cheerioLoad.html())
    })
})


app.listen(port, () => {
    console.log(`Servidor ouvindo a porta ${port}!`)
})
