import p5 from "p5";

export const canvasWidth = 400;
export const canvasHeigh = 400;

const canvas = document.querySelector("div#sketch") as HTMLElement;
const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeigh);
    p.bezierVertex;
  };
  p.draw = () => {
    p.background(130);
  };
};
new p5(sketch, canvas);
