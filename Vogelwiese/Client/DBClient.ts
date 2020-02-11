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

    interface PlayerData {
        name: string;
        playerscore: number;
    }

    export function handleFindResponse(_event: ProgressEvent): void { 
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLSpanElement = document.getElementById("spanElement");
            
            
            output.textContent =  ""; //Zu Beginn leer

            let playerDataArray: PlayerData[] = JSON.parse(xhr.response); //Antwort vom Server wird geparst

            for (let i: number = 0; i < playerDataArray.length; i++) {


                let line: string = playerDataArray[i].name + " hat eine score von " + playerDataArray[i].playerscore + "." + "\n"; 

                console.log(line);
                output.textContent += line + "\n";
             }
            

        }
    }
}