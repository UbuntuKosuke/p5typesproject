import p5 from "p5";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Ball } from "./ball";

export const canvasWidth = 640;
export const canvasHeigh = 480;

const canvas = document.querySelector("div#sketch") as HTMLElement;
const sketch = (p: p5) => {
  const circles: Circle[] = [];
  const rectangles: Rectangle[] = [];
  let ball: Ball;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeigh);
    ball = new Ball(p, p.mouseX, p.mouseY);
  };
  p.draw = () => {
    p.background(0);
    ball.moveBall(p.mouseX, p.mouseY);
    ball.drawBall();
    if (p.floor(p.random(0, 10)) == 0) {
      circles.push(new Circle(p));
      rectangles.push(new Rectangle(p));
    }

    // 描画処理など
    circles.forEach((c) => {
      ball.collided(Circle);
      c.moveCircle();
      c.drawCircle();
    });
    rectangles.forEach((r) => {
      r.moveRect();
      r.drawRect();
    });
  };
};
new p5(sketch, canvas);
