const http = require("http") //importing the reuqired http module from node.js
const server = http.createServer( (req, res) => {
    res.writeHead(200, {
        "content-type" : "text/plain",
        "server" : "node.js"
    });
    res.end("Hello, World!");
});
const port = 5009;
server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
