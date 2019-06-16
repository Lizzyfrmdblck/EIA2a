var seaworld;
(function (seaworld) {
    class Fishes {
        constructor() {
            this.fillColor = "#DEB887";
            this.strokeColor = "#ffff00";
            this.rotation = 15;
            this.rightside = true;
            this.x = (Math.random() * (100) + 0);
            this.y = (Math.random() * (100) + 275);
            this.drawFishes();
        }
        //Funktion, dass die Fische nach rechts oder links schwimmen
        drawFishes() {
            if (this.rightside == true) {
                this.drawFishRight();
            }
            if (this.rightside == false) {
                this.drawFishLeft();
            }
        }
        drawFishRight() {
            function drawFish2(_x, _y) {
                let fishHead = new Path2D();
                fishHead.ellipse(_x, _y, 40, 40, 1.5, 0, 2 * Math.PI);
                seaworld.ctx.fillStyle = "rgb(211, 2, 124)";
                seaworld.ctx.fill(fishHead);
                let fishEye = new Path2D();
                fishEye.arc(_x + 20, _y - 2, 8, 0, 2 * Math.PI);
                seaworld.ctx.fillStyle = "white";
                seaworld.ctx.fill(fishEye);
                let fishEyeIris = new Path2D();
                fishEyeIris.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
                seaworld.ctx.fillStyle = "black";
                seaworld.ctx.fill(fishEyeIris);
                let fishTail = new Path2D();
                fishTail.moveTo(_x - 32, _y + 2);
                fishTail.lineTo(_x - 59, _y + 30);
                fishTail.lineTo(_x - 60, _y - 20);
                fishTail.closePath();
                seaworld.ctx.fillStyle = "rgb(211, 2, 124)";
                seaworld.ctx.fill(fishTail);
            }
        }
        //Fisch nach links schwimmend
        drawFishLeft() {
            function drawFish2(_x, _y) {
                let fishHead = new Path2D();
                fishHead.ellipse(_x, _y, 40, 40, 1.5, 0, 2 * Math.PI);
                seaworld.ctx.fillStyle = "rgb(211, 2, 124)";
                seaworld.ctx.fill(fishHead);
                let fishEye = new Path2D();
                fishEye.arc(_x + 20, _y - 2, 8, 0, 2 * Math.PI);
                seaworld.ctx.fillStyle = "white";
                seaworld.ctx.fill(fishEye);
                let fishEyeIris = new Path2D();
                fishEyeIris.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
                seaworld.ctx.fillStyle = "black";
                seaworld.ctx.fill(fishEyeIris);
                let fishTail = new Path2D();
                fishTail.moveTo(_x - 32, _y + 2);
                fishTail.lineTo(_x - 59, _y + 30);
                fishTail.lineTo(_x - 60, _y - 20);
                fishTail.closePath();
                seaworld.ctx.fillStyle = "rgb(211, 2, 124)";
                seaworld.ctx.fill(fishTail);
            }
        }
        //Funktion, damit Fische den Bildschirm nicht verlassen
        move() {
            if (this.y >= 450) {
                this.rightside = false;
            }
            if (this.y <= 300) {
                this.rightside = true;
            }
            if (this.rightside == true) {
                this.x += 4;
                this.y += 2;
            }
            if (this.rightside == false) {
                this.x -= 4;
                this.y -= 2;
            }
            //            this.drawFishes();
        }
    }
    seaworld.Fishes = Fishes;
})(seaworld || (seaworld = {}));
//# sourceMappingURL=Fishes.js.map