let x=[];
let y=[];
let easing = 0.01;
let targetX=200;
let targetY=200;
let dy=[];
let dx=[];
let c1 = 255;
let c2 = 255;
let c3 = 255;
let del = false; //boolean that controls is sketch is removed

export function main(_p5) {
  let p5 = _p5

  p5.setup = _ => {
    p5.noStroke();
    let canvas = p5.createCanvas(375, 400)
    canvas.parent("p5Canvas3");
    
    
    for (let l=0;l<130;l+=1) {
        x[l]=p5.random(-60,460);
        y[l]=p5.random(-60,460);
    }

  p5.draw = _ => {
	
	if(del){
		p5.clear(); // remove whole sketch 
	}
	p5.background(0);
    for (let i=0;i<x.length;i++) {
		dx = targetX - x[i];
	 	dy = targetY - y[i];
	 	x[i] += dx * easing;
	 	y[i] += dy * easing;
	 	for (let j=0;j<x.length;j++) {
			if(i!==j&&p5.dist(x[i],y[i],x[j],y[j])<=20.1) {
	 			x[j] += dx * 0.002;
	 			y[j] += dy * 0.002;
 				x[i] -= dx * easing;
 				y[i] -= dy * easing;    
 			}
			if(i!==j&&p5.dist(x[i],y[i],x[j],y[j])<=45) {
				p5.stroke(c1,c2,c3,50);
				//color(random(255),156,255)
				p5.line(x[i],y[i],x[j],y[j]);
			}
			if(i!==j&&p5.dist(x[i],y[i],p5.mouseX,p5.mouseY)<=30) {
 				x[i] -= dx * easing;
 				y[i] -= dy * easing;
   		}  
 		}
	}
  targetY = 200;
  targetX = 200;
  
      }
    }
}

export function colorMe(){ 
	c1 = Math.random()*255;
	c2 = Math.random()*255;
	c3 = Math.random()*255;
  }

  export function white(){
	c1 = 255;
	c2 = 255;
	c3 = 255;
  }

  export function stopPlease() {
	del = true;
  }
