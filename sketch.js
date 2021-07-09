let img;
function preload() {
  img = loadImage("1069078.jpg");
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(400, 400);
  cnv.center();
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  image(img, -250, -200, 500, 500);
  stroke(255);
  strokeWeight(1);
  textSize(50);
  textFont("Qahiri");
  text("sonic", -150, -150);
  rotate(0);
  let hou = hour();
  let min = minute();
  let sec = second();
  let milli = millis();
  console.log(`${hou}:${min}:${sec}`);
  stroke("black");
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 300, 300);

  let secondAngle = map(sec, 0, 60, 0, 360);

  let minuteAngle = map(min, 0, 60, 0, 360) + map(sec, 0, 60, 0, 6);

  let hourAngle = map(hou % 12, 0, 12, 0, 360);
  let milliAngle = map(milli, 0, 1000, 0, 360);
  stroke("#C2FFFF");
  // fill(255, 255, 255, 125);
  arc(0, 0, 250, 250, 0, secondAngle);

  stroke("#C2FFFF");
  arc(0, 0, 200, 200, 0, minuteAngle);

  stroke("#C2FFFF");
  arc(0, 0, 150, 150, 0, hourAngle);

  push();
  rotate(secondAngle);

  stroke("#C2FFFF");
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#C2FFFF");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#C2FFFF");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(milliAngle);
  stroke("#C2FFFF");
  arc(0, 0, 235, 235, 0, secondAngle);
  pop();
}
