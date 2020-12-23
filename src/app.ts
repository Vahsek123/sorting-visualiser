/// <reference path="../node_modules/@types/p5/global.d.ts" />
import * as P5 from "p5";

const button = document.querySelector('button');
button.addEventListener("click", (e: Event) => bubbleSort(array));

function createArray() {
    var idk = [];
    for (let k = 0; k < 100; k++) idk[k] = k;

    for (let i = idk.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [idk[i], idk[j]] = [idk[j], idk[i]];
    }
    return idk;
}

function bubbleSort(array: number[]) {
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[j] < array[j-1]) {
                [array[j-1], array[j]] = [array[j], array[j-1]];
            }
        }
    }
    
}

var array = createArray();
console.log(array);

var sketch = (p5: P5) => {
    p5.setup = () => {
        const canvas = p5.createCanvas(1000, 600);
    }

    p5.draw = () => {
        p5.background(0);

        for (let i = 0; i < 100; i++) {
            p5.rect(10*i, 600, 10, -array[i]*5);
        }
    }
}

new P5(sketch);