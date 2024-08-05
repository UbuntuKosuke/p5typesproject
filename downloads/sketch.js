let blocks = []; 
let cols; let rows; 
let size = 10; let offset = 4;
let d = 15;

function setup() {
  createCanvas(400, 400);
  cols = width/size;
  rows = height/size;
  for (let i=0; i<cols; i++){
    blocks[i] = [];
    for (let j=0; j<rows; j++){
      blocks[i][j] = new Block(size/2 + i*size, size/2 + j*size, size, size);
    }
  }
  rectMode(CENTER);
}

function draw() {
  background(0);
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      blocks[i][j].display(offset, d);
    }
  }
}