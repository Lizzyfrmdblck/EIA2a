var Birdsnest;
(function (Birdsnest) {
    class Flake {
        //Endlich kompiliert!
        constructor() {
            this.fillColor = "rgba(255,255,255,0.7)";
            this.strokeColor = "#FFFFFF";
            this.x = (Math.random() * 800);
            this.y = (Math.random() * 600);
            this.dy = ((-2) + Math.random() * (-5));
            this.test = 0;
        }
        drawFlake() {
            Birdsnest.ctx.strokeStyle = "#FFFFFF";
            Birdsnest.ctx.lineWidth = 0.6;
            Birdsnest.ctx.beginPath();
            Birdsnest.ctx.fillStyle = this.fillColor;
            Birdsnest.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Birdsnest.ctx.closePath();
            //ctx.stroke();
            Birdsnest.ctx.fill();
            Birdsnest.ctx.stroke();
        }
        moveFlake() {
            this.y -= this.dy;
            if (this.y > Birdsnest.ctx.canvas.height) {
                this.y = 0;
            }
            this.drawFlake();
        }
    }
    Birdsnest.Flake = Flake;
})(Birdsnest || (Birdsnest = {}));
//# sourceMappingURL=Flake.js.map