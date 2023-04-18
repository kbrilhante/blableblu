const cnv = document.getElementById("myCanvas");
const ctx = cnv.getContext("2d");

const btnCor = document.getElementById("cor");
btnCor.value = "#6C3483"

var mouseX, mouseY;

console.log(ctx);

cnv.addEventListener("mousedown", desenha);

function desenha(oi) {
    console.log(oi);
    mouseX = oi.offsetX;
    mouseY = oi.offsetY;

    bolinha(mouseX, mouseY);
}

// bolinha(200, 200);
function bolinha(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = btnCor.value;
    ctx.lineWidth = 4;
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.stroke();
}