var Birdsnest;
(function (Birdsnest) {
    //Test123
    window.addEventListener("DOMContentLoaded", init);
    Birdsnest.flakes = [];
    let ranbirds = [];
    Birdsnest.snowballs = [];
    Birdsnest.foodballs = [];
    let scoreNumber;
    Birdsnest.foodNumber = 3;
    Birdsnest.gametime = 0;
    let start;
    let reload;
    let info;
    let score;
    score = document.getElementById("score");
    //Grundaufbau 
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Birdsnest.ctx = canvas.getContext("2d");
        document.addEventListener("mousedown", throwBall);
        document.addEventListener("keydown", throwFood);
        canvas.addEventListener("mousemove", mousemove);
        scoreNumber = 0;
        canvas.width = 800;
        canvas.height = 540;
        Birdsnest.amountfoodball = 3;
        start = document.getElementById("start");
        reload = document.getElementById("reload");
        info = document.getElementById("info");
        reload.addEventListener("click", reloadClicked);
        //Zeichne Hintergrund und kreiere Schneeflocken 
        Birdsnest.drawBackground();
        createFlakes();
        //Hintergrund speichern
        Birdsnest.getImage = Birdsnest.ctx.getImageData(0, 0, 800, 600);
        createRanBirds();
        //createHungryBirds();
        setTimeout(animate, 100);
    }
    function createRanBirds() {
        for (let i = 0; i < 40; i++) {
            // let ranbird: Bird = new Bird();
            ranbirds.push(new Birdsnest.Bird());
            console.log("Vögelz wurden kreiert");
        }
    }
    //Funktion kreiert 20 Schneeflocken, pusht Flakes in Array 
    function createFlakes() {
        for (let i = 0; i < 20; i++) {
            let flake = new Birdsnest.Flake();
            Birdsnest.flakes.push(flake);
            console.log("Flakez wurden kreiert");
        }
    }
    function reloadClicked() {
        location.reload();
    }
    function mousemove(event) {
        Birdsnest.mousex = event.clientX;
        Birdsnest.mousey = event.clientY;
    }
    function throwFood(event) {
        if (Birdsnest.amountfoodball > 0 && Birdsnest.foodballs.length == 0) {
            for (let i = 0; i < 6; i++) {
                //foodball = new FoodBall(((50 * Math.random()) + mousex - 25), (20 * Math.random() + mousey));
                Birdsnest.foodballs.push(new Birdsnest.FoodBall(((50 * Math.random()) + Birdsnest.mousex - 25), (20 * Math.random() + Birdsnest.mousey)));
            }
            //Erstellung EAGLE 
            Birdsnest.amountfoodball -= 1;
            Birdsnest.eagle = new Birdsnest.Eagle(Birdsnest.mousex, 0, Birdsnest.foodballs[Birdsnest.foodballs.length - 1]);
            //eagles.push(eagle);
            Birdsnest.foodNumber -= 1;
        }
    }
    function throwBall(event) {
        //let snowball = new SnowBall(event.clientX, event.clientY - 50);
        Birdsnest.snowballs.push(new Birdsnest.SnowBall(event.clientX, event.clientY - 50));
    }
    function gameOver() {
        Birdsnest.ctx.fillStyle = "#000000";
        Birdsnest.ctx.fillRect(0, 0, Birdsnest.ctx.canvas.width, Birdsnest.ctx.canvas.height);
        Birdsnest.ctx.font = "25px Arial";
        Birdsnest.ctx.fillStyle = "#FFFFFF";
        Birdsnest.ctx.fillText("GAME OVER - Maybe next time", 650, 180);
        reload.style.display = "block";
        Birdsnest.playername = prompt("Die Zeit ist vorbei. Gib deinen Namen an um ihn in der Bestenliste zu speichern.");
        if (Birdsnest.playername != null || Birdsnest.playername != "") {
            Birdsnest.insert(Birdsnest.playername, scoreNumber);
        }
    }
    Birdsnest.gameOver = gameOver;
    function animate() {
        Birdsnest.ctx.putImageData(Birdsnest.getImage, 0, 0);
        Birdsnest.ctx.fillText("Dein Score: " + scoreNumber.toString(), 20, 30);
        Birdsnest.ctx.fillText("Futter: " + Birdsnest.foodNumber.toString(), 100, 30);
        if (Birdsnest.gametime < 2000) {
            for (let i = 0; i < Birdsnest.foodballs.length; i++) {
                Birdsnest.foodballs[i].drawBall();
                if (Birdsnest.foodballs[i].x < 320 && Birdsnest.foodballs[i].y < 455) {
                    Birdsnest.foodballs[i].move();
                }
                if (Birdsnest.foodballs[i].x >= 320 && Birdsnest.foodballs[i].y < 500) {
                    Birdsnest.foodballs[i].move();
                }
                if (Birdsnest.foodballs[i].y >= 450) {
                    Birdsnest.foodballs[i].scale();
                }
                if (Birdsnest.foodballs[i].foodradius < 1) {
                    Birdsnest.foodballs.splice(i, 6);
                    console.log("FOODRADIUS GELÖSCHT");
                }
            }
            if (Birdsnest.eagle != null) {
                Birdsnest.eagle.flyEagle();
            }
            for (let i = 0; i < ranbirds.length; i++) {
                if (Birdsnest.foodballs.length == 0) {
                    ranbirds[i].move();
                }
                if (Birdsnest.foodballs.length > 0) {
                    ranbirds[i].checkDistance(Birdsnest.foodballs[Birdsnest.foodballs.length - 1]);
                }
                ranbirds[i].draw();
            }
            for (let i = 0; i < Birdsnest.flakes.length; i++) {
                Birdsnest.flakes[i].moveFlake();
            }
            for (let i = 0; i < Birdsnest.snowballs.length; i++) {
                if (Birdsnest.snowballs[i].y > Birdsnest.ctx.canvas.height) {
                    Birdsnest.snowballs.splice(i, 1);
                }
                else {
                    Birdsnest.snowballs[i].draw();
                    Birdsnest.snowballs[i].move();
                    Birdsnest.snowballs[i].scale();
                    scoreNumber += Birdsnest.snowballs[i].eliminateBird(ranbirds);
                    if (Birdsnest.eagle != null) {
                        scoreNumber += Birdsnest.snowballs[i].eliminateEagle(Birdsnest.eagle);
                    }
                }
            }
            setTimeout(animate, 20);
            Birdsnest.gametime++;
        }
        else {
            gameOver();
        }
    }
})(Birdsnest || (Birdsnest = {}));
//# sourceMappingURL=main.js.map