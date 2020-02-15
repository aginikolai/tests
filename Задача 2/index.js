function draw() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    ctx.fillRect(25,25,100,100);

    ctx.arc(750, 80, 50, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.fillRect(25,500,200,100);

    ctx.beginPath();
    ctx.moveTo(750, 550);
    ctx.lineTo(800, 600);
    ctx.lineTo(700, 600);

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
}

document.addEventListener("DOMContentLoaded", draw);