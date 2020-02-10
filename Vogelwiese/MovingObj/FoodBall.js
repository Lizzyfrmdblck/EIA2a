var Birdsnest;
(function (Birdsnest) {
    class FoodBall {
        constructor(x, y) {
            //super (x, y);
            this.size = this.foodradius * 2;
            this.fillColor = "#DF7401";
            this.strokeColor = "#DF7401";
            this.foodradius = 10 * Math.random() + 3;
            this.x = x;
            this.y = y;
            this.dy = 5 * Math.random() + 4;
            this.factor = 0.99;
        }
        scale() {
            this.foodradius *= this.factor;
        }
        drawBall() {
            Birdsnest.ctx.strokeStyle = "#white";
            Birdsnest.ctx.lineWidth = 0.6;
            Birdsnest.ctx.beginPath();
            Birdsnest.ctx.fillStyle = this.fillColor;
            Birdsnest.ctx.arc(this.x, this.y, this.foodradius, 0, 2 * Math.PI);
            Birdsnest.ctx.closePath();
            Birdsnest.ctx.fill();
            Birdsnest.ctx.stroke();
            //console.log ("FUTTER");
        }
        move() {
            this.y += this.dy;
        }
    }
    Birdsnest.FoodBall = FoodBall;
})(Birdsnest || (Birdsnest = {}));
//# sourceMappingURL=FoodBall.js.map