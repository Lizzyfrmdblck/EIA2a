"use strict";
/*
Aufgabe 7: Ice Dealer ReReLoaded
Name: Elyssia-Sofie Dürr
Matrikel: 254764
Datum: 12.05.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var BecomeKing;
(function (BecomeKing) {
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
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        _response.write("<h4>Bei uns ist folgende Bestellung eingegangen:</h4>");
        for (let key in url.query) {
            let response = "";
            response += key + ": " + url.query[key];
            _response.write("<p>" + response + "</p>");
        }
        _response.end();
    }
})(BecomeKing || (BecomeKing = {})); //namespace ende
//# sourceMappingURL=server.js.map