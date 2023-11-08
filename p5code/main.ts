import p5 from "p5";
import { Circle } from "./circle";

export const canvasWidth = 400;
export const canvasHeigh = 400;

const canvas = document.querySelector("div#sketch") as HTMLElement;
const sketch = (p: p5) => {
  const circles: Circle[] = [];
  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(p));
  }

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeigh);
    p.background(130);
  };
  p.draw = () => {
    // if (p.floor(p.random(0, 10)) == 0) circles.push(new Circle(p));

    // 描画処理など
    circles.forEach((c) => c.drawCircle());
  };
};
new p5(sketch, canvas);
