//server.js
import {createServer} from 'node:http';

const server = createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});


    if (req.url === '/') {
        res.write('<h1>P&aacute;gina principal</h1>')
    } else if (req.url ==='/hello') {
        res.write('<h1> Ol&aacute;, mundo!<h1>')
    } else {
        res.write('<h1>P&aacute;gina n&atilde;o encontrada!</h1>')
    }
    res.end();
    });

    server.listen(3000, '127.0.0.1', () => {
        console.log('Listening on 127.0.0.1:3000');
    });

    //run with 'node server.js'



//server_url.js
import {createServer} from 'node:http';
import {parse} from 'node:url'

const server = createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Dados da query string</h1>');

const result = parse(req.url, true); // responsável por fazer parser e formatação de urls

for (var key in result.query){
    res.write("<h2>" + key + ":" + result.query[key] + "</h2>")
}

res.write("<hr><h1>Informa&ccedil&otilde;es adicionais</h1>")
res.write("<h2>href : " + result.href + "</h2>") // retorna a url completa
res.write("<h2>pathname : " + result.pathname + "</h2>") // retorna o path da url
res.write("<h2>search : " + result.search + "</h2>") // retorna uma query string
res.write("<h2>path : " + result.path + "</h2>") // retorna a concatenação de pathname com query string

res.end()
})

    server.listen(3000, '127.0.0.1', () => {
        console.log('Listening on 127.0.0.1:3000');
    });

    //run with 'node server_url.js'
    //http://127.0.0.1:3000/?login=fmarques&senha=1234@
