import p5 from "p5";
import { Block } from "./objects/bloc";

const canvas = document.querySelector("div#sketch") as HTMLElement;
const sketch = (p: p5) => {
  const canvasWidth = 400;
  const canvasHeigh = 400;
  const blocks: Block[][] = [];
  let cols: number;
  let rows: number;
  const size = 10;
  const offset = 4;
  const d = 15;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeigh);
    cols = p.width / size;
    rows = p.height / size;
    for (let i = 0; i < cols; i++) {
      blocks[i] = [];
      for (let j = 0; j < rows; j++) {
        blocks[i][j] = new Block(
          p,
          size / 2 + i * size,
          size / 2 + j * size,
          size,
        );
      }
    }
    p.rectMode(p.CENTER);
  };
  p.draw = () => {
    p.background(0);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        blocks[i][j].display(offset, d);
      }
    }
  };
};
new p5(sketch, canvas);
