// const o = require("os");
// console.log(o.cpus());
// console.log(o.uptime());

const http = require("http");
const PORT = 800;
http
  .createServer((req, res) => {
    //res.writeHeader(200, { "Content-Type": "text/html" });
    res.writeHeader(200, { "Content-Type": "application/json" });

    // let data = `<div><h1>Welcome to the nodeJs</h1></div>`;
    let data = [{ name: "omprakah" }, { name: "kartik" }];
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(PORT, () => {
    console.log("listening to", PORT);
  });
