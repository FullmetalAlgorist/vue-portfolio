let em = 16; //#vertices
let newShape = true;
let aa = 2.0;
let bb = 2.0;
let step = 1;
let count1 = 0;
let scale = 1;
let none = 2.0;
let ntwo = 2.0;
let nthree= 2.0;
let theta = 0;
let p5;


export function main(_p5, one, two) {
  p5 = _p5

  p5.setup = _ => {
    console.log();
    p5.background(0);
  //   let height = document.body.clientHeight
  // let width   = document.body.clientWidth
    // var canvas = p5.createCanvas(p5.width,p5.height)
    var canvas = p5.createCanvas(375, 400);
    canvas.parent("p5Canvas");
    p5.frameRate(50);
    p5.smooth();
  	

  }

  p5.draw = _ => {
  	// p5.background(0);
  	p5.fill(0,5);
	p5.rect(-5, -5, 1250,510);
  // p5.text("# of vertices: " + p5.int(em), 10, 20);

  p5.translate(p5.width/2, p5.height/2);

	//count1++;
	if (newShape){
		none = p5.random(0.5);
			ntwo = p5.random(6.0);
		nthree = 0;
		scale = p5.random(100,200);
		step= p5.random(.05,10);
		newShape = false;
		count1 = 0;
	}
	
	p5.stroke(255, 22);
	p5.noFill();
  p5.beginShape();
  //addd vertices
	for(let i=1; i < 60; i++) {
  //for (float theta = 0; theta <= 2* PI; theta += 0.01){
   let rad = r(theta,
   1, //a
   1,  //b
   em,  //m
   none,  //n1
   ntwo,  //n2
   nthree   //n3
   );
		rad = rad* scale;
		theta = theta+step;
   let x = rad * p5.cos(theta);
   let y = rad * p5.sin(theta);
   p5.vertex(x,y);
  //}
	}
  p5.endShape();
}

function r(theta,  a,  b,  m,  n1, n2, n3) {
  return p5.pow(p5.pow(p5.abs(p5.cos(m* theta / 4.0) / a),n2)  +  
  p5.pow(p5.abs(p5.sin(m* theta / 4.0) / b),n3), -1.0 /n1) ;
}

}
export function up(){
     em = em+2;
}
export function down(){
  em = em-2;
}

export function flip(){
  newShape = true;
}



