import * as Http from "http";
import * as Url from "url";

namespace eisdealer_client {
	console.log("Starting server");
	let port: number = Number(process.env.PORT);
	if (!port)
		port = 8100;

	let server: Http.Server = Http.createServer();
	server.addListener("request", handleRequest);
	server.addListener("listening", handleListen);
	server.listen(port);

	function handleListen(): void {
		console.log("Listening");
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //die Funktion handleRequest wird gestartet. Sie empfängt zwei Werte (_request: Übergabe der Anfrage, _response: warten auf Antwort) und hat keinen Rückgabewert.
		console.log("I hear voices!"); //auf der Konsole wird "I hear voices!" ausgegeben

		_response.setHeader("content-type", "text/html; charset=utf-8"); //der header wir in response geschrieben, auch wenn er schon vorhanden ist (name, wert/value) - Quelle nodejs.org
		_response.setHeader("Access-Control-Allow-Origin", "*"); //der header wir in response geschrieben, auch wenn er schon vorhanden ist (name, wert/value) - Quelle nodejs.org
		//SubmitÜbersicht stylen durch URL.parse
		_response.write("<h4>folgende Bestellung ist auf dem Server eingegangen:</h4>");
		let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
		for (let key in url.query)
			_response.write("<p>" + key + url.query[key] + "</p>");
		//die URL wird in response und durch request geschrieben
		console.log(_request.url); //eingegebenen Text auf terminal ausgeben
		_response.end(); //schließt response ab und signalisert dem server, vollständig zu sein
	} //die Funktion wird geschlossen
}

