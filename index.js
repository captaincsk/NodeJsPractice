const http =  require ("http") ;
const hostname = "127.0.0.1"
const port = 8000;
const fs = require('fs');
const myServer = http.createServer((req,res ) => {
    console.log("New Req Recieved");
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err,data) =>{
        switch(req.url){
            case '/': res.end("HomePage");
            break
            case  '/about': res.end("its my about us page ");
            break;
            default: res.end("404 ERROR NOT FOUND");

        }
   // res.end("hello from the server");
    });
});

myServer.listen(port, hostname,  () => console.log(`server is runnining AT http://${hostname}:${port}/ `));

// url = uniform resource loader
// https : hyper text protocol secure
// https:  wwww.piyushgarg.dev 
// httpa   ^ domain name user friendly name of ip address