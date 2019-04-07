/*
Aufgabe: MauMau
Name: Elyssia-Sofie Dürr
Matrikel: 254764
Datum: 07.04.19
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
let karo7 = {
    zahl: "7",
    farbe: "Karo",
};
let herz7 = {
    zahl: "7",
    farbe: "Herz",
};
let pik7 = {
    zahl: "7",
    farbe: "Pik",
};
let kreuz7 = {
    zahl: "7",
    farbe: "Kreuz",
};
let karo8 = {
    zahl: "8",
    farbe: "Karo",
};
let herz8 = {
    zahl: "8",
    farbe: "Herz",
};
let pik8 = {
    zahl: "8",
    farbe: "Pik",
};
let kreuz8 = {
    zahl: "8",
    farbe: "Kreuz",
};
let karo9 = {
    zahl: "9",
    farbe: "Karo",
};
let herz9 = {
    zahl: "9",
    farbe: "Herz",
};
let pik9 = {
    zahl: "9",
    farbe: "Pik",
};
let kreuz9 = {
    zahl: "9",
    farbe: "Kreuz"
};
let karo10 = {
    zahl: "10",
    farbe: "Karo",
};
let herz10 = {
    zahl: "10",
    farbe: "Herz",
};
let pik10 = {
    zahl: "10",
    farbe: "Pik",
};
let kreuz10 = {
    zahl: "10",
    farbe: "Kreuz",
};
let karoBube = {
    zahl: "Bube",
    farbe: "Karo",
};
let herzBube = {
    zahl: "Bube",
    farbe: "Herz",
};
let pikBube = {
    zahl: "Bube",
    farbe: "Pik",
};
let kreuzBube = {
    zahl: "Bube",
    farbe: "Kreuz",
};
let karoDame = {
    zahl: "Dame",
    farbe: "Karo",
};
let herzDame = {
    zahl: "Dame",
    farbe: "Herz",
};
let pikDame = {
    zahl: "Dame",
    farbe: "Pik",
};
let kreuzDame = {
    zahl: "Dame",
    farbe: "Kreuz",
};
let karoKoenig = {
    zahl: "Koenig",
    farbe: "Karo",
};
let herzKoenig = {
    zahl: "Koenig",
    farbe: "Herz",
};
let pikKoenig = {
    zahl: "Koenig",
    farbe: "Pik",
};
let kreuzKoenig = {
    zahl: "Koenig",
    farbe: "Kreuz",
};
let karoAss = {
    zahl: "Ass",
    farbe: "Karo",
};
let herzAss = {
    zahl: "Ass",
    farbe: "Herz",
};
let pikAss = {
    zahl: "Ass",
    farbe: "Pik",
};
let kreuzAss = {
    zahl: "Ass",
    farbe: "Kreuz",
};
let allCards = [karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss, herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];
let ziehStapel = [];
let Hand = [];
let ablagestapel;
let randomCount;
document.addEventListener('DOMContentLoaded', init);
function init() {
    playGame();
}
function playGame() {
    Hand = [];
    ziehStapel = [karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss, herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];
    document.getElementById("Hand").innerHTML = "";
    let HandkartenBeginn = parseInt(prompt("Anzahl der Handkarten eingeben", "..."), 10);
    kartenZiehen(HandkartenBeginn);
    writeStapel();
    //console.log(HandkartenBeginn)
}
//Zufällige Karte ziehen
function kartenZiehen(anzahlKarten) {
    for (let i = 0; i < anzahlKarten; i++) {
        randomCount = Math.floor(Math.random() * ziehStapel.length);
        Hand.push(ziehStapel[randomCount]);
        ziehStapel.splice(randomCount, 1);
        //console.log(Hand[i])
        writeHtml(Hand[i]);
    }
    //Test
    //console.log(Hand)
    //console.log(ziehStapel)
}
function writeHtml(_handKarte) {
    if (_handKarte.farbe == "Karo" || _handKarte.farbe == "Herz") {
        document.getElementById("Hand").innerHTML += `<div class="Handkarte red"><p>${_handKarte.farbe}</p><p>${_handKarte.zahl}</p></div>`;
    }
    else {
        document.getElementById("Hand").innerHTML += `<div class="Handkarte black"><p>${_handKarte.farbe}</p><p>${_handKarte.zahl}</p></div>`;
    }
    document.getElementById("AnzahlHandkarten").innerHTML = `<span id="AnzahlHandkarten">Handkarten: ${Hand.length}</span>`;
}
function writeStapel() {
    randomCount = Math.floor(Math.random() * ziehStapel.length);
    ablagestapel = ziehStapel[randomCount];
    ziehStapel.splice(randomCount, 1);
    document.getElementById("stapel").innerHTML = `<div id="stapel"><div class="Handkarte"><p>Ablagestapel:</p><p>${ablagestapel.farbe}</p><p>${ablagestapel.zahl}</p></div><div class="Handkarte"><p>Ziehstapel:</p><p>${ziehStapel.length}</p></div></div>`;
    console.log(ziehStapel);
}
//# sourceMappingURL=main.js.map