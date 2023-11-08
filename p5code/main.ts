import p5 from "p5";
import { Circle } from "./circle";

export const canvasWidth = 400;
export const canvasHeigh = 400;

const canvas = document.querySelector("div#sketch") as HTMLElement;
const sketch = (p: p5) => {
  const circles: Circle[] = [];

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeigh);
  };
  p.draw = () => {
    if (p.floor(p.random(0, 10)) == 0) circles.push(new Circle(p));

    p.background(130);
    // 描画処理など
    circles.forEach((c) => {
      c.moveCircle();
      c.drawCircle();
    });
  };
};
new p5(sketch, canvas);
