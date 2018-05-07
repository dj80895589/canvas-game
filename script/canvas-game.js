    
window.onload=function(){
	var timer;
	document.getElementById("begin").onclick=function(){
		if (timer) {clearInterval(timer)};
		timer=setInterval(function(){start()},100);
	};
	document.getElementById("stop").onclick=function(){
		clearInterval(timer);
	};

    var y=0;
	var step=50;
    var c=document.getElementById("canvas-game");
    var cxt=c.getContext("2d");

function start(){
    cxt.clearRect(0,0,500,300);
    cxt.beginPath();                //不设置开始画图，清除画布无效
    cxt.arc(70,y,5,0,Math.PI*2);
    cxt.fill();
    y=y+step;
    console.log(y);
    if (y==0||y==300) {
    	step=step*-1;
    }
}
}