/*
Aufgabe MauMau Ziehen, Legen, Sortieren
Name: Elyssia-Sofie Dürr
Matrikel:
Datum: 17.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var test;
(function (test) {
    document.addEventListener("DOMContentLoaded", init);
    // Globale Variablen____________________________________________________________
    let value = ["07", "08", "09", "10", "bube", "dame", "könig", "ass"];
    let symbol = ["♣", "♠", "♥", "♦"];
    let discard = [];
    let deck = [];
    let handcards = [];
    let place = [];
    // init__________________________________________________________________________
    function init() {
        listeners();
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < symbol.length; j++) {
                let sortValue = "";
                switch (symbol[j]) {
                    case "♣":
                        sortValue = "kr";
                        break;
                    case "♠":
                        sortValue = "pi";
                        break;
                    case "♥":
                        sortValue = "he";
                        break;
                    case "♦":
                        sortValue = "ka";
                        break;
                    default: break;
                }
                if (i < 3) {
                    switch (value[i]) {
                        case "bube":
                            sortValue += "11";
                            break;
                        case "dame":
                            sortValue += "12";
                            break;
                        case "könig":
                            sortValue += "13";
                            break;
                        case "ass":
                            sortValue += "14";
                            break;
                        default: break;
                    }
                }
                else {
                    sortValue += value[i];
                }
                console.log(sortValue);
                let card = { cardValue: value[i], cardSymbol: symbol[j], cardSort: sortValue };
                deck.push(card);
            }
        }
        console.log(deck);
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
    // EventListener installieren___________________________________________________
    function listeners() {
        console.log("install listener");
        document.addEventListener("keydown", checkKey);
        document.getElementById("aufnehmen").addEventListener("click", drawCard);
        document.getElementById("sort").addEventListener("click", sortCards);
    }
    // Karten mischeln____________________________________________________________________ 
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
    //soll abgelegte Karte in Div anzeigen
    //__________________________________________________________________________
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
    // Keyevent prüfen ob Leertaste______________________________________________________
    function checkKey(_event) {
        if (_event.keyCode == 32) {
            drawCard();
        }
    }
    //___________________________________________________________________________________
    function drawCard() {
        let zufallszahl = Math.floor(Math.random() * (deck.length - 1));
        handcards.push(deck[zufallszahl]);
        deck.splice(zufallszahl, 1);
        displayHand();
    }
    // Karte spielen__________________________________________________________________
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
    // Karten sortieren_______________________________________________________________
    function sortCards() {
        console.log(handcards);
        handcards.sort(rule);
        console.log(handcards);
        displayHand();
    }
    function rule(_a, _b) {
        var cardA = _a.cardSort;
        var cardB = _b.cardSort;
        if (cardA < cardB) {
            return -1;
        }
        if (cardA > cardB) {
            return 1;
        }
        // Namen müssen gleich sein
        return 0;
    }
    // Sortierregeln__________________________________________________________________
    function compare(_a, _b) {
        if (_a.cardSymbol > _b.cardSymbol) {
            //vergleicht karte a mit karte b und wenn das symbol von a 
            //im array weiter hinten steht als das symbol von karte b, 
            //wird der rückgabewert = 1, d.h. die größere karte kommt rechts von der kleineren
            return 1;
        }
        if (_a.cardSymbol < _b.cardSymbol) {
            //vergleicht karte a mit karte b und wenn das symbol von a 
            //im array weiter vorne steht als das symbol von karte b, 
            //wird der rückgabewert = -1, d.h. die kleinere karte kommt links von der größeren
            return -1;
        }
        if (_a.cardValue > _b.cardValue) {
            //vergleicht karte a mit karte b und wenn der wert von a 
            //im array weiter hinten steht als der wert von karte b, 
            //wird der rückgabewert = 1, d.h. die höhere karte kommt rechts von der niedrigeren
            return 1;
        }
        if (_a.cardValue < _b.cardValue) {
            //vergleicht karte a mit karte b und wenn das symbol von a 
            //im array weiter vorne steht als das symbol von karte b, 
            //wird der rückgabewert = -1, d.h. die niedrigere karte kommt links von der höheren
            return -1;
        }
        return 0;
    }
})(test || (test = {})); //namespace zu
//# sourceMappingURL=aufgabe04_neu.js.map