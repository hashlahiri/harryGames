//@author Chanakya Lahiri
//P5 JS libraries used
let bubble1, bubble2; //assuming the variables
class Bubble {
  constructor() { //calling the base constructor of each bubble
    this.x = 700;
    this.y = 350;
  }
  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-10,10);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x,this.y,24,24);
  }
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bubble1 = new Bubble(); //creating the bubble object
  bubble2 = new Bubble();
}
function draw() {
  background(0);
  //movement and display
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
