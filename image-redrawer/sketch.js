// let slider;
let size;
let img;

function setup() {
  createCanvas(1920, 1300);
  angleMode(DEGREES);
  rectMode(CENTER);
  background(240);
  frameRate(24)
  img = loadImage("assets/test.jpeg")
  // slider = createSlider(1, 200, 100);
  // slider.position(10, height - 20);
  // slider.style('width', '300px');
  
  size = 100
}



function draw() {
  Image(img, 0, 0);
  strokeWeight(1);
  stroke(0,0,0,50)
  noFill()
  if (mouseIsPressed) {
    translate(mouseX, mouseY)
    rotate(random(360));
    rect(0, 0, size, size);
  }
  // clear screen
  if (keyIsPressed == true && key == "d") {
    background(240);
  }
  // modify size
  // smaller
  if (keyIsPressed == true && key == "-") {
    if (size >= 2) {
      size -= 2;
    }
  }
  // larger
  if (keyIsPressed == true && key == "+") {
    if (size <= 200) {
      size += 2;
    }
  }
}