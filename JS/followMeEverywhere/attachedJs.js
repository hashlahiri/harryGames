//@author Chanakya Lahiri
//P5 JS libraries used
var circle = { //making of the object and its parameters
  x: 0,
  y: 200,
  diameter: 100
};
var col = 0;
var r = 0;
var b = 255;

function setup() {
  createCanvas(windowWidth, windowHeight); //flexible width and length to make it responsive
}
function draw() { //pretty self explanatory
  background(r,0,b);
  r = map(mouseX,0,windowWidth,0,255);
  b = map(mouseX,0,windowWidth,255,0);
  fill(250,200,200);
  ellipse(mouseX,mouseY,circle.diameter,circle.diameter);
}
