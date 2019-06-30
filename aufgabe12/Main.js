var foodporn;
(function (foodporn) {
    window.addEventListener("load", init);
    foodporn.fishes = [];
    foodporn.fishes2 = [];
    foodporn.bubbles = [];
    let canvas = document.getElementsByTagName("canvas")[0];
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 414;
        canvas.height = 748;
        foodporn.ctx = canvas.getContext("2d");
        drawBackground2();
        createBubbles();
        //EventListener
        canvas.addEventListener("click", clickFeed);
        //Hintergrund speichern
        foodporn.getImage = foodporn.ctx.getImageData(0, 0, 414, 748);
        createFishes();
        setTimeout(animate, 100);
    }
    //Funktion kreiert 5 Fische
    function createFishes() {
        for (let i = 0; i < 5; i++) {
            let fish = new Fishes();
            foodporn.fishes.push(fish);
            console.log(foodporn.fishes);
        }
    }
    //Funktion kreiert 5 Fische
    function createFishes2() {
        for (let i = 0; i < 5; i++) {
            let fish = new Fishes2();
            foodporn.fishes2.push(fish);
            console.log(foodporn.fishes2);
        }
    }
    //Funktion kreiert 20 Luftblasen, pusht Bubbles in Array 
    function createBubbles() {
        for (let i = 0; i < 20; i++) {
            let bubble = new Bubbles();
            foodporn.bubbles.push(bubble);
        }
        console.log(foodporn.bubbles);
    }
    function animate() {
        setTimeout(animate, 100);
        foodporn.ctx.putImageData(foodporn.getImage, 0, 0);
        //        console.log(fishes.length);
        for (let i = 0; i < foodporn.fishes.length; i++) {
            foodporn.fishes[i].move();
            foodporn.fishes[i].drawFish();
        }
        for (let i = 0; i < foodporn.bubbles.length; i++) {
            foodporn.bubbles[i].moveBubble();
            foodporn.bubbles[i].drawBubble();
        }
    }
    //Wasser und Sand
    function drawBackground2() {
        let gradient;
        foodporn.ctx.beginPath();
        foodporn.ctx.moveTo(1, 1);
        foodporn.ctx.lineTo(414, 1);
        foodporn.ctx.lineTo(414, 734);
        foodporn.ctx.lineTo(1, 734);
        foodporn.ctx.lineTo(1, 1);
        foodporn.ctx.closePath();
        gradient = foodporn.ctx.createLinearGradient(207, 1, 207, 734);
        gradient.addColorStop(0.00, "rgb(42, 170, 225)");
        gradient.addColorStop(1.00, "rgb(16, 113, 185)");
        foodporn.ctx.fillStyle = gradient;
        foodporn.ctx.fill();
        foodporn.ctx.lineWidth = 1.4;
        foodporn.ctx.strokeStyle = "rgb(1, 1, 1)";
        foodporn.ctx.stroke();
        foodporn.ctx.beginPath();
        foodporn.ctx.moveTo(2.2, 548.0);
        foodporn.ctx.bezierCurveTo(2, 548, 219, 489, 413, 548);
        foodporn.ctx.lineTo(413, 733);
        foodporn.ctx.lineTo(2, 733);
        foodporn.ctx.fillStyle = "rgb(229, 202, 144)";
        foodporn.ctx.fill();
        foodporn.ctx.restore();
        for (let i = 0; i < 150; i++) {
            let randX = (Math.random() * (400) + 0);
            let randY = (Math.random() * (120) + 500);
            //zeichnet Algen im vorgegebenen Raum
            drawAlga(randX, randY, 10, 20, "#676765", "#676765");
        }
    }
    //Funktion Alge
    function drawAlga(_x, _y, _w, _h, _fill1, _fill2) {
        foodporn.ctx.save();
        foodporn.ctx.beginPath();
        foodporn.ctx.moveTo(_x + 2.5, _y + 1.0);
        foodporn.ctx.lineTo(_x + 2.3, _y + 0.0);
        foodporn.ctx.lineTo(_x + 2.0, _y + 1.0);
        foodporn.ctx.lineTo(_x + 0.0, _y + 90.0);
        foodporn.ctx.lineTo(_x + 3.5, _y + 90.0);
        foodporn.ctx.lineTo(_x + 2.5, _y + 1.0);
        foodporn.ctx.closePath();
        foodporn.ctx.fillStyle = "rgb(59, 150, 10)";
        foodporn.ctx.strokeStyle = "rgb(66, 244, 113)";
        foodporn.ctx.stroke();
        foodporn.ctx.fill("evenodd");
        foodporn.ctx.restore();
    }
    //Food
    function clickFeed(_event) {
        let xPos = _event.clientX;
        let yPos = _event.clientY;
        xPos -= 10;
        yPos -= 75;
        let n = 1 + Math.floor(Math.random() * 5);
        for (let i = 0; i < n; i++) {
            let rndm = Math.floor(Math.random() * foodColors.length);
            let food = new foodporn.Foods(xPos, yPos, foodColors[rndm]);
            movingObjects.push(food);
        }
    }
})(foodporn || (foodporn = {}));
//# sourceMappingURL=Main.js.map