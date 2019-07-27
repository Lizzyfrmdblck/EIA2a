var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    // Background
    function drawBackground() {
        drawWater("#084B8A", "#084B8A", Abschlussaufgabe.ctx.canvas.width, Abschlussaufgabe.ctx.canvas.height, 600, 1400);
        drawSand("#C88937", 0, 500);
        drawAlga("#04B486", "transparent", 670, 510);
        drawAlga("#088A4B", "transparent", 530, 560);
        drawAlga("#04B486", "transparent", 350, 580);
        drawAlga("#04B486", "transparent", 1200, 600);
        drawAlga("#04B486", "transparent", 1500, 590);
        drawAlga("#04B486", "transparent", 100, 620);
        drawBow("black", "transparent", 1000, 500);
    }
    Abschlussaufgabe.drawBackground = drawBackground;
    // Wasser
    function drawWater(_c1, _c2, _x, _y, _r1, _r2) {
        var gradient = Abschlussaufgabe.ctx.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        Abschlussaufgabe.ctx.fillStyle = gradient;
        Abschlussaufgabe.ctx.fillRect(0, 0, _x, _y);
        Abschlussaufgabe.ctx.strokeRect(0, 0, _x, _y);
    }
    Abschlussaufgabe.drawWater = drawWater;
    // Sand
    function drawSand(_c1, _x, _y) {
        Abschlussaufgabe.ctx.beginPath();
        Abschlussaufgabe.ctx.moveTo(_x, _y + 70);
        Abschlussaufgabe.ctx.quadraticCurveTo(_x + 1000, _y - 100, _x + 1400, _y + 50);
        Abschlussaufgabe.ctx.lineTo(_x + 1400, _y + 100);
        Abschlussaufgabe.ctx.lineTo(_x, _y + 100);
        Abschlussaufgabe.ctx.strokeStyle = _c1;
        Abschlussaufgabe.ctx.stroke();
        Abschlussaufgabe.ctx.fillStyle = _c1;
        Abschlussaufgabe.ctx.fill();
        Abschlussaufgabe.ctx.closePath();
    }
    Abschlussaufgabe.drawSand = drawSand;
    //draw alge nach rechts geneigt
    function drawAlga(_c1, _c2, _x, _y) {
        Abschlussaufgabe.ctx.beginPath();
        Abschlussaufgabe.ctx.moveTo(_x, _y);
        Abschlussaufgabe.ctx.quadraticCurveTo(_x - 40, _y - 185, _x + 20, _y - 230);
        Abschlussaufgabe.ctx.quadraticCurveTo(_x + 60, _y - 185, _x + 20, _y);
        Abschlussaufgabe.ctx.closePath();
        Abschlussaufgabe.ctx.fillStyle = _c1;
        Abschlussaufgabe.ctx.fill();
        Abschlussaufgabe.ctx.strokeStyle = _c2;
        Abschlussaufgabe.ctx.stroke();
    }
    Abschlussaufgabe.drawAlga = drawAlga;
    function drawBow(_c1, _c2, _x, _y) {
        Abschlussaufgabe.ctx.beginPath();
        Abschlussaufgabe.ctx.moveTo(_x, _y);
        Abschlussaufgabe.ctx.quadraticCurveTo(_x - 100, _y - 200, _x + 50, _y - 200);
        Abschlussaufgabe.ctx.quadraticCurveTo(_x + 100, _y - 210, _x + 120, _y);
        Abschlussaufgabe.ctx.quadraticCurveTo(_x + 20, _y - 280, _x, _y - 10);
        Abschlussaufgabe.ctx.closePath();
        Abschlussaufgabe.ctx.fillStyle = "#E3BE67";
        Abschlussaufgabe.ctx.fill();
        Abschlussaufgabe.ctx.strokeStyle = "white";
        Abschlussaufgabe.ctx.stroke();
    }
    Abschlussaufgabe.drawBow = drawBow;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=background.js.map