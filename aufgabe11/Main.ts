namespace Abschlussaufgabe {

    window.addEventListener("DOMContentLoaded", init);
    export let ctx: CanvasRenderingContext2D;
    export let ranfishes: RanFishes[] = [];
    export let playerfish: GameFish = new GameFish();
    export let bubbles: Bubbles[] = [];
    export let getImage: ImageData;

    export let up: boolean = false;
    export let down: boolean = false;
    export let on: boolean = true;
    export let query: string = "";


    export let scoreNumber: number = 0;
    let score: HTMLElement;
    window.addEventListener("keydown", checkKey);

    //Erfassen der HTMLElemente zum bearbeiten in TypeScript

    let upButton: HTMLElement;
    let downButton: HTMLElement;
    let start: HTMLElement;
    let reload: HTMLElement;
    let info: HTMLElement;
    let infoMobile: HTMLElement;


    //Funktion zum Grundaufbau des Programms
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");

        score = document.getElementById("score");
        score.innerText = "Score: 0";

        start = document.getElementById("start");
        reload = document.getElementById("reload");
        info = document.getElementById("info");

        reload.addEventListener("click", reloadClicked);

        canvas.width = 1400;
        canvas.height = 600;

        drawBackground();
        createBubbles();
        //Hintergrund speichern
        getImage = ctx.getImageData(0, 0, 1400, 600);
        createRanFishes();
        setTimeout(animate, 100);

    }

    //Seite neu laden nach Klicken auf Reload-Button nach Game Over
    function reloadClicked(): void {
        location.reload();
    }

    //Funktion kreiert 8 Fische
    function createRanFishes(): void {
        // playerfish = new GameFish();
        for (let i: number = 0; i < 8; i++) {
            let ranFishes: RanFishes = new RanFishes();
            ranfishes.push(ranFishes);
            //console.log(ranFishes);
        }
    }

    //Funktion kreiert 20 Luftblasen, pusht Bubbles in Array 
    function createBubbles(): void {
        for (let i: number = 0; i < 20; i++) {
            let bubble: Bubbles = new Bubbles();
            bubbles.push(bubble);

        }
        //console.log(bubbles);
    }

    //Bewegung des Fisches wird gesteuert
    function checkKey(_event: KeyboardEvent): void {
        _event.preventDefault();
        // Linker Pfeil oder Taste A
        if (_event.keyCode == 37 || _event.keyCode == 65) {
            playerfish.x -= 20;

        }
        // Pfeil hocch oder W
        else if (_event.keyCode == 38 || _event.keyCode == 87) {
            playerfish.y -= 20;
        }
        // Pfeil rechts oder D
        else if (_event.keyCode == 39 || _event.keyCode == 68) {
            playerfish.x += 20;
        }
        // Pfeil runter oder S
        else if (_event.keyCode == 40 || _event.keyCode == 83) {
            playerfish.y += 20;


        }
    }

    function setupAsynchronForm {}
    function touchFish(): void {
        //check ob GameFish x gleich wie RanFish x ist
        for (let i: number = 0; i < ranfishes.length; i++) {
            if (ranfishes[i].x < playerfish.x + 70 && ranfishes[i].x > playerfish.x - 70 && ranfishes[i].y > playerfish.y - 70 && ranfishes[i].y < playerfish.y + 70 && ranfishes[i].ranradius < playerfish.playerradius) {
                playerfish.playerradius += 1;
                ranfishes.splice(i, 1);
                //  ranfishes = new RanFishes();
            }
            else if (ranfishes[i].x < playerfish.x + 70 && ranfishes[i].x > playerfish.x - 70 && ranfishes[i].y > playerfish.y - 70 && ranfishes[i].y < playerfish.y + 70 && ranfishes[i].ranradius > playerfish.playerradius) {
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



    function animate(): void {
        if (on == true) {
            setTimeout(animate, 40);
            ctx.putImageData(getImage, 0, 0);
            playerfish.update();

            //        console.log(fishes.length);
            for (let i: number = 0; i < ranfishes.length; i++) {
                ranfishes[i].move();
                ranfishes[i].drawFish();
            }
            for (let i: number = 0; i < bubbles.length; i++) {
                bubbles[i].moveBubble();
                bubbles[i].drawBubble();

            }
            touchFish();
            //touchBow();
        }
    }




    //Canvas mit gameover-Meldung überschreiben und Reload-Button einblenden
    export function gameOver(): void {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = "25px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("game over", 650, 180);
        reload.style.display = "block";
        on = false;
        let playername: string;
        playername = prompt("Game Over. Trage deinen Namen in die Highscore Liste ein.");



    }
}

