function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-90);

   var hr = hour();
   var mn = minute();
   var sc = second();

  strokeWeight(8);
  stroke("red");
  noFill();
  var c1 = map(sc,0,60,0,360);
  arc(0,0,300,300,0,c1);

  stroke("green");
  var c2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,c2);

  stroke("blue");
  var c3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,c3);

  push();
  rotate(c1);
  stroke("red");
  line(0,0,100,0);
  pop();

  push();
  rotate(c2);
  stroke("green");
  line(0,0,75,0);
  pop();

  push();
  rotate(c3);
  stroke("blue");
  line(0,0,50,0);
  pop();

  stroke("black");
  point(0,0);
  
  drawSprites();
}