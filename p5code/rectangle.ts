import p5 from "p5";
import { canvasWidth } from "./main";

export class Rectangle {
  private x: number;
  private y: number;
  private w: number;
  private h: number;
  private dy: number;
  constructor(private p5: p5) {
    this.x = p5.random(0, canvasWidth);
    this.y = -50;
    this.w = p5.random(10, 20);
    this.h = p5.random(10, 20);
    this.dy = 2;
  }

  drawRect() {
    this.p5.fill(255, 0, 255, 100);
    this.p5.rect(this.x, this.y, this.w, this.h);
  }
  moveRect() {
    this.y += this.dy;
  }
}
