namespace A9 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        console.log(crc2);


        //Wasser
        let colorGradient: any = crc2.createLinearGradient(100, 50, 100, 30);
        colorGradient.addColorStop(0, "#58ACFA");
        colorGradient.addColorStop(1, "#58D3F7");
        crc2.fillStyle = colorGradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //Funktionsaufruf Sand
        drawGround(0, 300, "#000000", "#ffffff");

        drawSchatzkiste(0, 0, "#FFFFFF")


        //Blubberblasen        
        for (let i: number = 0; i < 8; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            drawBubble(x, y, 6, "", "#ffffff");
        }

    //Fische
    function drawFish(_x: number, _y: number, _strokeColor: string, _fillColor: string, _rotation: number): void {

        //Körper 
        crc2.strokeStyle = "#FE9A2E";
        crc2.lineWidth = 6;

        crc2.beginPath();
        crc2.moveTo(_x + 0, _y + 16);
        crc2.lineTo(_x + 35, _y + 25); //unten
        crc2.lineTo(_x + 35, _y + 10); //unten
        crc2.stroke();

        crc2.stroke();
        //Flossen 
        crc2.beginPath();
        crc2.fillStyle = "#C4A377";
        crc2.arc(_x + 6, _y + 7, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

       
    }
    
     
  

    //Sand Funktion
    function drawGround(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.quadraticCurveTo(30, 220, 80, 250);
        crc2.quadraticCurveTo(212, 400, 600, 400);
        // crc2.quadraticCurveTo(100, 300, 414, 250);
        crc2.lineTo(414, 736);
        crc2.lineTo(0, 736);
        crc2.closePath();
        crc2.fill();
    }

    function drawAlge(_x: number, _y: number, _w: number, _h: number, _fill1: string, _fill2: string): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y - 40);
        crc2.lineTo(_x - 10, _y);
        crc2.lineTo(_x + 10, _y);
        crc2.lineTo(_x + 10, _y);
        crc2.closePath();

        crc2.fillStyle = "#FAC53D";
        crc2.strokeStyle = "#FAC53D";
        crc2.fill();
        crc2.stroke();

    }
    
    function drawCloud(_x: number, _y: number, _c: string): void {
        crc2.beginPath();
        crc2.arc(170,90,20,0,2*Math.PI)
        crc2.arc(150,95,20,0,2*Math.PI)
        crc2.arc(130,70,20,0,2*Math.PI)
        crc2.arc(150,55,20,0,2*Math.PI)
        
        crc2.arc(130,70,20,0,2*Math.PI)
        crc2.arc(110,90,20,0,2*Math.PI)
        crc2.arc(125,70,20,0,2*Math.PI)
        crc2.arc(175,70,20,0,2*Math.PI)
        crc2.arc(200,90,20,0,2*Math.PI)
        crc2.arc(140,90,20,0,2*Math.PI)
       
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = "#FFFFFF";
        crc2.fill();
        crc2.stroke();

    }

    //Blubberblase
    function drawBubble(_x: number, _y: number, _size: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, _size, 0, 5 * Math.PI);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
    }


     //Blubberblase
     function drawSchatzkiste(_fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(0, 0, 300, 400);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
    }
   
    