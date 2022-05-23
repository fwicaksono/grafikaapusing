const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
var radius;


function buat() {
  context.beginPath();
  context.fillStyle = '#0077aa';
  context.strokeStyle = '#0077aa47';
  context.lineWidth = 2;

  var ambil_radius = document.getElementById('r').value;
  radius = ambil_radius;
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fill();
  context.stroke(); 

}



/*

versi lama
$(function(){
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    var canvasOffset=$("#canvas").offset();
    var offsetX=canvasOffset.left;
    var offsetY=canvasOffset.top;
    var startX;
    var startY;
    var isDown=false;
    function membuatOval(x,y){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.moveTo(startX, startY + (y-startY)/2);
        ctx.bezierCurveTo(startX, startY, x, startY, x, startY + (y-startY)/2);
        ctx.bezierCurveTo(x, y, startX, y, startX, startY + (y-startY)/2);
        ctx.closePath();
        ctx.stroke();
    }
    function handleMouseDown(e){
      e.preventDefault();
      e.stopPropagation();
      startX=parseInt(e.clientX-offsetX);
      startY=parseInt(e.clientY-offsetY);
      isDown=true;
    }
    function handleMouseUp(e){
      if(!isDown){ return; }
      e.preventDefault();
      e.stopPropagation();
      isDown=false;
    }
    function handleMouseOut(e){
      if(!isDown){ return; }
      e.preventDefault();
      e.stopPropagation();
      isDown=false;
    }
    function handleMouseMove(e){
      if(!isDown){ return; }
      e.preventDefault();
      e.stopPropagation();
      mouseX=parseInt(e.clientX-offsetX);
      mouseY=parseInt(e.clientY-offsetY);
      membuatOval(mouseX,mouseY);
    }
    $("#canvas").mousedown(function(e){handleMouseDown(e);});
    $("#canvas").mousemove(function(e){handleMouseMove(e);});
    $("#canvas").mouseup(function(e){handleMouseUp(e);});
    $("#canvas").mouseout(function(e){handleMouseOut(e);});
});
*/