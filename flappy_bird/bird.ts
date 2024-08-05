import p5 from "p5";

export class Bird {
  y: number;
  x: number = 64;
  gravity: number = 0.7;
  lift: number = 12;
  velocity: number = 0;
  constructor(private p: p5) {
    this.y = p.height / 2;
  }
  show() {
    this.p.fill(255);
    this.p.ellipse(this.x, this.y, 32, 32);
  }
  up() {
    this.velocity += this.lift;
  }
  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y > this.p.height) {
      this.y = this.p.height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
