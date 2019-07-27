var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Bubbles {
        constructor() {
            this.fillColor = "rgba(255,255,255,0.7)";
            this.strokeColor = "#FFFFFF";
            this.x = (Math.random() * 1400);
            this.y = (Math.random() * 650);
            this.dy = ((-2) + Math.random() * (-5));
        }
        drawBubble() {
            Abschlussaufgabe.ctx.strokeStyle = "#FFFFFF";
            Abschlussaufgabe.ctx.lineWidth = 0.6;
            Abschlussaufgabe.ctx.beginPath();
            Abschlussaufgabe.ctx.fillStyle = this.fillColor;
            Abschlussaufgabe.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Abschlussaufgabe.ctx.closePath();
            //ctx.stroke();
            Abschlussaufgabe.ctx.fill();
            Abschlussaufgabe.ctx.stroke();
        }
        moveBubble() {
            this.y += this.dy;
            if (this.y < -10) {
                this.y = Abschlussaufgabe.ctx.canvas.height;
            }
        }
    }
    Abschlussaufgabe.Bubbles = Bubbles;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Bubbles.js.map