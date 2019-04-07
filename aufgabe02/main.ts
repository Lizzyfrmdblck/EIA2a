/*
Aufgabe: MauMau
Name: Elyssia-Sofie Dürr
Matrikel: 254764
Datum: 07.04.19
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

interface Karten {
    zahl: string;
    farbe: string;
}

let karo7: Karten = {
    zahl: "7",
    farbe: "Karo",
}

let herz7: Karten = {
    zahl: "7",
    farbe: "Herz",
}


let pik7: Karten = {
    zahl: "7",
    farbe: "Pik",
}

let kreuz7: Karten = {
    zahl: "7",
    farbe: "Kreuz",

}
let karo8: Karten = {
    zahl: "8",
    farbe: "Karo",

}
let herz8: Karten = {
    zahl: "8",
    farbe: "Herz",

}
let pik8: Karten = {
    zahl: "8",
    farbe: "Pik",

}
let kreuz8: Karten = {
    zahl: "8",
    farbe: "Kreuz",

}
let karo9: Karten = {
    zahl: "9",
    farbe: "Karo",
}

let herz9: Karten = {
    zahl: "9",
    farbe: "Herz",
}

let pik9: Karten = {
    zahl: "9",
    farbe: "Pik",
}

let kreuz9: Karten = {
    zahl: "9",
    farbe: "Kreuz"
}

let karo10: Karten = {
    zahl: "10",
    farbe: "Karo",

}
let herz10: Karten = {
    zahl: "10",
    farbe: "Herz",

}
let pik10: Karten = {
    zahl: "10",
    farbe: "Pik",

}
let kreuz10: Karten = {
    zahl: "10",
    farbe: "Kreuz",

}
let karoBube: Karten = {
    zahl: "Bube",
    farbe: "Karo",

}
let herzBube: Karten = {
    zahl: "Bube",
    farbe: "Herz",

}
let pikBube: Karten = {
    zahl: "Bube",
    farbe: "Pik",

}
let kreuzBube: Karten = {
    zahl: "Bube",
    farbe: "Kreuz",

}
let karoDame: Karten = {
    zahl: "Dame",
    farbe: "Karo",

}
let herzDame: Karten = {
    zahl: "Dame",
    farbe: "Herz",
}
let pikDame: Karten = {
    zahl: "Dame",
    farbe: "Pik",
}
let kreuzDame: Karten = {
    zahl: "Dame",
    farbe: "Kreuz",
}
let karoKoenig: Karten = {
    zahl: "Koenig",
    farbe: "Karo",
}
let herzKoenig: Karten = {
    zahl: "Koenig",
    farbe: "Herz",
}
let pikKoenig: Karten = {
    zahl: "Koenig",
    farbe: "Pik",
}
let kreuzKoenig: Karten = {
    zahl: "Koenig",
    farbe: "Kreuz",
}
let karoAss: Karten = {
    zahl: "Ass",
    farbe: "Karo",
}
let herzAss: Karten = {
    zahl: "Ass",
    farbe: "Herz",
}
let pikAss: Karten = {
    zahl: "Ass",
    farbe: "Pik",
}
let kreuzAss: Karten = {
    zahl: "Ass",
    farbe: "Kreuz",
}

let allCards: Karten[] = [karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss, herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];
let ziehStapel: Karten[] = [];
let Hand: Karten[] = [];
let ablagestapel: Karten;
let randomCount: number;


document.addEventListener('DOMContentLoaded', init);

function init(): void {
    playGame();
}

function playGame(): void {
    Hand = [];
    ziehStapel = [karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss, herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];

    document.getElementById("Hand").innerHTML = "";
    let HandkartenBeginn: number = parseInt(prompt("Anzahl der Handkarten eingeben", "..."), 10);
    kartenZiehen(HandkartenBeginn);
    writeStapel();

    //console.log(HandkartenBeginn)
}

//Zufällige Karte ziehen
function kartenZiehen(anzahlKarten: number): void {
    for (let i: number = 0; i < anzahlKarten; i++) {
        randomCount = Math.floor(Math.random() * ziehStapel.length);
        Hand.push(ziehStapel[randomCount])
        ziehStapel.splice(randomCount, 1)
      //console.log(Hand[i])
        writeHtml(Hand[i]);
    }
    //Test
    //console.log(Hand)
    //console.log(ziehStapel)
}


function writeHtml(_handKarte: Karten): void {
    
    if (_handKarte.farbe == "Karo" || _handKarte.farbe == "Herz") {
        document.getElementById("Hand").innerHTML += `<div class="Handkarte red"><p>${_handKarte.farbe}</p><p>${_handKarte.zahl}</p></div>`;
    } else {
        document.getElementById("Hand").innerHTML += `<div class="Handkarte black"><p>${_handKarte.farbe}</p><p>${_handKarte.zahl}</p></div>`;
    }
    document.getElementById("AnzahlHandkarten").innerHTML = `<span id="AnzahlHandkarten">Handkarten: ${Hand.length}</span>`
}


function writeStapel(): void {
    randomCount = Math.floor(Math.random() * ziehStapel.length);
    ablagestapel = ziehStapel[randomCount];
    ziehStapel.splice(randomCount, 1)

    document.getElementById("stapel").innerHTML = `<div id="stapel"><div class="Handkarte"><p>Ablagestapel:</p><p>${ablagestapel.farbe}</p><p>${ablagestapel.zahl}</p></div><div class="Handkarte"><p>Ziehstapel:</p><p>${ziehStapel.length}</p></div></div>`;
    
    console.log(ziehStapel)
}