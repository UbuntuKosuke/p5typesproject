import p5 from "p5";

export class Letter {
  private rt: number;
  private t: number;
  constructor(
    private p: p5,
    private ox: number,
    private oy: number,
    private r: number,
    private angle: number,
    private isLetter: boolean,
  ) {
    this.ox = ox;
    this.oy = oy;
    this.r = r;
    this.rt = r / 3;

    this.isLetter = isLetter;
    if (this.isLetter == true) {
      this.angle = -90;
    } else {
      this.angle = angle;
    }
    this.t = 0;
  }

  display() {
    this.p.stroke(255);
    this.p.push();
    this.p.translate(this.ox, this.oy);
    // const anglet = 90 - this.angle;
    const x = this.r * this.p.cos(this.angle);
    const y = this.r * this.p.sin(this.angle);
    // const xt = this.rt * this.p.cos(anglet);
    // const yt = this.rt * this.p.sin(anglet);
    const xt = this.rt * this.p.sin(this.angle);
    const yt = this.rt * this.p.cos(this.angle);
    this.p.line(0, 0, x, y);
    this.p.line(x - xt, y + yt, x + xt, y - yt);
    this.p.pop();
  }
  move() {
    const increment = 5 * this.p.sin(this.t);
    this.t += 1;
    this.angle += increment;
  }
}
