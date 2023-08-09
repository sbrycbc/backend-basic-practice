// Wir importieren "dotenv" mit dem Zusatz .config(); um unsere process.env mit unseren zusatzvariablen auszustatten.

require("dotenv").config();

// Wir importieren das nodejs interne Modul "http":
const http = require('http');

console.log("Hello World");

// Wir setzen einen port fest auf dem wir den server laufen lassen wollen:
const port = process.env.PORT;

let count = 0;

// wir schreiben ein server objekt, mit http.createServer(); erstellen wir einen server, mit den benötigten daten
const server = http.createServer((req, res) =>
{
    // request (req)  = die Anfrage an den server
    // response (res) = die Antwort vom server
        
    if(req.url === "/now") {
        const currentTime = new Date().toLocaleString();
        // wir setzen fest, das der inhalt der angezeigt werden kann (Statuscode 200) normaler text ist:
        res.writeHead(200, {"Content-Type":"text/plain"}); // bei status 200 wird normaler text ausgegeben
        res.end(`Date and Time : ${currentTime}`);
    } else if (req.url === `/count`) {
        count++;
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end(`Count : ${count}`);
    } else {
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end(`Hello World`);
    }

})


// wir sorgen mit der methode .listen(); dafür, das der server auf dem angegebenen port auf anfragen hört.
server.listen(port, () =>
{
    console.log(`Server läuft auf port ${port} :
    http://localhost:${port}/`);
})
