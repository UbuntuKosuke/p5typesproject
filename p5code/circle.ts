import p5 from "p5";
import { canvasWidth } from "./main";

export class Circle {
  private x: number;
  private y: number;
  private r: number;
  private dy: number;
  constructor(private p5: p5) {
    this.x = this.p5.random(0, canvasWidth);
    this.y = -50;
    this.r = this.p5.random(10, 20);
    this.dy = 2;
  }

  drawCircle() {
    this.p5.fill(255, 0, 0, 100);
    this.p5.ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  moveCircle() {
    this.y += this.dy;
  }
}
