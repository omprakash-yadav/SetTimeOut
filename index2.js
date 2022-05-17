const http = require("http");
const fs = require('fs');
const PORT = 800;

const date = new Date();
//console.log(date)
fs.writeFileSync("DateTime/date-time.txt","console.log(`{${Date.now()}}`)")
http
  .createServer((req, res) => {
    fs.readFile("DateTime/date-time.txt", (err, data) => {
      res.writeHeader(200, { "Content-Type": "text/html" })
      console.log(data);
      res.write(data);
      res.end();
    });
  })
  .listen(PORT, () => {
    console.log("listening to", PORT);
  });
