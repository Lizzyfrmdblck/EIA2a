var Birdsnest;
(function (Birdsnest) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2a-aufgabe6.herokuapp.com/";
    function init(_event) {
        let startSearch = document.getElementById("highscore");
        startSearch.addEventListener("click", refresh);
    }
    Birdsnest.init = init;
    function insert(name, highscore) {
        let query = "command=insert";
        query += "&name=" + name;
        query += "&score=" + highscore;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    Birdsnest.insert = insert;
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    Birdsnest.sendRequest = sendRequest;
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("Nachricht gesendet antwort: " + xhr.response);
        }
    }
    Birdsnest.handleInsertResponse = handleInsertResponse;
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("spanElement");
            output.textContent = "";
            //output.textContent =  ""; //Zu Beginn leer
            let playerDataArray = JSON.parse(xhr.response); //Antwort vom Server wird geparst
            playerDataArray.sort((a, b) => b.playerscore - a.playerscore);
            for (let i = 0; i < playerDataArray.length; i++) {
                //Nur 10 High score elemente anzeigen, dann schleife beenden
                if (i > 10)
                    break;
                let line = "Name: " + playerDataArray[i].name + " Score: " + playerDataArray[i].playerscore;
                output.appendChild(document.createTextNode(line));
                output.appendChild(document.createElement("br"));
                console.log(line);
                //outputsda.textContent += line + "\n";
            }
        }
    }
    Birdsnest.handleFindResponse = handleFindResponse;
})(Birdsnest || (Birdsnest = {}));
//# sourceMappingURL=DBClient.js.map