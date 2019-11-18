let size;
let img;


function preload() {
  img = loadImage("assets/test.png");
}
function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  frameRate(24);
  pixelDensity(0.1);

  
  size = 100
  background(240);
}



function draw() {
  noStroke();

  if (mouseIsPressed) {
    let myfill = sampleColorAverage(mouseX, mouseY, size, 10);
    fill(myfill);
    rect(mouseX, mouseY, size, size);
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
  // show background image
  if (keyIsPressed == true && key == "b") {
    background(img);
  }
}


function sampleColorAverage(x, y, size, samples) {
  // initializing color array and color values
  let col = [];
  let red = 0;
  let green = 0;
  let blue = 0;
  
  for (i = 0; i < samples; i++) {
    // sampling
    col[i] = img.get(x + random(x - size, x + size), y + random(y - size, y + size));
    
    // adding up color squares for correct average
    red += col[i][0] * col[i][0];
    green += col[i][1] * col[i][1];
    blue += col[i][2] * col[i][2];
  }
  // return correctly averaged color
  return color(sqrt(red / col.length), sqrt(green / col.length), sqrt(blue / col.length)); 
}