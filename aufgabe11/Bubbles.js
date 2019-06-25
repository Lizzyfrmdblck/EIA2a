var seaworld;
(function (seaworld) {
    class Bubbles {
        constructor() {
            this.fillColor = "rgba(255,255,255,0.7)";
            this.strokeColor = "#FFFFFF";
            this.x = (Math.random() * 414);
            this.y = (Math.random() * 700);
            this.dy = -5;
        }
        drawBubble() {
            seaworld.ctx.strokeStyle = "#FFFFFF";
            seaworld.ctx.lineWidth = 0.6;
            seaworld.ctx.beginPath();
            seaworld.ctx.fillStyle = this.fillColor;
            seaworld.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            seaworld.ctx.closePath();
            //ctx.stroke();
            seaworld.ctx.fill();
            seaworld.ctx.stroke();
        }
        moveBubble() {
            this.y += this.dy;
            if (this.y < 0) {
                this.y = seaworld.ctx.canvas.height;
            }
        }
    }
    seaworld.Bubbles = Bubbles;
})(seaworld || (seaworld = {}));
//# sourceMappingURL=Bubbles.js.map