var Birdsnest;
(function (Birdsnest) {
    class SnowBall {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.dx = 10;
            this.dy = 10;
            this.fillColor = "white";
            this.strokeColor = "white";
            this.size = this.radius * 2;
            this.radius = 50;
            this.factor = 0.9;
            this.scoreNumber = 0;
        }
        scale() {
            this.radius *= this.factor;
            this.radius *= this.factor;
        }
        draw() {
            Birdsnest.ctx.strokeStyle = "#FFFFFF";
            Birdsnest.ctx.lineWidth = 0.6;
            Birdsnest.ctx.beginPath();
            Birdsnest.ctx.fillStyle = this.fillColor;
            Birdsnest.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Birdsnest.ctx.closePath();
            Birdsnest.ctx.fill();
            Birdsnest.ctx.stroke();
            //console.log("Größe Snowball" + (this.radius * 2) );
        }
        move() {
            this.y += this.dy;
            if (this.y > Birdsnest.ctx.canvas.height) {
                this.dy = 0;
            }
        }
        eliminateBird(ranbirds) {
            for (let i = 0; i < ranbirds.length; i++) {
                if (ranbirds[i].x < this.x + 20
                    && ranbirds[i].x > this.x - 20
                    && ranbirds[i].y > this.y - 20
                    && ranbirds[i].y < this.y + 20
                    && ranbirds[i].radius < this.radius) {
                    //this.scoreNumber = ranbirds[i].dx;   
                    console.log("Eliminatebirds");
                    //snowballs.splice(i, 1);
                    ranbirds.splice(i, 1);
                }
                else {
                    this.scoreNumber = 0;
                }
            }
            return this.scoreNumber;
        }
        eliminateEagle(eagle) {
            if (eagle.x < this.x + 20
                && eagle.x > this.x - 20
                && eagle.y > this.y - 20
                && eagle.y < this.y + 20
                && eagle.radius < this.radius) {
                console.log("Eliminateeagles");
                this.scoreNumber = 100;
                eagle = null;
            }
            else {
                this.scoreNumber = 0;
            }
            return this.scoreNumber;
        }
    }
    Birdsnest.SnowBall = SnowBall;
})(Birdsnest || (Birdsnest = {}));
//# sourceMappingURL=SnowBall.js.map