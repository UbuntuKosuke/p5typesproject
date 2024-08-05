import p5 from "p5";

export interface collidObj {
  x: number;
  y: number;
  r: number;
}

export class Ball {
  private collide = false;
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
  collided(object: collidObj) {
    const distance = this.p5.dist(object.x, object.y, this.x, this.y);
    if (distance <= object.r + this.r) {
      this.collide = true;
    } else {
      this.collide = false;
    }
  }
}
