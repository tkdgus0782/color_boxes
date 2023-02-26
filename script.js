//https://webdoli.tistory.com/24 참고하고 있음

function box(){
	this.x = 0;
	this.y = 0;
	this.width = 50;
	this.height = 50;
}

function rand(min, max){
	return Math.round(Math.random() * (max - min + 1) - min);
}

function init(){
	window.canvas = document.getElementById('game');
	window.display = window.canvas.getContext('2d');
		
	window.maxX = canvas.width;
	window.maxY = canvas.height;
	window.w = 10;
	window.h = 10;
	window.nowX = 0;
	window.nowY = 0;
	window.boxTotal = 523;
	window.trigger = 0;

	loop();
}

function color(){
	const result = 'rgba(' + rand(0,255) + ',' + rand(0,255) + ',' + rand(0,255) + ',' + '1)';
	
	return result;
}


function draw(){
	display.clearRect(0, 0, maxX, maxY)
	
	display.fillStyle = 'blue';
	display.fillRect(0, 0, maxX, maxY);
	
	if(trigger == 1){
		for(let i = 0; i < boxTotal; i++){
			display.fillStyle = color();
			
			nowX = rand(0, maxX);
			nowY = rand(0, maxY);
			w = rand(0, maxX - nowX);
			h = rand(0, maxY - nowY);
			
			display.fillRect(nowX, nowY, w, h);
		}
	}
	
}

function loop(){
	draw();
	requestAnimationFrame(loop);
}

function change(){
	trigger = 1;
}

function end(){
	trigger = 0;
}

