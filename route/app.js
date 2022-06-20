let http = require('http');
let url = require('url');
let querystring = require('querystring');
let hostname = '127.0.0.1';
let port = 5000;


let server = http.createServer(function(req, res){
    let page = url.parse(req.url).pathname;
    let params = querystring.parse(url.parse(req.url).query);

    res.setHeader('Content-Type', 'text/html');

    if (page == '/') {
        res.statusCode = 200;
        res.write('Vous être sur la home page');
    }
    else if (page == '/controller') {
        res.statusCode = 200;
        res.write('Vous êtes sur le contrôleur');
    }
    else if ( page == '/controller/method') {
        res.statusCode = 200;
        res.write('Vous êtes sur la méthode et le contrôleur');
    }
    else {
        res.statusCode = 400;
        res.write('Cette page n\'hésiste pas')
    }

    if ('prenom' in params && 'nom' in params) {
        res.write('<br>Vous etes ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('<br>Prenom et nom sont vide !')
    }
    res.end();
});

server.listen(port, hostname, function(){
    console.log("Server running at http://" + hostname + ":" + port + "/");
});