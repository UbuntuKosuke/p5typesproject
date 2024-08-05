import p5 from "p5";

export class Block {
  private angle: number = 0;
  private color: number = 70;
  constructor(
    private p: p5,
    private x: number,
    private y: number,
    private size: number,
  ) {}

  display(offset: number, d: number) {
    this.p.push();
    this.p.noFill();
    this.p.stroke(this.color);
    this.p.translate(this.x, this.y);
    this.mouseHover(d);
    this.p.rotate(this.angle);
    this.p.rect(0, 0, this.size - offset, this.size - offset);
    this.p.pop();
  }
  mouseHover(d: number) {
    const distance = this.p.dist(this.p.mouseX, this.p.mouseY, this.x, this.y);
    if (distance < d) {
      this.angle += 0.1;
      this.color = 255;
    } else {
      if (this.angle > 0 && this.angle <= 10) {
        this.angle += 0.1;
      } else if (this.angle > 10) {
        this.angle = 0;
      }

      if (this.color > 70) {
        this.color -= 3;
      } else {
        this.color = 70;
      }
    }
  }
}
