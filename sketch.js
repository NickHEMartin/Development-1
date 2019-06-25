var time = 0;
var r = 185;
var g = 66;
var b = 26;

function setup() {
  createCanvas(600,600);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(185,66,26);
}

function draw() {
  noStroke();
  background(r,g,b,10);
  
  translate(300,300);
  scale(sin(time));
  
  for(i = 0; i < 20; i++){
    var x = i + frameCount / 200.0;
    var y = i + frameCount / 200.0;
    var z = 0;
    
    x = map(cos(time + z), -1, 1, -200, 200);
    y = map(sin(time + z), -1, 1, -200, 200);
    
    fill(224,214,172);
    ellipse(x,y,50,50);
    ellipse(y,x,50,50);
    ellipse(-x,-y,50,50);
    ellipse(-y,-x,50,50);
    rotate(45);
    ellipse(x,y,50,50);
    ellipse(y,x,50,50);
    ellipse(-x,-y,50,50);
    ellipse(-y,-x,50,50);
    
    z = z + 50;
  }  
    
    //r = r - 159
    //g = g + 100
    //b = b + 159
  time++;
}