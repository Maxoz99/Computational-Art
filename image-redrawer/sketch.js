let size = 100;
let img;
let size_slider;
let sample_slider;


function preload() {
  img = loadImage("assets/flowers.jpg");
  img.resize(0, windowHeight);
}

function setup() {
  createCanvas(img.width, windowHeight);
  rectMode(CENTER);
  frameRate(24);
  
  // choose own image files
  input = createFileInput(handleFile);
  input.position(1250, 300);

  background(240);
  
  // Size Slider
  let size_slider_text = createDiv("Brush Size");
  size_slider_text.position(1300, 35);
  size_slider = createSlider(0, 300, 100);
  size_slider.position(1250, 60);
  size_slider.style('width', '200px');
  
  // Sample slider
  let sample_slider_text = createDiv("Number of Samples");
  sample_slider_text.position(1280, 120);
  sample_slider = createSlider(1, 100, 10);
  sample_slider.position(1250, 150);
  sample_slider.style('width', '200px');
}



function draw() {
  size = size_slider.value()
  noStroke();
  
  // checks whether mouse is over image
  if (mouseIsPressed && mouseX < img.width && mouseY < img.height) {
    let myfill = sampleColorAverage(mouseX, mouseY, size, sample_slider.value());
    fill(myfill);
    rect(mouseX, mouseY, size, size);
  }
}

function keyPressed() {
   // clear screen
  if (key == "d") {
    background(240);
  }
  // modify size
  // smaller
  if (key == "-") {
    if (size >= 2) {
      size -= 4;
    }
  }
  // larger
  if (key == "+") {
    if (size <= 300) {
      size += 4;
    }
  }
  // show background image
  if (key == "b") {
    image(img, 0, 0);
  }
  // save current canvas
  if (key == "s") {
    saveCanvas("download", 'png');
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
    col[i] = img.get(randomSample(x, size), randomSample(y, size));
    
    // adding up color values squared for correct average
    red += col[i][0] * col[i][0];
    green += col[i][1] * col[i][1];
    blue += col[i][2] * col[i][2];
  }
  // return correctly averaged color
  return color(sqrt(red / col.length), sqrt(green / col.length), sqrt(blue / col.length)); 
}

function randomSample(x, size) {
  let direction = random(1)
  if (direction == 0) {
    return x - random(size);
  } else {
    return x + random(size);
  }
}

// gets called everytime the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  working_image = img.resize(0, windowHeight);
}

// callback function for image selection
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}