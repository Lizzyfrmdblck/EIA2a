var Birdsnest;
(function (Birdsnest) {
    /* interface Vector {
        x: number;
        y: number;

    }*/
    // Background
    function drawBackground() {
        drawSky("#5882FA", 600, 800); //Wo isch meine Sonne?
        drawSun(400, 450);
        drawMountains2("#white", 0, 0);
        drawMountains1("#CEF6F5", 0, 0);
        drawGround("#0E6E40", 600, 800);
        drawHouse(150, 450);
        drawTree();
    }
    Birdsnest.drawBackground = drawBackground;
    // Sky
    function drawSky(_c1, _x, _y) {
        Birdsnest.ctx.beginPath();
        Birdsnest.ctx.rect(0, 0, 800, 600);
        Birdsnest.ctx.strokeStyle = _c1;
        Birdsnest.ctx.stroke();
        Birdsnest.ctx.fillStyle = _c1;
        Birdsnest.ctx.fill();
    }
    Birdsnest.drawSky = drawSky;
    // Boden
    function drawGround(_c1, _x, _y) {
        Birdsnest.ctx.beginPath();
        Birdsnest.ctx.rect(0, 400, 800, 200);
        Birdsnest.ctx.strokeStyle = _c1;
        Birdsnest.ctx.stroke();
        Birdsnest.ctx.fillStyle = _c1;
        Birdsnest.ctx.fill();
    }
    Birdsnest.drawGround = drawGround;
    //vogelhaus 
    function drawHouse(x, y) {
        let r1 = 25;
        let colorHouse = "#4F1124";
        let colorPlatform = "#5D1236";
        let colorHole = "black";
        let colorInHouse = "#AD1746";
        Birdsnest.ctx.save();
        Birdsnest.ctx.translate(x, y);
        Birdsnest.ctx.fillStyle = colorHouse;
        Birdsnest.ctx.fillRect(-25, 0, 50, 175);
        Birdsnest.ctx.fillRect(0, 23, 175, 45);
        Birdsnest.ctx.fillRect(0, 23, -175, 45);
        Birdsnest.ctx.beginPath();
        Birdsnest.ctx.moveTo(-175, 25);
        Birdsnest.ctx.lineTo(-125, -25);
        Birdsnest.ctx.lineTo(125, -25);
        Birdsnest.ctx.lineTo(175, 25);
        Birdsnest.ctx.closePath();
        Birdsnest.ctx.fillStyle = colorPlatform;
        Birdsnest.ctx.fill();
        Birdsnest.ctx.beginPath();
        Birdsnest.ctx.moveTo(175, 25);
        Birdsnest.ctx.lineTo(600, 600);
        Birdsnest.ctx.lineTo(600, 600);
        Birdsnest.ctx.closePath();
        Birdsnest.ctx.fillStyle = colorHouse;
        Birdsnest.ctx.fill();
        Birdsnest.ctx.beginPath();
        Birdsnest.ctx.moveTo(-100, 0);
        Birdsnest.ctx.lineTo(-120, -150);
        Birdsnest.ctx.lineTo(0, -225);
        Birdsnest.ctx.lineTo(120, -150);
        Birdsnest.ctx.lineTo(100, 0);
        Birdsnest.ctx.closePath();
        Birdsnest.ctx.fillStyle = colorInHouse;
        Birdsnest.ctx.fill();
        Birdsnest.ctx.beginPath();
        Birdsnest.ctx.arc(0, -75, r1, 0, 2 * Math.PI);
        Birdsnest.ctx.closePath();
        Birdsnest.ctx.stroke();
        Birdsnest.ctx.fillStyle = colorHole;
        Birdsnest.ctx.fill();
        Birdsnest.ctx.restore();
    }
    Birdsnest.drawHouse = drawHouse;
    //Sun
    function drawSun(_x, _y) {
        Birdsnest.ctx.beginPath();
        Birdsnest.ctx.arc(400, 260, 100, 0, 2 * Math.PI);
        Birdsnest.ctx.fillStyle = "#F4FA58";
        Birdsnest.ctx.fill();
        Birdsnest.ctx.strokeStyle = "#F7FE2E";
        Birdsnest.ctx.stroke();
        Birdsnest.ctx.closePath();
    }
    Birdsnest.drawSun = drawSun;
    // BERGE
    function drawMountains1(_c1, _x, _y) {
        Birdsnest.ctx.beginPath();
        Birdsnest.ctx.moveTo(_x, _y + 300);
        Birdsnest.ctx.lineTo(_x + 100, _y + 320); //1
        Birdsnest.ctx.lineTo(_x + 150, _y + 300); //2 
        Birdsnest.ctx.lineTo(_x + 300, _y + 250); //3
        Birdsnest.ctx.lineTo(_x + 360, _y + 300); //4
        Birdsnest.ctx.lineTo(_x + 400, _y + 250); //5
        Birdsnest.ctx.lineTo(_x + 450, _y + 300); //6
        Birdsnest.ctx.lineTo(_x + 520, _y + 200); //7
        Birdsnest.ctx.lineTo(_x + 600, _y + 300); //8
        Birdsnest.ctx.lineTo(_x + 700, _y + 250); //9
        Birdsnest.ctx.lineTo(_x + 750, _y + 300); //10
        Birdsnest.ctx.lineTo(_x + 800, _y + 300); //10
        Birdsnest.ctx.lineTo(_x + 800, _y + 600); //11
        Birdsnest.ctx.lineTo(_x + 0, _y + 600);
        Birdsnest.ctx.lineTo(_x, _y + 100);
        Birdsnest.ctx.strokeStyle = _c1;
        Birdsnest.ctx.stroke();
        Birdsnest.ctx.fillStyle = _c1;
        Birdsnest.ctx.fill();
        Birdsnest.ctx.closePath();
    }
    Birdsnest.drawMountains1 = drawMountains1;
    function drawMountains2(_c1, _x, _y) {
        Birdsnest.ctx.beginPath();
        Birdsnest.ctx.moveTo(_x, _y + 200);
        Birdsnest.ctx.lineTo(_x + 50, _y + 250);
        Birdsnest.ctx.lineTo(_x + 200, _y + 300);
        Birdsnest.ctx.lineTo(_x + 250, _y + 250);
        Birdsnest.ctx.lineTo(_x + 300, _y + 300);
        Birdsnest.ctx.lineTo(_x + 350, _y + 250);
        Birdsnest.ctx.lineTo(_x + 400, _y + 300);
        Birdsnest.ctx.lineTo(_x + 450, _y + 250);
        Birdsnest.ctx.lineTo(_x + 500, _y + 300);
        Birdsnest.ctx.lineTo(_x + 550, _y + 250);
        Birdsnest.ctx.lineTo(_x + 600, _y + 300);
        Birdsnest.ctx.lineTo(_x + 650, _y + 250);
        Birdsnest.ctx.lineTo(_x + 700, _y + 300);
        Birdsnest.ctx.lineTo(_x + 750, _y + 250);
        Birdsnest.ctx.lineTo(_x + 800, _y + 300);
        Birdsnest.ctx.lineTo(_x + 800, _y + 600);
        Birdsnest.ctx.lineTo(_x + 0, _y + 600);
        Birdsnest.ctx.lineTo(_x, _y + 100);
        Birdsnest.ctx.strokeStyle = "white";
        Birdsnest.ctx.stroke();
        Birdsnest.ctx.fillStyle = "white";
        Birdsnest.ctx.fill();
        Birdsnest.ctx.closePath();
    }
    Birdsnest.drawMountains2 = drawMountains2;
    //Trees
    function drawTree() {
        console.log("Tree");
        let transform = Birdsnest.ctx.getTransform();
        let blaetterZahl = 20;
        let maxRadius = 30;
        let blaetter = new Path2D();
        blaetter.arc(680, 500, maxRadius, 0, 2 * Math.PI);
        // Baumstamm
        Birdsnest.ctx.fillStyle = "#e37830";
        Birdsnest.ctx.fillRect(660, 350, 50, 80);
        Birdsnest.ctx.save();
        Birdsnest.ctx.translate(0, -120);
        do {
            let y = Math.random() * 190; //y Bereich der Blaetter
            let x = (Math.random() - 0.5) * 2 * maxRadius; // x Bereich der Blaetter
            Birdsnest.ctx.save();
            Birdsnest.ctx.translate(x, -y);
            Birdsnest.ctx.fillStyle = "#0da75d";
            Birdsnest.ctx.fill(blaetter);
            Birdsnest.ctx.restore();
        } while (--blaetterZahl > 0);
        Birdsnest.ctx.restore();
        Birdsnest.ctx.setTransform(transform);
    }
    Birdsnest.drawTree = drawTree;
})(Birdsnest || (Birdsnest = {}));
//# sourceMappingURL=background.js.map