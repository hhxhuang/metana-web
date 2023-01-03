var http = require("http");
var fs = require("fs");
var server = http
  .createServer(function (request, respone) {
    respone.setHeader("Access-Control-Allow-Origin", "*");
    respone.setHeader(
      "Access-Control-Allow-Headers",
      "x-requested-with,content-type"
    );
    respone.setHeader(
      "Access-Control-Allow-Methods",
      "PUT,POST,GET,DELETE,OPTIONS"
    );
    respone.setHeader("X-Powered-By", "3.2.1");
    respone.setHeader("Content-Type", "application/json;charset=utf-8");
    var url = request.url;
    if (url == "/") {
      respone.writeHead(200, { "Content-Type": "text/html" });
      var ns = fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) {
          console.error(err);
          return;
        }
        respone.end(data);
      });
    } else if (url != "/") {
      var cpurl = "." + url;
      var type = url.substr(url.lastIndexOf(".") + 1, url.length);
      respone.writeHead(200, { "Content-type": "text/" + type });
      var ns = fs.readFile(cpurl, function (err, data) {
        if (err) {
          console.error(err);
          return;
        }
        respone.end(data);
      });
    }
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("Successfully");
  });
// .listen(3000, '192.168.1.37', () => {
//     console.log('Successfully');
// });
