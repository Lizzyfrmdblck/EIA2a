import * as Http from "http"; //Import eines Modul als HTTP Objekt
import * as Url from "url";

namespace L06_SendData {
    console.log("bla");
    
    console.log("Starting server"); //Consolelog wird ausgegeben mit nachricht "Starting server"
    let port: number = process.env.PORT; //Stellt den PORT als number ein zum Heroku server  
    if (port == undefined) //Falls der Port nicht definiert ist,
        port = 8100; //soll er die nummer 8100 haben (verbindet Heroku mit EIA2)

    let item: string[] = [];
    let server: Http.Server = Http.createServer(); //variable server wird als typ Http.Server und wird als Http.creatserver funktion gleichgesetzt
    server.addListener("request", handleRequest); //F�gt einen Listener hinzu der dem h�ndler bescheid gibt wenn handleRequest getriggert wurde
    server.addListener("listening", handleListen); //solange der K�ufer auf die funktion zugreift, sieht der H�ndler das.
    server.listen(port); //schaut zu was f�r ein Port verwendet wird. (8100)

    function handleListen(): void {
        console.log("Listening"); //Consolelog "Listening" wird ausgegeben
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //erstellt eine Funktion die bei einer Http.Incomingmessage, eine Http.ServerResponse zur�ck schickt
        //console.log("I hear voices")      // gibt Consolelog "I hear voices!" aus
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt in den HTML header "content-type" und text/html; charset=utf-8
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Access-Control-Allow-Origin wird auch in den Header gesetzt, damit die antwort des Codes mit dem Nutzer geteilt wird.

        let url: Url.Url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");
        
        _response.end();
    }
}