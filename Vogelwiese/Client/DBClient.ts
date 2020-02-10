namespace Birdsnest {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2a-aufgabe6.herokuapp.com/";

    export function init(_event: Event): void {
        
        let startSearch: HTMLButtonElement = <HTMLButtonElement>document.getElementById("highscore");

        startSearch.addEventListener("click", refresh);
    }


    export function insert(name: string, highscore: number): void {
        let query: string = "command=insert";
        query += "&name=" + name;
        
        query += "&score=" + highscore;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }


    export function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    export function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("Nachricht gesendet antwort: " + xhr.response);
        }
    }

    export function handleFindResponse(_event: ProgressEvent): void { 
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementById("info");
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
}