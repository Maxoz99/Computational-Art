# How to set up locally?

1. Download the folder to your local computer

2. Run the index.html file via a webbrowser.

Use either the built-in webbrowser from Brackets (-> Live Preview) or use your own. 

A guide on how to configure your own server can be found [here](https://github.com/processing/p5.js/wiki/Local-server)

## Using your own images

To use own images replace the image path in the **preload()** function of *sketch.js* 

Example:
```javascript
function preload() {
  // Preloading images for later use
  img1 = loadImage("assets/flowers.jpg"); // replace one of the paths with your own 
  img2 = loadImage("assets/fruits.jpg"); 
  img3 = loadImage("assets/clownfish.jpg");
  img4 = loadImage("assets/sunset.jpg");
  img5 = loadImage("assets/winter.jpg");
  img6 = loadImage("assets/test.png");  
}

function setup() {
    ...
```

You can use any .jpg or .png. The image will be scaled accordingly when you load it in.