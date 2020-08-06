//@author Chanakya Lahiri
//P5 JS libraries used
var ball = { //the ball dimensions
  x: 300,
  y: 200,
  xspeed: 9,
  yspeed: -3
};

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
    move();
    bounce();
    display();
}

function move() { //movement speed of the ball
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() { //staying within the screen
  if(ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if(ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill(); //orbital shape of ball
  for(var i=0;i<10;i++) //hypnoball generation
  {
    var x = Math.floor((Math.random() * 150) + 1);
    ellipse(ball.x,ball.y,x,x);
  } 
}
