var seaworld;
(function (seaworld) {
    class Bubbles {
        constructor() {
            this.fillColor = "#FFFFFF";
            this.strokeColor = "#FFFFFF";
            this.x = (Math.random() * 414);
            this.y = (Math.random() * 700);
        }
        push(bubbles) {
            throw new Error("Method not implemented."); //hmmm...
        }
        drawBubble() {
            seaworld.ctx.strokeStyle = "#FFFFFF";
            seaworld.ctx.lineWidth = 6;
            seaworld.ctx.beginPath();
            seaworld.ctx.fillStyle = this.fillColor;
            seaworld.ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            seaworld.ctx.closePath();
            //ctx.stroke();
            seaworld.ctx.fill();
            seaworld.ctx.stroke();
        }
        moveBubble() {
            this.y += 2;
            if (this.y > seaworld.ctx.canvas.height) {
                this.x = Math.random() * seaworld.ctx.canvas.width;
                this.y = -1;
            }
        }
    }
    seaworld.Bubbles = Bubbles;
})(seaworld || (seaworld = {}));
//# sourceMappingURL=Bubbles.js.map