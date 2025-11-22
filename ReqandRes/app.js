const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>My Server</title></head>');
        res.write('<body>');
        res.write('<h1>Hello from Node.js Server Home !</h1>');
        res.write('</body>');
        res.write('</html>');
    }
    else if (req.url === "/product") {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>My Server</title></head>');
        res.write('<body>');
        res.write('<h1>Hello from Node.js Server Product !</h1>');
        res.write('</body>');
        res.write('</html>');
    }
    else {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>My Server</title></head>');
        res.write('<body>');
        res.write('<h1>Hello from Node.js Server!</h1>');
        res.write('</body>');
        res.write('</html>');
    }


    return res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log("Server Is Listening");
});
