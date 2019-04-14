/*
Aufgabe MauMau Ziehen, Legen, Sortieren
Name: Elyssia-Sofie Dürr
Matrikel:
Datum: 11.11.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe02;
(function (Aufgabe02) {
    document.addEventListener("DOMContentLoaded", listeners);
    document.addEventListener("DOMContentLoaded", init);
    let value = ["7", "8", "9", "10", "bube", "dame", "könig", "ass"];
    let symbol = ["♣", "♠", "♥", "♦"];
    let discard = [];
    let deck = [];
    let handcards = [];
    let place = [];
    function init() {
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < symbol.length; j++) {
                for (let z = 0; z < 2; z++) {
                    let card = { cardValue: value[i], cardSymbol: symbol[j] };
                    deck.push(card);
                }
            }
        }
        //Nutzer gibt gewünschte Anzahl Karten in das Eingabefenster ein. Diese wird in ein 
        //Array umgewandelt, damit gecheckt werden kann, ob sie zwischen 1 und 31 ist.
        let nmbOfCards;
        nmbOfCards = prompt("Mit wie vielen Karten willst Du spielen?");
        if (isNaN(parseInt(nmbOfCards)) || parseInt(nmbOfCards) > 31) {
            //wenn Zahl größer als 31 erneute Aufforderung
            nmbOfCards = prompt("Gib eine Zahl zwischen 1 und 31 ein.");
        }
        else {
            //wenn Zahl 31 oder kleiner, neue Anzeige und Zahl wird in String umgewandelt
            alert("Du spielst mit " + nmbOfCards + " Karten!");
            createHand(parseInt(nmbOfCards));
        }
    }
    //Karten mischeln 
    function createHand(_x) {
        //Parameter x aus Eingabefenster wird übernommen 
        for (let k = _x; k > 0; k--) {
            //x wird zu k
            //neue Schleife wählt zufällige Karte aus Deck-Array aus pusht es in das handcards Array
            //bis k 0 ist 
            let l;
            l = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[l]);
            deck.splice(l, 1);
        }
        displayHand();
        //Handkarten werden angezeigt, siehe Funktin displayHand
    }
    //event listeners werden aktiviert und zugeordnet
    //wieso passiert das Legen bei jedem Tastendruck, nicht nur bei der Leertaste?
    function listeners() {
        console.log("listener");
        document.getElementById("aufnehmen").addEventListener("click", drawCard);
        document.addEventListener("keydown", drawCard);
        document.getElementById("sort").addEventListener("click", sortcards);
    }
    //soll abgelegte Karte in Div anzeigen
    function displayHand() {
        document.getElementById("handCards").innerHTML = "";
        for (let y = 0; y < handcards.length; y++) {
            //  (handcards[y].numbers, handcards[y].colors);
            let card = document.createElement("div");
            let z = String(y);
            card.setAttribute("id", z);
            card.innerText += handcards[y].cardSymbol;
            card.classList.add("Karte");
            card.innerText += " " + handcards[y].cardValue;
            card.classList.add(handcards[y].cardValue);
            document.getElementById("handCards").appendChild(card);
            card.addEventListener("click", playCard);
        }
        console.log(handcards);
    }
    function drawCard() {
        let l = Math.floor(Math.random() * (deck.length - 1));
        handcards.push(deck[l]);
        deck.splice(l, 1);
        displayHand();
    }
    function playCard(_event) {
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        place.push(handcards[index]);
        console.log(index);
        document.getElementById("discard").innerHTML = "";
        let div = document.createElement("div");
        document.getElementById("discard").appendChild(div);
        div.innerHTML = handcards[index].cardValue;
        div.innerHTML = handcards[index].cardSymbol;
        div.classList.add(handcards[index].cardSymbol);
        div.classList.add("handCardStyle");
        handcards.splice(index, 1);
        displayHand();
    }
    //Sorteirt die Handkarten
    function compare(a, b) {
        if (a.cardSymbol > b.cardSymbol) {
            return 1;
        }
        if (a.cardSymbol < b.cardSymbol) {
            return -1;
        }
        if (a.cardValue > b.cardValue) {
            return 1;
        }
        if (a.cardValue < b.cardValue) {
            return -1;
        }
        return 0;
    }
    function sortcards() {
        console.log(handcards);
        handcards.sort(compare);
        console.log(handcards);
        displayHand();
    }
})(Aufgabe02 || (Aufgabe02 = {})); //namespace zu
//# sourceMappingURL=aufgabe03_neu.js.map