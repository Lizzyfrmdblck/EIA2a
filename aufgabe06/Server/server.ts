import * as Http from "http";

namespace eisdealer_server {
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

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
		console.log("I hear voices!");
        //Der Text vom Request soll im Terminal erscheinen (A2.4)
        console.log(_request.url);
		_response.setHeader("content-type", "text/html; charset=utf-8");
		_response.setHeader("Access-Control-Allow-Origin", "*");

		_response.write(_request.url);

		_response.end();
	}
}

