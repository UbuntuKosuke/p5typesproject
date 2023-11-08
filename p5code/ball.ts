import p5 from "p5";

export class Ball {
  constructor(
    private p5: p5,
    private x: number,
    private y: number,
    private r: number = 25,
  ) {}
  drawBall() {
    this.p5.fill(100);
    this.p5.ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  moveBall(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
