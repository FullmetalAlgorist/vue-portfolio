//Written by Fullmetalalgorist (Mariah Vicary) 5/1/2018
//Creative Commons Attribution 4.0 International license
//Using parametric equations to replicate a 90s screensaver
//Toggle web display on/off by pressing 1, 2, or 3
//If only one web is showing enables menu and editing

//import controlP5.*;
//ControlP5 cp5;

let tail = false;
let menu = false;
let edit = 0;

//web1 variables
let one = true; //onscreen?
let scale1 = 50;
let c1 = 255;
let a1 = 120;
let speed1 = .008;
let numLines1 = 120;

//web2 variables
let two = true;
let scale2 = 100; 
let c2 = 200;
let a2 = 120;
let speed2 = .003;
let numLines2 = 50;

//web3 variables
let three = true;
let scale3 =   75;
let c3 = 255;
let a3 = 120;
let speed3 = .006;
let numLines3 = 75;

let T = 50;
let R = 25;
let S = 50;

export function main(_p5) {
  let p5 = _p5

  p5.setup = _ => {
    p5.background(0);
    let canvas = p5.createCanvas(375, 400)
    canvas.parent("p5Canvas2");
    //p5.frameRate(50);
    //p5.smooth();
  }

  p5.draw = _ => {
if (!tail) {
    p5.background(0);
  }

  p5.strokeWeight(.5);
  p5.push();
    p5.translate(p5.width/2, p5.height/2);
  if (one) {

    p5.stroke(c1, a1);
    for (let i= 0; i <numLines1; i++) {
      p5.line(x(T+i), y(T+i), x1(T+i), y1(T+i));
      T= T+speed1;
    }
  }
  if (two) {
    p5.stroke(c2, a2);

    for (let i= 0; i <numLines2; i++) {
      p5.line(x2(R+i), y2(R+i), x3(R+i), y3(R+i));
      R= R+speed2;
    }
  }
  if (three) {
    p5.stroke(c3, a3);
    for (let j= 0; j <numLines3; j++) {
      p5.line(x4(S+j), y4(S+j), x5(S+j), y5(S+j));
      S= S+speed3;
    }
  }
  p5.pop();
}

function x(t){
  return scale1*p5.cos(t/79 ) +scale1*p5.cos(t/57);
}
function y( t) {
  return scale1*p5.sin(t/105) + p5.sin(t/85)*scale1;
}
function x1( t) {
  return scale1*p5.cos(t/39) +scale1*p5.cos(t/42);
}
function y1( t) {
  return scale1*p5.sin(t/62) + p5.sin(t/39
    )*scale1;
}

function x2( t) {
  return scale2*p5.cos(t/53) +scale2*p5.cos(t/-18);
}
function y2( t) {
  return scale2*p5.sin(t/12) + p5.sin(t/30)*scale2;
}
function x3( t) {
  return scale2*p5.cos(t/27) +scale2*p5.cos(t/15);
}
function y3( t) {
  return scale2*p5.sin(t/19) + p5.sin(t/177)*scale2;
}
function x4( t) {
  return scale3*p5.cos(t/53) +scale3*p5.cos(t/-18);
}
function y4(t) {
  return scale3*p5.sin(t/12) + p5.sin(t/30)*scale3;
}
function x5( t) {
  return scale3*p5.cos(t/27) +scale3*p5.cos(t/15);
}
function y5( t) {
  return scale3*p5.sin(t/19) + p5.sin(t/177)*scale3;
}
}

export function uno(){
    one =!one;
    return one;
}
export function dos(){
 two = !two;
 return two;
}
export function tres(){
    three = !three;
    return three;
   }

   export function fast(fast){
    speed1 = (fast ? .090 : .005);
    speed2 = (fast ? .026 : .001);
    speed3 = (fast ? .060 : .002);
   }


//    lspeed1 = .005;

// let speed2 = .001;
// let speed3 = .002;