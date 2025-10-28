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
