// server.mjs
import {createServer} from 'node:http'; //import de biblioteca

const server = createServer((req, res) => { //prevê uma constante chamada servidor que recebe função Create server com dois argumentos, req e res
    res.writeHead(200, {'Content-Type': 'text-plain'}); // como resposta temos o cabeçalho, dizendo o código 200 (deu certo) e o tipo de resposta text-plain
    res.end('Hello Word! \n'); //o que será respondido
});

//starts a simples http server locally on port 3000
server.listen(3000, '127.0.0.1', () => { // iniciar um servidor na porta 3000 do IP 127.0.0.1
    console.log('Listening on 127.0.0.1:3000'); // o que vai aparecer na tela
});

//run with 'node server.mjs' digitar no terminal e depois acessar pelo navegador http://127.0.0.1:3000/
