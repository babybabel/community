let img;

function preload(){
    img = loadImage("nug.png");
}

function setup(){
    let c = createCanvas(800,800);
    c.parent('canvas-wrapper');
}

function draw(){
    ellipse(200,200,50,50);
    image(img, mouseX, mouseY, 100, 100);
}