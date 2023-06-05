var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
function DGP(params) {
  context.clearRect(0, 0, 256, 256);

  const ctx = context;
  const w = canvas.width / 2;
  const radii = [8, 16, 32, 64, 128];
  const lineWidths = [6, 3, 1.5, 1.25, 1.125];
  
  ctx.strokeStyle = 'gold';
  
  for (let i = 0; i < radii.length; i++) {
    ctx.lineWidth = lineWidths[i];
    ctx.beginPath();
    ctx.arc(w, w, radii[i], 0, 180);
    ctx.stroke();
  }
  
  ctx.lineWidth = 1.125;
  ctx.font = '48px sans-serif';
  ctx.strokeStyle = 'gold';
  context.fillStyle='#fff';
  
  ctx.textAlign = 'center';
  ctx.strokeText('RMFOR', w, w - 48);
  ctx.strokeText('and', w, w);
  ctx.strokeText('DGP', w, w + 48);
  ctx.fillText('RMFOR', w, w - 48);
  ctx.fillText('and', w, w);
  ctx.fillText('DGP', w, w + 48);
}