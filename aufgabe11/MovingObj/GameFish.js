var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class GameFish {
        constructor() {
            this.playerradius = 40;
            this.fillColor = "#DEB887";
            this.strokeColor = "#ffff00";
            this.rotation = 15;
            this.rightside = true;
            this.x = 1200;
            this.y = 300;
            // this.draw();
        }
        update() {
            //this.checkKey(KeyboardEvent);
            this.draw();
        }
        //Funktion Fisch wird gezeichnet
        draw() {
            let fishHead = new Path2D();
            fishHead.ellipse(this.x, this.y, 40, this.playerradius, 0, 0, 6 * Math.PI);
            Abschlussaufgabe.ctx.fillStyle = "#8904B1";
            Abschlussaufgabe.ctx.fill(fishHead);
            let fishEye = new Path2D();
            fishEye.arc(this.x - 15, this.y - 2, 8, 0, 2 * Math.PI);
            Abschlussaufgabe.ctx.fillStyle = "white";
            Abschlussaufgabe.ctx.fill(fishEye);
            let fishEyeIris = new Path2D();
            fishEyeIris.arc(this.x + -15, this.y - 2, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.ctx.fillStyle = "black";
            Abschlussaufgabe.ctx.fill(fishEyeIris);
            let fishTail = new Path2D();
            fishTail.moveTo(this.x + 35, this.y + 2);
            fishTail.lineTo(this.x + 65, this.y + 30);
            fishTail.lineTo(this.x + 65, this.y - 20);
            fishTail.closePath();
            Abschlussaufgabe.ctx.fillStyle = "#8904B1";
            Abschlussaufgabe.ctx.fill(fishTail);
            //console.log("Größe GameFish" + this.size);
        }
        //Fisch wird größer sobald er anderen Fisch trifft
        touchFish(_ranFishes) {
            var dx = this.x - _ranFishes.x;
            var dy = this.y - _ranFishes.y;
            Abschlussaufgabe.gameOver();
        }
    }
    Abschlussaufgabe.GameFish = GameFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=GameFish.js.map