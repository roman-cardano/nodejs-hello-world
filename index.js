const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;
const client_request_options = {
  host: 'localhost',
  port: port  
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var msg;
  fs.readFile('response.json', function processContent(err, content) {
        if (err) {
            console.log('Error loading file with response: ' + err);
            return;
        }
        res.setHeader('content-type', 'application/json')
        res.end(content);
    })
  ts = Date.now()
  filePath = ts + '\\' + "f" + ts + ".txt";
  // fs.mkdirSync(ts + '');
  fs.writeFile('new_file.txt', "Server was able to create file and folder and put content");  
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
  call()
});

function call(){
    const client_request = http.request(client_request_options);
    client_request.end();
    console.log('iteration is done')
}


