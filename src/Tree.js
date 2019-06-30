let theta;
let exPosition = 160;

export function main(_p5) {
  let p5 = _p5

  p5.setup = _ => {
   
    var canvas = p5.createCanvas(375, 400)
    canvas.parent("p5Canvas4");
    
    }

  p5.draw = _ => {
    
  	 p5.background(0);
       p5.frameRate(30);
    p5.stroke(255);
    p5.strokeWeight(.6);
   
  //p5.translate(p5.width/2, p5.height/2);

  // Let's pick an angle 0 to 90 degrees based on the mouse position
 //  base on  slider from -600 to 600

  let a = (exPosition / p5.width) * 90;
  // Convert it to radians
  theta = p5.radians(a);
  // Start the tree from the bottom of the screen
  p5.translate(p5.width/2,p5.height);
  // Draw a line 120 pixels
  p5.line(0,0,0,-120);
  // Move to the end of that line
  p5.translate(0,-120);
  // Start the recursive branching!
  branch(120);

}

function branch( h) {
  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;
  
  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    p5.push();    // Save the current state of transformation (i.e. where are we now)
    p5.rotate(theta);   // Rotate by theta
    p5.line(0, 0, 0, -h);  // Draw the branch
    p5.translate(0, -h); // Move to the end of the branch
    branch(h);       // Ok, now call myself to draw two new branches!!
    p5.pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
    
    // Repeat the same thing, only branch off to the "left" this time!
    p5.push();
    p5.rotate(-theta);
    p5.line(0, 0, 0, -h);
    p5.translate(0, -h);
    branch(h);
    p5.pop();
  }
}
function mousePressed() {
  // if (p5.mouseX > 0 && p5.mouseX < 100 && p5.mouseY > 0 && p5.mouseY < 100) {
    
  
}
// function size(){
//   console.log('now');
//   let fs = p5.fullscreen();
//   p5.fullscreen(!fs);
// }
}
export function slideMe(ex){
  exPosition = ex;
}
export function size(){
  console.log('now');
  //   let fs = p5.fullscreen();
  //   p5.fullscreen(!fs);
}
