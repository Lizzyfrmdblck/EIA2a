namespace A9 {
  window.addEventListener("load", init);
  let ctx: CanvasRenderingContext2D;

  // init
  function init(_event: Event): void {
    console.log("Canvas started");

    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext("2d");
    console.log(ctx);

    //FUNKTIONSAUFRUFE_________________________________________________________________
    // Wasser
    drawWater();

    // Fische
    for (let i = 0; i < 2; i++) {
      let x: number = Math.random() * canvas.width;
      let y = Math.floor((Math.random() * 300) + 50);
      drawFish1(x, y);
    }
    for (let i = 0; i < 2; i++) {
      let x = Math.floor((Math.random() * 400) + 30);
      let y = Math.floor((Math.random() * 300) + 50);
      drawFish2(x, y);
    }
    // Alge
    for (let i: number = 0; i < 300; i++) {
      let x: number = Math.floor((Math.random() * 400) + 0);
      let y: number = Math.floor((Math.random() * 200) + 450);
      drawAlge(x, y);
    }

    // Luftblasen
    for (let i: number = 0; i < 25; i++) {

      let randX: number = (Math.random() * (414) + 0);
      let randY: number = (Math.random() * (500) + 0);

      drawBubbles(randX, randY);
    }


    //Statische Objekte__________________________________________________________________
    //Funktion Wasser
    function drawWater() {
      var gradient;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0.7, 0.7);
      ctx.lineTo(414.7, 0.7);
      ctx.lineTo(414.7, 734.3);
      ctx.lineTo(0.7, 734.3);
      ctx.lineTo(0.7, 0.7);
      ctx.closePath();
      gradient = ctx.createLinearGradient(207.7, 0.7, 207.7, 734.3);
      gradient.addColorStop(0.00, "rgb(42, 170, 225)");
      gradient.addColorStop(1.00, "rgb(16, 113, 185)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = "rgb(1, 1, 1)";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(2.2, 548.0);
      ctx.bezierCurveTo(2.2, 548.0, 219.2, 489.7, 413.2, 548.0);
      ctx.lineTo(413.2, 733.3);
      ctx.lineTo(2.2, 733.3);
      ctx.fillStyle = "rgb(229, 202, 144)";
      ctx.fill();
      ctx.restore();
    }


  }

  // Funktion Fische
  function drawFish1(_x: number, _y: number) {
    let fishHead = new Path2D();
    fishHead.ellipse(_x, _y, 10, 10, 1.5, 0, 2 * Math.PI);
    ctx.fillStyle = "rgb(249, 154, 0)";
    ctx.fill(fishHead);

    let fishEye: Path2D = new Path2D();
    fishEye.arc(_x + 20, _y - 2, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill(fishEye);


    let fishEyeIris: Path2D = new Path2D();
    fishEyeIris.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill(fishEyeIris);

    let fishTail = new Path2D();
    fishTail.moveTo(_x - 32, _y + 2);
    fishTail.lineTo(_x - 59, _y + 30);
    fishTail.lineTo(_x - 60, _y - 20);
    fishTail.closePath();

    ctx.fillStyle = "rgb(249, 154, 0)";
    ctx.fill(fishTail);

  }
  //Fisch 2
  function drawFish2(_x: number, _y: number) {
    let fishHead = new Path2D();
    fishHead.ellipse(_x, _y, 40, 40, 1.5, 0, 2 * Math.PI);
    ctx.fillStyle = "rgb(211, 2, 124)";
    ctx.fill(fishHead);

    let fishEye: Path2D = new Path2D();
    fishEye.arc(_x + 20, _y - 2, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill(fishEye);


    let fishEyeIris: Path2D = new Path2D();
    fishEyeIris.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill(fishEyeIris);

    let fishTail = new Path2D();
    fishTail.moveTo(_x - 32, _y + 2);
    fishTail.lineTo(_x - 59, _y + 30);
    fishTail.lineTo(_x - 60, _y - 20);
    fishTail.closePath();

    ctx.fillStyle = "rgb(211, 2, 124)";
    ctx.fill(fishTail);

  }

  //Funktion Alge
  function drawAlge(_x: number, _y: number) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(_x + 2.5, _y + 1.0);
    ctx.lineTo(_x + 2.3, _y + 0.0);
    ctx.lineTo(_x + 2.0, _y + 1.0);
    ctx.lineTo(_x + 0.0, _y + 90.0);
    ctx.lineTo(_x + 3.5, _y + 90.0);
    ctx.lineTo(_x + 2.5, _y + 1.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(59, 150, 10)";
    ctx.strokeStyle = "rgb(66, 244, 113)";
    ctx.stroke();
    ctx.fill("evenodd");
    ctx.restore();
  }


  //FunktionLuftblasen
  function drawBubbles(_x: number, _y: number) {
    let bubble = new Path2D();
    bubble.arc(_x, _y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill(bubble);

  }




}
