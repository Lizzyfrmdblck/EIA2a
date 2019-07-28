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
    export let playername: string;

    let url: string = "https://eia2a-aufgabe6.herokuapp.com/?";



    export let scoreNumber: number = 0;
    window.addEventListener("keydown", checkKey);

    //Erfassen der HTMLElemente zum bearbeiten in TypeScript

  
    let start: HTMLElement;
    let reload: HTMLElement;
    let info: HTMLElement;
    let score: HTMLElement;

    score = <HTMLElement>document.getElementById("score");

  


    //Funktion zum Grundaufbau des Programms
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");


        start = document.getElementById("start");
        reload = document.getElementById("reload");
        info = document.getElementById("info");

        document.getElementById("send").addEventListener("click", sendData);
        //document.getElementById("highscore").addEventListener("click", getData);


        
        
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

    function sendData(): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", url, true);
        console.log(query);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
   
    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("submitÜbersicht").innerHTML = xhr.response;
        }
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

    //function setupAsynchronForm { }
    function touchFish(): void {
        //check ob GameFish x gleich wie RanFish x ist
        for (let i: number = 0; i < ranfishes.length; i++) {
            if (ranfishes[i].x < playerfish.x + 70 && ranfishes[i].x > playerfish.x - 70 && ranfishes[i].y > playerfish.y - 70 && ranfishes[i].y < playerfish.y + 70 && ranfishes[i].ranradius < playerfish.playerradius) {
                playerfish.playerradius += 1;
                ranfishes.splice(i, 1);
                scoreNumber += 5;
               
                let nf: RanFishes = new RanFishes();
                ranfishes.push(nf); 
            }
            else if (ranfishes[i].x < playerfish.x + 70 && ranfishes[i].x > playerfish.x - 70 && ranfishes[i].y > playerfish.y - 70 && ranfishes[i].y < playerfish.y + 70 && ranfishes[i].ranradius > playerfish.playerradius) {
                //ranfishes[i].ranradius > playerfish.playerradius) 
                console.log("Hallo");
                gameOver();
            }


        }
    }

    function touchBow(): void {
 
         document.getElementById("score").innerHTML = "";
 
         //checkt ob Playerfisch durch x = 1000 und y zw. 500 und 600 schwimmt 
           
             if (playerfish.x < 1050 && playerfish.x > 1000 && playerfish.y > 450 && playerfish.y < 500)
             scoreNumber += 5;
  
     } 



    function animate(): void {
        

        if (on == true) {

            setTimeout(animate, 40);
            ctx.putImageData(getImage, 0, 0);
            ctx.fillStyle = "white";
            ctx.font = "100px Arial";
            ctx.fillText(scoreNumber.toString(), 200, 100);

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
            touchBow();
            
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
        
        playername = prompt("Game Over. Trage deinen Namen in die Highscore Liste ein und drück auf Abschicken.");



    }
}

