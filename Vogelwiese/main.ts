

namespace Birdsnest {

//Test123

    window.addEventListener("DOMContentLoaded", init);
    export let ctx: CanvasRenderingContext2D;
    export let flakes: Flake[] = [];
    export let amountfoodball: number;

    let ranbirds: Bird[] = [];
    export let snowballs: SnowBall[] = [];
    export let foodballs: FoodBall[] = [];
    export let eagle: Eagle;
   
   
    let scoreNumber: number;
    
    export let getImage: ImageData;
    export let playername: string;
    export let foodNumber: number = 3;
    export let gametime: number = 0;
    export let mousex: number;
    export let mousey: number;
    export let onefood: number;

    let start: HTMLElement;
    let reload: HTMLElement;
    let info: HTMLElement;
    let score: HTMLElement;


    
    

    score = <HTMLElement>document.getElementById("score");

   



    //Funktion zum Grundaufbau des Programms
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");
        document.addEventListener("mousedown", throwBall);
        document.addEventListener("keydown", throwFood);
        canvas.addEventListener("mousemove", mousemove);

        scoreNumber = 0;

        canvas.width = 800;
        canvas.height = 540;
        amountfoodball = 3;

        start = document.getElementById("start");
        reload = document.getElementById("reload");
        info = document.getElementById("info");

        reload.addEventListener("click", reloadClicked);


        //Zeichne Hintergrund und kreiere Schneeflocken 
        drawBackground();
        createFlakes();

        //Hintergrund speichern
        getImage = ctx.getImageData(0, 0, 800, 600);


        createRanBirds();
        //createHungryBirds();
        setTimeout(animate, 100);

    }

    function createRanBirds(): void {
        for (let i: number = 0; i < 40; i++) {
           // let ranbird: Bird = new Bird();
            ranbirds.push(new Bird());
            console.log("Vögelz wurden kreiert");
        }
    }


    //Funktion kreiert 20 Schneeflocken, pusht Flakes in Array 
    function createFlakes(): void {
        for (let i: number = 0; i < 20; i++) {
            let flake: Flake = new Flake();
            flakes.push(flake);
            console.log("Flakez wurden kreiert");
        }}

 
    function reloadClicked(): void {
        location.reload();
    }

    function mousemove (event: MouseEvent): void {
        mousex = event.clientX;
        mousey = event.clientY;
       
    }

    
    function throwFood(event: KeyboardEvent): void {
        
        if (amountfoodball > 0 && foodballs.length == 0 ) {

            for (let i: number = 0; i < 6; i++) {
                
                //foodball = new FoodBall(((50 * Math.random()) + mousex - 25), (20 * Math.random() + mousey));
        
                foodballs.push(new FoodBall(((50 * Math.random()) + mousex - 25), (20 * Math.random() + mousey)));
            }

            //Erstellung EAGLE 
            amountfoodball -= 1; 
            eagle = new Eagle(mousex, 0, foodballs[foodballs.length - 1]);
            //eagles.push(eagle);
            foodNumber -= 1;

        }
    }
        
    function throwBall(event: MouseEvent): void {
        //let snowball = new SnowBall(event.clientX, event.clientY - 50);
        snowballs.push(new SnowBall(event.clientX, event.clientY - 50));
    } 

    export function gameOver(): void {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = "25px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("GAME OVER - Maybe next time", 650, 180);
        reload.style.display = "block";
        
        playername = prompt("Die Zeit ist vorbei. Gib deinen Namen an um ihn in der Bestenliste zu speichern.");

        if(playername != ""){
            insert(playername, scoreNumber);
        }

    }
    
    
    function animate(): void {

        ctx.putImageData(getImage, 0, 0);
        ctx.fillText("Dein Score: " + scoreNumber.toString(), 20, 30);
        ctx.fillText("Futter: " + foodNumber.toString(), 100, 30);

        if (gametime < 500) {
            for (let i: number = 0; i < foodballs.length; i++) {
                foodballs[i].drawBall();
                if (foodballs[i].x < 320 && foodballs[i].y < 455) {
                    foodballs[i].move();
                }
                if (foodballs[i].x >= 320 && foodballs[i].y < 500) {
                    foodballs[i].move();                
                }
                if (foodballs[i].y >= 450) {
                    foodballs[i].scale();
                }
                if (foodballs[i].foodradius < 1) {
                    foodballs.splice(i, 6);
                    console.log("FOODRADIUS GELÖSCHT");
                }
            }

            if (eagle != null) {
                eagle.flyEagle();
                
            }
           
            
            for (let i: number = 0; i < ranbirds.length; i++) {
                
                if (foodballs.length == 0) {
                    ranbirds[i].move();
                }
                if (foodballs.length > 0) {
                    ranbirds[i].checkDistance(foodballs[foodballs.length - 1]);
                 }
                
                ranbirds[i].draw();
            }
            
            for (let i: number = 0; i < flakes.length; i++) {
                flakes[i].moveFlake();
            }

            for (let i: number = 0; i < snowballs.length; i++) {
                if (snowballs[i].y > ctx.canvas.height) {
                    snowballs.splice(i, 1);

                } else {  
                    snowballs[i].draw();
                    snowballs[i].move();
                    snowballs[i].scale();
                    scoreNumber += snowballs[i].eliminateBird(ranbirds);
                    if (eagle != null) {
                        scoreNumber += snowballs[i].eliminateEagle(eagle);
                    }
                }
            }
            
            
            setTimeout(animate, 20);
            gametime ++;

        }

        else {

        gameOver(); }


}
}

