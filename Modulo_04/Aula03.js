// serverFS.js
import {createServer} from 'node:http'; 
import fs from 'fs';

const server = createServer((req, res) => { 
    
    fs.readFile('./index.html', function (err, data){ //leitura do arquivo html e criação de função que receba o erro e a "data" que é os dados do arquivo html
        if (err) {throw err} // se receber erro, devolver para quem, está chamando, sem dizer qual foi o erro para o usuário
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data) // escrever a "data" (= informação constante no arquivo estático html) para o usuário
        res.end();
    })
    
});

server.listen(3000, '127.0.0.1', () => { 
    console.log('Listening on 127.0.0.1:3000'); 
});

//run with 'node serverFS.js' digitar no terminal e depois acessar pelo navegador http://127.0.0.1:3000/


//index.html

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Olá, este é o meu site pessoal!</title>
</head>
<body>
    <h1>Bem vindo ao meu site pessoal</h1>
</body>
</html>
