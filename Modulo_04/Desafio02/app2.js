const express = require('express')
const app2 = express()
const port = 3000
let p

app2.use('/static', express.static('view'))

app2.get('/', (req, res) => {
    res.send('/home.html')
})

app2.get('/artigos', (req, res) => {
    res.send('/artigos.html')
})

app2.get('/contato', (req, res) => {
    res.send('/contato.html')
})

//tratamento de rota não encontrada
app2.use ((req, res, next) => {
    console.log('Rota não encontrada')
})

app2.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})
