import p5 from "p5";
import image from "./images/monalisa.jpeg";

const canvas = document.querySelector("div#sketch") as HTMLElement;
const sketch = (p: p5) => {
  const canvasWidth = 400;
  const canvasHeigh = 500;
  const sizes: number[][] = [];
  let cols;
  let rows;
  const size = 10;
  let img: p5.Image;

  p.preload = () => {
    img = p.loadImage(image);
  };
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeigh);
    cols = p.width / size;
    rows = p.height / size;
    for (let i = 0; i < cols; i++) {
      sizes[i] = [];
      for (let j = 0; j < rows; j++) {
        sizes[i][j] = 0;
      }
    }
    p.rectMode(p.CENTER);

    img.resize(400, 0);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const c = img.get(i * size, j * size);
        sizes[i][j] = p.map(p.brightness(c), 0, 100, size * 2, 0);
        p.fill(c);
        p.noStroke();
        p.rect(
          size / 2 + i * size,
          size / 2 + j * size,
          sizes[i][j],
          sizes[i][j],
        );
      }
    }
  };
  p.draw = () => {
    // p.background(255);
  };
};
new p5(sketch, canvas);
