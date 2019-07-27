var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2a-aufgabe6.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("send");
        let startSearch = document.getElementById("highscore");
        insertButton.addEventListener("click", insert);
        startSearch.addEventListener("click", suche);
    }
    function insert(_event) {
        let query = "command=insert";
        query += "&name=" + Abschlussaufgabe.playername;
        query += "&score=" + Abschlussaufgabe.scoreNumber;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function suche(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=search";
        query += "&suche=" + inputs[3].value;
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=DBClient.js.map