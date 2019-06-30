namespace foodporn {

    export class Foods extends MovingObjects {

        radius: number;

        constructor(_xPos: number, _yPos: number, _color1: string) {
            super();
            this.setVariables(_xPos, _yPos, _color1);
        }

        setVariables(_xPos: number, _yPos: number, _color1: string): void {
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.ySpeed = 0.4 + Math.random() * 0.3;
            this.xSpeed = (0 - 0.2) + Math.random() * 0.2;
            this.end = 560 + Math.random() * 40;
            this.radius = 2 + Math.random() * 4;
            this.color1 = _color1;
        }


        move(): void {
            this.xPos += this.xSpeed;
            this.yPos += this.ySpeed;

            //Futter stoppt
            if (this.yPos > this.end) {
                this.ySpeed -= this.ySpeed;
                this.xSpeed -= this.xSpeed;
            }
        }

        draw(): void {
            crc.beginPath();
            crc.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
            crc.strokeStyle = this.color1;
            crc.stroke();
            crc.fillStyle = this.color1;
            crc.fill();
            crc.closePath();
        }

    }
}