import p5 from "p5";

export const canvasWidth = 400;
export const canvasHeigh = 400;

let rSlider: p5.Element;
let gSlider: p5.Element;
let bSlider: p5.Element;

let r;

const canvas = document.querySelector("div#sketch") as HTMLElement;
const sketch = (p: p5) => {
  function storeData() {
    console.log("Red " + rSlider.value);
    p.storeItem("redValue", rSlider.value());
  }
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeigh);
    console.log(p.getItem("redValue"));
    r = p.getItem("redValue") || 0;

    rSlider = p.createSlider(0, 255, r);
    gSlider = p.createSlider(0, 255, 0);
    bSlider = p.createSlider(0, 255, 0);

    rSlider.changed(storeData);
  };
  p.draw = () => {
    const r: number = rSlider.value() as number;
    const g: number = gSlider.value() as number;
    const b: number = bSlider.value() as number;
    p.background(r, g, b);
  };
};
new p5(sketch, canvas);
