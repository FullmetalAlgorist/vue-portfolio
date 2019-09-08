// //Idea from https://www.youtube.com/watch?v=_CAtiymmOaU
// //Background from https://www.pexels.com/photo/photo-of-star-clusters-107956/

// Globe[] universe;
// int numberOfPlanets;
// int resolution;
// //var img;
// //var lcm;


// void setup() {
//   //size(1300, 650);
//   fullScreen();
//   colorMode(HSB, 360);
//   textAlign(CENTER);
//   textSize(40);
//   translate(width/2, height/2);  
  
//   numberOfPlanets =  6;
//   resolution =2;
//   universe = new Globe[numberOfPlanets];
  
//   reset();
// }

// void draw() {
//   //fill(0,5);
//   //rect(-5,-5,width,height);
//   translate(width/2, height/2);  
//   for(int i = 0; i < numberOfPlanets; i++) {
//     universe[i].move();
    
//   }  
//   //if(lcm > 0) {
//     for(int i = 0; i < numberOfPlanets; i++) {
//       universe[i].show();
//     }  
//   //  lcm--;
//   //}
// }

// void mousePressed() {
//   if(mouseButton == LEFT)
//     reset();
// }

// void keyPressed() {
//   if (keyCode == 83)
//     save("Image.png");
// }

// void reset() {
//   for(int i = 0; i < numberOfPlanets; i++) {
//     universe[i] = new Globe(map(i, -1, numberOfPlanets-1, 0, height/2*0.95), 0, (int)(random(50)-25), i);
//   }
//   //if(numberOfPlanets == 2) {
//   //  lcm = lcm_two_numbers((int)(360/universe[0].speed), (int)(360/universe[1].speed));
//   //  console.log(lcm);
//   //}
//   translate(-width/2, -height/2);  
//   background(0);
//   //image(img, 0, 0);  
// }


// class Globe{
//     float radius; //Radius of the planet's orbit
//    int degrees; //Starting degree of the planet in its orbit
//    int speed; //Speed it travels clockwise (negative for counterclockwise)
//    float x;
//    float y;
//    int index;
//    float centerX; //random(-200, 200);
//    float centerY; //random(-200, 200);
 
//  Globe(float r_, int deg_, int s_, int i_) {
//      radius = r_; //Radius of the planet's orbit
//    degrees = deg_; //Starting degree of the planet in its orbit
//    speed = s_; //Speed it travels clockwise (negative for counterclockwise)
//     x = 0;
//     y = 0;
//     index = i_;
//     centerX = 0; //random(-200, 200);
//     centerY = 0; //random(-200, 200);
//  }
//    void move() {
//      x = cos(radians(degrees))*radius + centerX;
//      y = sin(radians(degrees))*radius + centerY;
//      degrees += (int)((speed*resolution)/(2*PI*radius)*360);
//      degrees = degrees % 360;
//    }
   
//    void show() {
//      //Find and draw a line to all other planets
//      //noFill();
//      strokeWeight(.2);
//      stroke(0, 0, 360, 180);
//      //for(var i = 0; i < numberOfPlanets; i++) {
//      if(index > 0) {
//        for(int i = index-1; i < index; i++) {
        
//           //float bright = map(noise(x,y),0,1,0,255);
//           //println(bright);
//            //stroke(bright, 360, 360);
//          line(x, y, universe[i].x, universe[i].y);
//          //ellipse(x,y,1,1);
//          //ellipse(universe[i].x,universe[i].y,1,1);
//        }
//      }
 
//      //strokeWeight(1);
//      //ellipse(centerX, centerY, radius*2, radius*2);
//    }
//    }