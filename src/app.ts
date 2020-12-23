/// <reference path="../node_modules/@types/p5/global.d.ts" />
import * as P5 from "p5";

console.log("Start of the visualiser");

var sketch = (p5: P5) => {
    p5.setup = () => {
        const canvas = p5.createCanvas(600, 400);
    }

    p5.draw = () => {
        p5.background(245);
        p5.ellipse(50, 50, 80, 80);
    }
}

new P5(sketch)