var Birdsnest;
(function (Birdsnest) {
    class Eagle extends Birdsnest.Bird {
        /*snowball: SnowBall;*/
        constructor(x, y, lastball) {
            super();
            this.size = this.radius * 2;
            this.strokeColor = "black";
            this.radius = 20;
            this.y = -100;
            this.dx = 1;
            this.dy = 15;
            this.draw();
            this.movedown();
            this.moveright();
            /* this.snowball = snowball;
            this.foodball = foodball;*/
            this.foodball = lastball;
            this.x = this.foodball.x;
        }
        flyEagle() {
            console.log("flyeagle");
            if (this.foodball.y > 450
                && this.y + 30 < this.foodball.y) { // wenn der Foodball auf Höhe des Grases ist 
                this.x = this.foodball.x;
                this.movedown(); //soll der Adler nach unten fliegen / er bekommt dabei den y Paramter des Foodballs/Maus
            }
            if (this.foodball.foodradius < 10) {
                this.moveright();
            }
            this.draw();
        }
        //Richtungsfunktionen 
        movedown() {
            this.y += this.dy;
        }
        moveright() {
            this.x += this.dx;
        }
        draw() {
            Birdsnest.ctx.strokeStyle = "black";
            Birdsnest.ctx.lineWidth = 0.6;
            Birdsnest.ctx.beginPath();
            Birdsnest.ctx.fillStyle = "black";
            Birdsnest.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Birdsnest.ctx.arc(this.x, this.y, 5., 4, 1 * Math.PI);
            Birdsnest.ctx.closePath();
            Birdsnest.ctx.fill();
            Birdsnest.ctx.stroke();
        }
    }
    Birdsnest.Eagle = Eagle;
})(Birdsnest || (Birdsnest = {}));
//# sourceMappingURL=Eagle.js.map