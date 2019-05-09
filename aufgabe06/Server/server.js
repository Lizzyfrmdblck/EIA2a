"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
var eisdealer_client;
(function (eisdealer_client) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //Der Text vom Request soll im Terminal erscheinen (A2.4)
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(eisdealer_client || (eisdealer_client = {}));
//# sourceMappingURL=server.js.map