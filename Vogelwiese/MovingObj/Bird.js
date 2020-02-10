var Birdsnest;
(function (Birdsnest) {
    //Endlich kompiliert!
    class Bird {
        constructor() {
            this.fillColorIndex = Math.floor(Math.random() * 360);
            this.nextColor();
            this.size = this.radius * 2;
            this.strokeColor = "#ffff00";
            this.radius = (Math.random() * 15 + 4);
            //this.flyup = true;
            this.x = (Math.random() * Birdsnest.ctx.canvas.width - 10);
            this.y = (Math.random() * Birdsnest.ctx.canvas.height - 10);
            this.dx = (Math.floor(Math.random() * 6 + 1));
            //console.log (this.dx);
            this.dy = (Math.random() + 1);
            this.upperlimit = this.y - 5;
            this.lowerlimit = this.y + 5;
            this.draw();
        }
        checkDistance(pfoodball) {
            this.xDirection = (pfoodball.x - this.x);
            this.yDirection = pfoodball.y - this.y;
            this.distance = Math.sqrt((this.xDirection * this.xDirection) + (this.yDirection * this.yDirection));
            this.vectorlength = Math.sqrt(this.xDirection * this.xDirection + this.yDirection * this.yDirection);
            if (this.distance < 200) {
                this.moveToFood();
                //this.nearby = true;
            }
            else {
                this.move();
            }
        }
        moveToFood() {
            this.x += (this.xDirection / this.vectorlength) * (this.dx);
            this.y += (this.yDirection / this.vectorlength) * (Math.abs(this.dy));
        }
        //Funktion: Voegel fliegen nach rechts
        draw() {
            let birdMouth = new Path2D();
            birdMouth.arc(this.x + 25, this.y - 2, 8, 0, 1 * Math.PI);
            Birdsnest.ctx.fillStyle = "#FF0080";
            Birdsnest.ctx.fill(birdMouth);
            let birdTail = new Path2D();
            birdTail.ellipse(this.x - 30, this.y - 15, 35 + this.radius, this.radius + 25, 0, 50, 0.5 * Math.PI);
            let birdTail2 = new Path2D();
            birdTail2.ellipse(this.x, this.y + 20, 25 + this.radius, this.radius, 500, 50, 0.5 * Math.PI);
            let birdBody = new Path2D();
            birdBody.arc(this.x + 4, this.y - 3, this.radius + 3, 0, 2 * Math.PI);
            Birdsnest.ctx.fillStyle = "rgb(211, 2, 124)";
            Birdsnest.ctx.fillStyle = this.fillColor;
            this.nextColor();
            Birdsnest.ctx.fill(birdTail);
            Birdsnest.ctx.fill(birdTail2);
            Birdsnest.ctx.fill(birdBody);
            let birdEye = new Path2D();
            birdEye.arc(this.x + 10, this.y - 2, 8, 0, 2 * Math.PI);
            Birdsnest.ctx.fillStyle = "white";
            Birdsnest.ctx.fill(birdEye);
            let birdEyeIris = new Path2D();
            birdEyeIris.arc(this.x + 10, this.y - 2, 5, 0, 2 * Math.PI);
            Birdsnest.ctx.fillStyle = "black";
            Birdsnest.ctx.fill(birdEyeIris);
        }
        nextColor() {
            this.fillColorIndex = (this.fillColorIndex + 1) % 360;
            this.fillColor = "hsl(" + this.fillColorIndex + ", 80%, 80%";
        }
        //move-Funktion der Vögel
        move() {
            this.x += this.dx; //x Abstand mit mathrandom
            if (this.y > this.lowerlimit) {
                this.dy = -1.0;
            }
            else if (this.y < this.upperlimit) {
                this.dy = 1.0;
            }
            this.y += this.dy;
            if (this.x > Birdsnest.ctx.canvas.width) {
                this.x = -40;
                this.y = Math.random() * 500 + 10;
                this.upperlimit = this.y - 5;
                this.lowerlimit = this.y + 5;
            }
        }
    }
    Birdsnest.Bird = Bird;
})(Birdsnest || (Birdsnest = {}));
//# sourceMappingURL=Bird.js.map