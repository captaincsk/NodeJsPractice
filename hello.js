const http = require ('http');
const hostname = '127.0.0.1';
const port = 3000;

const data = {
    message: " hello from the API ",
    version : "1.0.0"
};

// const server = http.createServer((req, res) => {
//     const html = `
//     <h1> Get Ready for Some Wild Ride</h1>
//     <p> what are we even doing here
//     we are here to create a serve in node </p> `;
//     res.statusCode = 200;
//     res.setHeader('Content-Type' , 'text/html');
//     res.write(html);
//     res.end();
// });


const server = http.createServer((req, res) => {
  if (req.url === '/api/data' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data)); // Convert data object to JSON string
  } else {
    res.statusCode = 404;
    res.write('Not found');
  }
  res.end();
});

server.listen(port, hostname, () => {
    console.log(`server is runnining AT http://${hostname}:${port}/ `);

});
