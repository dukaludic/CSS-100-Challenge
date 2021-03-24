let canvas = document.querySelector('#myCanvas');
const width = 260;
const height = 100;

let xGrid = 0;
let yGrid = 0;
let ctx = canvas.getContext('2d');

console.log(canvas);

function drawGrids()
{
	ctx.beginPath();
	
	while(xGrid < height)
		{
			ctx.moveTo(0, xGrid);
			ctx.lineTo(width, xGrid);
			xGrid += 45;
		}
		ctx.lineWidth = .1;
		ctx.stroke();
}
drawGrids();

	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#fa7373";
	ctx.moveTo(10, 65);
	ctx.lineTo(55, 30);
	ctx.stroke();
	ctx.lineTo(95, 40);
	ctx.stroke();
	ctx.lineTo(135, 30);
	ctx.stroke();
	ctx.lineTo(175, 60);
	ctx.stroke();
	ctx.lineTo(212, 70);
	ctx.stroke();
	ctx.lineTo(250, 35);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#fa7373';
	ctx.arc(10, 65, 3, 45, 2 * Math.PI, false);
	ctx.fill();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#fa7373';
	ctx.arc(55, 30, 3, 45, 2 * Math.PI, false);
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#fa7373';
	ctx.arc(95, 40, 3, 45, 2 * Math.PI, false);
	ctx.fill();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#fa7373';
	ctx.arc(135, 30, 3, 45, 2 * Math.PI, false);
	ctx.fill();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#fa7373';
	ctx.arc(175, 60, 3, 45, 2 * Math.PI, false);
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#fa7373';
	ctx.arc(212, 70, 3, 45, 2 * Math.PI, false);
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#fa7373';
	ctx.arc(250, 35, 3, 45, 2 * Math.PI, false);
	ctx.fill();


	//BLUE

	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#7ba2ff";
	ctx.moveTo(10, 80);
	ctx.lineTo(55, 70);
	ctx.stroke();
	ctx.lineTo(95, 85);
	ctx.stroke();
	ctx.lineTo(135, 75);
	ctx.stroke();
	ctx.lineTo(175, 80);
	ctx.stroke();
	ctx.lineTo(212, 90);
	ctx.stroke();
	ctx.lineTo(250, 80);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#7ba2ff';
	ctx.arc(10, 80, 3, 45, 2 * Math.PI, false);
	ctx.fill();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.arc(55, 70, 3, 45, 2 * Math.PI, false);
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.arc(95, 85, 3, 45, 2 * Math.PI, false);
	ctx.fill();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.arc(135, 75, 3, 45, 2 * Math.PI, false);
	ctx.fill();
	
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.arc(175, 80, 3, 45, 2 * Math.PI, false);
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.arc(212, 90, 3, 45, 2 * Math.PI, false);
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.arc(250, 80, 3, 45, 2 * Math.PI, false);
	ctx.fill();