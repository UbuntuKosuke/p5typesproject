import p5 from "p5";
import { Letter } from "./objects/letters";
import image from "./images/T.png";

export const canvasWidth = 400;
export const canvasHeigh = 400;

const canvas = document.querySelector("div#sketch") as HTMLElement;
const sketch = (p: p5) => {
  const letters: Letter[][] = [];
  let cols: number;
  let rows: number;
  const size = 10;
  const offset = (2 / 5) * size;
  let img: p5.Image;

  p.preload = () => {
    img = p.loadImage(image);
  };

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeigh);
    p.angleMode(p.DEGREES);
    cols = p.width / size;
    rows = p.height / size;
    let isLetter;
    for (let i = 0; i < cols; i++) {
      letters[i] = [];
      for (let j = 0; j < rows; j++) {
        const c = img.get(i * size, j * size);
        if (p.brightness(c) == 0) {
          isLetter = true;
        } else {
          isLetter = false;
        }
        letters[i][j] = new Letter(
          p,
          size / 2 + i * size,
          size / 2 + j * size,
          size - offset,
          i * size + j * size,
          isLetter,
        );
      }
    }
  };
  p.draw = () => {
    p.background(0);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        letters[i][j].display();
        letters[i][j].move();
      }
    }
  };
};
new p5(sketch, canvas);
