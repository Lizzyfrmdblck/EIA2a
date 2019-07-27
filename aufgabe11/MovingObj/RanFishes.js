var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class RanFishes {
        constructor() {
            this.fillColorIndex = Math.floor(Math.random() * 360);
            this.nextColor();
            this.strokeColor = "#ffff00";
            this.rotation = 15;
            this.ranradius = (Math.random() * 49 + 20); //49
            this.rightside = true;
            this.x = (Math.random() * 370 + 10);
            this.y = (Math.random() * 700 + 10);
            this.dx = (Math.random() * 6 + 1);
            this.drawFish();
        }
        //Funktion, dass die Fische nach rechts schwimmen
        drawFish() {
            let fishHead = new Path2D();
            fishHead.ellipse(this.x, this.y, this.ranradius, this.ranradius, 0, 0, 2 * Math.PI);
            //ctx.fillStyle = "rgb(211, 2, 124)";
            //console.log("Hallo" + this.size);
            let fishTail = new Path2D();
            fishTail.moveTo((this.ranradius) + this.x - 32, this.y + 2);
            fishTail.lineTo(this.x - 59, this.y + 30);
            fishTail.lineTo(this.x - 60, this.y - 20);
            fishTail.closePath();
            // ctx.fillStyle = "rgb(211, 2, 124)";
            Abschlussaufgabe.ctx.fillStyle = this.fillColor;
            this.nextColor();
            Abschlussaufgabe.ctx.fill(fishHead);
            Abschlussaufgabe.ctx.fill(fishTail);
            let fishEye = new Path2D();
            fishEye.arc(this.x + 20, this.y - 2, 8, 0, 2 * Math.PI);
            Abschlussaufgabe.ctx.fillStyle = "white";
            Abschlussaufgabe.ctx.fill(fishEye);
            let fishEyeIris = new Path2D();
            fishEyeIris.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.ctx.fillStyle = "black";
            Abschlussaufgabe.ctx.fill(fishEyeIris);
        }
        randomColor() {
            return "hsl(" + Math.random() * 360 + ", 80%, 80%)";
        }
        nextColor() {
            this.fillColorIndex = (this.fillColorIndex + 1) % 360;
            this.fillColor = "hsl(" + this.fillColorIndex + ", 80%, 80%";
        }
        move() {
            this.x += this.dx;
            if (this.x > Abschlussaufgabe.ctx.canvas.width) {
                this.x = -40;
                this.y = Math.random() * 670 + 10;
            }
            this.drawFish();
        }
    }
    Abschlussaufgabe.RanFishes = RanFishes;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=RanFishes.js.map