import {createServer} from 'node:http';
import fs from 'fs';

const server = createServer((req, res) => {
    
    if (req.url === '/'){
        fs.readFile('./home.html', function(err, data){
            if(err){throw err}
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data) 
            res.end();
        })
    } else if (req.url === '/artigos'){
        fs.readFile('./artigos.html', function(err, data){
            if(err){throw err}
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data) 
            res.end();
        })
    } else if (req.url === '/contato'){
        fs.readFile('./contato.html', function(err, data){
            if(err){throw err}
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data) 
            res.end();
        })
    } else{
        fs.readFile('./notFound.html', function(err, data){
            if(err){throw err}
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data) 
            res.end();
        })
    }
});

server.listen(3000, '127.0.0.1', () => { 
    console.log('Listening on 127.0.0.1:3000'); 
});