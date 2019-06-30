var seaworld;
(function (seaworld) {
    window.addEventListener("load", init);
    seaworld.fishes = [];
    seaworld.fishes2 = [];
    seaworld.bubbles = [];
    let canvas = document.getElementsByTagName("canvas")[0];
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 414;
        canvas.height = 748;
        seaworld.ctx = canvas.getContext("2d");
        drawBackground2();
        createBubbles();
        //Hintergrund speichern
        seaworld.getImage = seaworld.ctx.getImageData(0, 0, 414, 748);
        createFishes();
        setTimeout(animate, 100);
    }
    //Funktion kreiert 5 Fische
    function createFishes() {
        for (let i = 0; i < 5; i++) {
            let fish = new seaworld.Fishes();
            seaworld.fishes.push(fish);
            console.log(seaworld.fishes);
        }
    }
    //Funktion kreiert 5 Fische
    function createFishes2() {
        for (let i = 0; i < 5; i++) {
            let fish = new seaworld.Fishes2();
            seaworld.fishes2.push(fish);
            console.log(seaworld.fishes2);
        }
    }
    //Funktion kreiert 20 Luftblasen, pusht Bubbles in Array 
    function createBubbles() {
        for (let i = 0; i < 20; i++) {
            let bubble = new seaworld.Bubbles();
            seaworld.bubbles.push(bubble);
        }
        console.log(seaworld.bubbles);
    }
    function animate() {
        setTimeout(animate, 100);
        seaworld.ctx.putImageData(seaworld.getImage, 0, 0);
        //        console.log(fishes.length);
        for (let i = 0; i < seaworld.fishes.length; i++) {
            seaworld.fishes[i].move();
            seaworld.fishes[i].drawFish();
        }
        for (let i = 0; i < seaworld.bubbles.length; i++) {
            seaworld.bubbles[i].moveBubble();
            seaworld.bubbles[i].drawBubble();
        }
    }
    //Wasser und Sand
    function drawBackground2() {
        let gradient;
        seaworld.ctx.beginPath();
        seaworld.ctx.moveTo(1, 1);
        seaworld.ctx.lineTo(414, 1);
        seaworld.ctx.lineTo(414, 734);
        seaworld.ctx.lineTo(1, 734);
        seaworld.ctx.lineTo(1, 1);
        seaworld.ctx.closePath();
        gradient = seaworld.ctx.createLinearGradient(207, 1, 207, 734);
        gradient.addColorStop(0.00, "rgb(42, 170, 225)");
        gradient.addColorStop(1.00, "rgb(16, 113, 185)");
        seaworld.ctx.fillStyle = gradient;
        seaworld.ctx.fill();
        seaworld.ctx.lineWidth = 1.4;
        seaworld.ctx.strokeStyle = "rgb(1, 1, 1)";
        seaworld.ctx.stroke();
        seaworld.ctx.beginPath();
        seaworld.ctx.moveTo(2.2, 548.0);
        seaworld.ctx.bezierCurveTo(2, 548, 219, 489, 413, 548);
        seaworld.ctx.lineTo(413, 733);
        seaworld.ctx.lineTo(2, 733);
        seaworld.ctx.fillStyle = "rgb(229, 202, 144)";
        seaworld.ctx.fill();
        seaworld.ctx.restore();
        for (let i = 0; i < 150; i++) {
            let randX = (Math.random() * (400) + 0);
            let randY = (Math.random() * (120) + 500);
            //zeichnet Algen im vorgegebenen Raum
            drawAlga(randX, randY, 10, 20, "#676765", "#676765");
        }
    }
    //Funktion Alge
    function drawAlga(_x, _y, _w, _h, _fill1, _fill2) {
        seaworld.ctx.save();
        seaworld.ctx.beginPath();
        seaworld.ctx.moveTo(_x + 2.5, _y + 1.0);
        seaworld.ctx.lineTo(_x + 2.3, _y + 0.0);
        seaworld.ctx.lineTo(_x + 2.0, _y + 1.0);
        seaworld.ctx.lineTo(_x + 0.0, _y + 90.0);
        seaworld.ctx.lineTo(_x + 3.5, _y + 90.0);
        seaworld.ctx.lineTo(_x + 2.5, _y + 1.0);
        seaworld.ctx.closePath();
        seaworld.ctx.fillStyle = "rgb(59, 150, 10)";
        seaworld.ctx.strokeStyle = "rgb(66, 244, 113)";
        seaworld.ctx.stroke();
        seaworld.ctx.fill("evenodd");
        seaworld.ctx.restore();
    }
})(seaworld || (seaworld = {}));
//# sourceMappingURL=Main.1.js.map