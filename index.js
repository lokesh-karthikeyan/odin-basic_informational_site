import { createServer } from 'node:http';
import { readFile } from 'node:fs'

const hostname = 'localhost';
const port     = 8080;
const routes   = {
    '/':          './views/index.html',
    '/about':      './views/about.html',
    '/contact-me': './views/contact-me.html'
}

const server = createServer((req, res) => {
    const url      = req.url;
    const filepath = routes[url] || './views/404.html';
    const status   = routes[url] ? 200 : 400;

    res.statusCode = status;
    res.setHeader('Content-Type', 'text/html');
    readFile(filepath, (err, data) => {
	if (err) {
	    res.statusCode = 500;
	    res.end('Internal Server error');
	} else {
	    res.end(data);
	}
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
