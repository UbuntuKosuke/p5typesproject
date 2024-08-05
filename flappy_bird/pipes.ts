import p5 from "p5";
import { Bird } from "./bird";

export class Pipe {
  spacing: number;
  top: number;
  bottom: number;
  x: number;
  w: number;
  speed: number = 6;
  highlight: boolean = false;

  constructor(private p: p5) {
    this.spacing = 175;
    this.top = p.random(this.p.height / 6, (3 / 4) * this.p.height);
    this.bottom = this.p.height - (this.top + this.spacing);
    this.x = this.p.width;
    this.w = 80;
  }

  hits(bird: Bird) {
    if (bird.y < this.top || bird.y > this.p.height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }
  show() {
    this.p.fill(255);
    if (this.highlight) {
      this.p.fill(255, 0, 0);
    }
    this.p.rect(this.x, 0, this.w, this.top);
    this.p.rect(this.x, this.p.height - this.bottom, this.w, this.bottom);
  }
  update() {
    this.x -= this.speed;
  }
  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
