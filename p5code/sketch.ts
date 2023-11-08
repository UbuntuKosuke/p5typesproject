import p5 from "p5";
import { Circle } from "./circle";
import { canvasWidth, canvasHeigh } from "./main";

export const sketch = (p: p5) => {
  let c: Circle;
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeigh);
    c = new Circle(p);
  };
  p.draw = () => {
    p.background(220);
    // 描画処理など
  };
};
