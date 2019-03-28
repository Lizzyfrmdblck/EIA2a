/*
Aufgabe 00 Arbeitsfähigkeit herstellen
Name: Elyssia-Sofie Dürr
Matrikel: 
Datum: 07.10.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

function Hallo(): void {
    var name: string;
    name = prompt("Nanu, Wie heisst du denn?");
    var greet: string = "Viel Spaß bei EIA2,";
 var div: HTMLElement = document.getElementById("Greet");
    div.innerHTML = greet + " " + name;
    
 

    // Konsole:
    console.log("Viel Spaß bei EIA2, " + prompt + "!");
}
document.addEventListener('DOMContentLoaded', Hallo);
//# sourceMappingURL=Aufgabe0.js.map
;