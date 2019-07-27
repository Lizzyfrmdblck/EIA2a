var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("DOMContentLoaded", init);
    Abschlussaufgabe.ranfishes = [];
    Abschlussaufgabe.playerfish = new Abschlussaufgabe.GameFish();
    Abschlussaufgabe.bubbles = [];
    Abschlussaufgabe.up = false;
    Abschlussaufgabe.down = false;
    Abschlussaufgabe.on = true;
    Abschlussaufgabe.query = "";
    Abschlussaufgabe.scoreNumber = 0;
    let score;
    window.addEventListener("keydown", checkKey);
    //Erfassen der HTMLElemente zum bearbeiten in TypeScript
    let upButton;
    let downButton;
    let start;
    let reload;
    let info;
    let infoMobile;
    //Funktion zum Grundaufbau des Programms
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.ctx = canvas.getContext("2d");
        score = document.getElementById("score");
        score.innerText = "Score: 0";
        start = document.getElementById("start");
        reload = document.getElementById("reload");
        info = document.getElementById("info");
        reload.addEventListener("click", reloadClicked);
        canvas.width = 1400;
        canvas.height = 600;
        Abschlussaufgabe.drawBackground();
        createBubbles();
        //Hintergrund speichern
        Abschlussaufgabe.getImage = Abschlussaufgabe.ctx.getImageData(0, 0, 1400, 600);
        createRanFishes();
        setTimeout(animate, 100);
    }
    //Seite neu laden nach Klicken auf Reload-Button nach Game Over
    function reloadClicked() {
        location.reload();
    }
    //Funktion kreiert 8 Fische
    function createRanFishes() {
        // playerfish = new GameFish();
        for (let i = 0; i < 8; i++) {
            let ranFishes = new Abschlussaufgabe.RanFishes();
            Abschlussaufgabe.ranfishes.push(ranFishes);
            //console.log(ranFishes);
        }
    }
    //Funktion kreiert 20 Luftblasen, pusht Bubbles in Array 
    function createBubbles() {
        for (let i = 0; i < 20; i++) {
            let bubble = new Abschlussaufgabe.Bubbles();
            Abschlussaufgabe.bubbles.push(bubble);
        }
        //console.log(bubbles);
    }
    //Bewegung des Fisches wird gesteuert
    function checkKey(_event) {
        _event.preventDefault();
        // Linker Pfeil oder Taste A
        if (_event.keyCode == 37 || _event.keyCode == 65) {
            Abschlussaufgabe.playerfish.x -= 20;
        }
        // Pfeil hocch oder W
        else if (_event.keyCode == 38 || _event.keyCode == 87) {
            Abschlussaufgabe.playerfish.y -= 20;
        }
        // Pfeil rechts oder D
        else if (_event.keyCode == 39 || _event.keyCode == 68) {
            Abschlussaufgabe.playerfish.x += 20;
        }
        // Pfeil runter oder S
        else if (_event.keyCode == 40 || _event.keyCode == 83) {
            Abschlussaufgabe.playerfish.y += 20;
        }
    }
    function setupAsynchronForm() { }
    function touchFish() {
        //check ob GameFish x gleich wie RanFish x ist
        for (let i = 0; i < Abschlussaufgabe.ranfishes.length; i++) {
            if (Abschlussaufgabe.ranfishes[i].x < Abschlussaufgabe.playerfish.x + 70 && Abschlussaufgabe.ranfishes[i].x > Abschlussaufgabe.playerfish.x - 70 && Abschlussaufgabe.ranfishes[i].y > Abschlussaufgabe.playerfish.y - 70 && Abschlussaufgabe.ranfishes[i].y < Abschlussaufgabe.playerfish.y + 70 && Abschlussaufgabe.ranfishes[i].ranradius < Abschlussaufgabe.playerfish.playerradius) {
                Abschlussaufgabe.playerfish.playerradius += 1;
                Abschlussaufgabe.ranfishes.splice(i, 1);
                //  ranfishes = new RanFishes();
            }
            else if (Abschlussaufgabe.ranfishes[i].x < Abschlussaufgabe.playerfish.x + 70 && Abschlussaufgabe.ranfishes[i].x > Abschlussaufgabe.playerfish.x - 70 && Abschlussaufgabe.ranfishes[i].y > Abschlussaufgabe.playerfish.y - 70 && Abschlussaufgabe.ranfishes[i].y < Abschlussaufgabe.playerfish.y + 70 && Abschlussaufgabe.ranfishes[i].ranradius > Abschlussaufgabe.playerfish.playerradius) {
                //ranfishes[i].ranradius > playerfish.playerradius) 
                console.log("Hallo");
                gameOver();
            }
        }
    }
    /* function touchBow(): void {
 
         document.getElementById("score").innerHTML = "";
 
         //checkt ob Playerfisch durch x = 1000 und y zw. 500 und 600 schwimmt
         let r: number = 1000;
             if (r =< playerfish.x + 100 && r =< playerfish.x - 100 && 500 => playerfish.y - 100 && 500 => playerfish.y + 100) {
                 score.innerText += " " + 10;
             
             }
 
 
         
     } */
    function animate() {
        if (Abschlussaufgabe.on == true) {
            setTimeout(animate, 40);
            Abschlussaufgabe.ctx.putImageData(Abschlussaufgabe.getImage, 0, 0);
            Abschlussaufgabe.playerfish.update();
            //        console.log(fishes.length);
            for (let i = 0; i < Abschlussaufgabe.ranfishes.length; i++) {
                Abschlussaufgabe.ranfishes[i].move();
                Abschlussaufgabe.ranfishes[i].drawFish();
            }
            for (let i = 0; i < Abschlussaufgabe.bubbles.length; i++) {
                Abschlussaufgabe.bubbles[i].moveBubble();
                Abschlussaufgabe.bubbles[i].drawBubble();
            }
            touchFish();
            //touchBow();
        }
    }
    //Canvas mit gameover-Meldung überschreiben und Reload-Button einblenden
    function gameOver() {
        Abschlussaufgabe.ctx.fillStyle = "#000000";
        Abschlussaufgabe.ctx.fillRect(0, 0, Abschlussaufgabe.ctx.canvas.width, Abschlussaufgabe.ctx.canvas.height);
        Abschlussaufgabe.ctx.font = "25px Arial";
        Abschlussaufgabe.ctx.fillStyle = "#FFFFFF";
        Abschlussaufgabe.ctx.fillText("game over", 650, 180);
        reload.style.display = "block";
        Abschlussaufgabe.on = false;
        let playername;
        playername = prompt("Game Over. Trage deinen Namen in die Highscore Liste ein.");
    }
    Abschlussaufgabe.gameOver = gameOver;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Main.js.map