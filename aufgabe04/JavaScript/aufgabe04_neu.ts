/*
Aufgabe MauMau Ziehen, Legen, Sortieren
Name: Elyssia-Sofie Dürr
Matrikel: 
Datum: 17.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 
*/

namespace test {
    document.addEventListener("DOMContentLoaded", init);

    // Interface____________________________________________________________________
    interface Card {
        cardValue: string;
        cardSymbol: string;
        cardSort: string;
    }

    // Globale Variablen____________________________________________________________
    let value: string[] = ["07", "08", "09", "10", "bube", "dame", "könig", "ass"];
    let symbol: string[] = ["♣", "♠", "♥", "♦"];
    let discard: Card[] = [];
    let deck: Card[] = [];
    let handcards: Card[] = [];
    let place: Card[] = [];

    // init__________________________________________________________________________
    function init(): void {
        listeners();

        for (let i: number = 0; i < value.length; i++) {
            for (let j: number = 0; j < symbol.length; j++) {
                let sortValue: string = "";
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

                if  ( i < 3 ){
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

                let card: Card = { cardValue: value[i], cardSymbol: symbol[j], cardSort: sortValue };
                deck.push(card);
                
            }
        }
        
        console.log(deck);
        //Nutzer gibt gewünschte Anzahl Karten in das Eingabefenster ein. Diese wird in ein 
        //Array umgewandelt, damit gecheckt werden kann, ob sie zwischen 1 und 31 ist.
        let nmbOfCards: string;
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
    function listeners(): void {
        console.log("install listener");

        document.addEventListener("keydown", checkKey);
        document.getElementById("aufnehmen").addEventListener("click", drawCard);
        document.getElementById("sort").addEventListener("click", sortCards);
    }

    // Karten mischeln____________________________________________________________________ 
    function createHand(_x: number): void {  
        //Parameter x aus Eingabefenster wird übernommen 
        for (let k: number = _x; k > 0; k--) {
            //x wird zu k
            //neue Schleife wählt zufällige Karte aus Deck-Array aus pusht es in das handcards Array
            //bis k 0 ist 
            let l: number;
            l = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[l]);
            deck.splice(l, 1);
        }
        displayHand();
        //Handkarten werden angezeigt, siehe Funktin displayHand
    }

    //soll abgelegte Karte in Div anzeigen

    //__________________________________________________________________________
    function displayHand(): void {
        document.getElementById("handCards").innerHTML = "";
        for (let y: number = 0; y < handcards.length; y++) {
            //  (handcards[y].numbers, handcards[y].colors);
            let card: HTMLDivElement = document.createElement("div");
            let z: string = String(y);
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
    function checkKey(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) {
            drawCard();
        }
    }

    //___________________________________________________________________________________
    function drawCard(): void {
        let zufallszahl: number = Math.floor(Math.random() * (deck.length - 1));
        handcards.push(deck[zufallszahl]);
        deck.splice(zufallszahl, 1);

        displayHand();
    }

    // Karte spielen__________________________________________________________________
    function playCard(_event: MouseEvent): void {
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(clickedCard.id);
        place.push(handcards[index]); 
        console.log(index);

        document.getElementById("discard").innerHTML = "";
        let div: HTMLElement = document.createElement("div");
        document.getElementById("discard").appendChild(div);
        div.innerHTML = handcards[index].cardValue;
        div.innerHTML = handcards[index].cardSymbol;
        div.classList.add(handcards[index].cardSymbol);
        div.classList.add("handCardStyle");
        handcards.splice(index, 1);
        displayHand();
    }

    // Karten sortieren_______________________________________________________________
    function sortCards(): void {
        console.log(handcards);
    
        handcards.sort(rule);
        console.log(handcards);
        displayHand();
    }

    function rule(_a: Card, _b: Card): number {
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
    function compare(_a: Card, _b: Card): number {
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
} //namespace zu