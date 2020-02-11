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
            output.textContent = ""; //Zu Beginn leer
            let playerDataArray = JSON.parse(xhr.response); //Antwort vom Server wird geparst
            for (let i = 0; i < playerDataArray.length; i++) {
                let line = playerDataArray[i].name + " hat eine score von " + playerDataArray[i].playerscore + "." + "\n";
                console.log(line);
                output.textContent += line + "\n";
            }
        }
    }
    Birdsnest.handleFindResponse = handleFindResponse;
})(Birdsnest || (Birdsnest = {}));
//# sourceMappingURL=DBClient.js.map