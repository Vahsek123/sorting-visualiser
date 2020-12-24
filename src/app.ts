/// <reference path="../node_modules/@types/p5/global.d.ts" />
import * as P5 from "p5";
import { resolve } from "../webpack.config";

const bubbleButton = document.getElementById('bSort');
const mergeButton = document.getElementById('mSort');
const resetButton = document.getElementById('reset');
bubbleButton.addEventListener("click", (e: Event) => bubbleSort(array));
mergeButton.addEventListener("click", (e: Event) => mergeSort(array));
resetButton.addEventListener("click", (e: Event) => array = createArray());

let array: number[] = [];
let active: number[] = [];
console.log(array);

function createArray() {
    var idk = [];
    for (let k = 0; k < 100; k++) idk[k] = k;

    for (let i = idk.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [idk[i], idk[j]] = [idk[j], idk[i]];
    }
    return idk;
}

// function bubbleSortCopy(array: number[]) {
//     var copy = array.slice();
//     bubbleSort(copy);
//     return;
// }

async function bubbleSort(a: number[]) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < a.length; j++) {
            if (a[j] < a[j-1]) {
                [a[j-1], a[j]] = [a[j], a[j-1]];
            }
        }
        array = a;
        await sleep(100);
    }
}

function mergeSort(a: number[]): number[] {
    // console.log('merge sort');
    const mid = a.length / 2;

    if (a.length <= 1) {
        return a;
    }

    var left = a.splice(0, mid);
    // console.log(Array.isArray(left) + " " + Array.isArray(a));

    return merge(mergeSort(left), mergeSort(a));
}

function merge(left: number[], right: number[]) {
    let merged = [];
    // console.log('merge ' + left + "\n" + right);
    // console.log(left.length + " " + right.length);
    // console.log(Array.isArray(left) + " " + Array.isArray(right));
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }   
    
    
    // console.log('merge done ' + left);
    return [].concat(merged, left, right);
}

async function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var sketch = (p5: P5) => {
    p5.setup = () => {
        const canvas = p5.createCanvas(1000, 600);
        array = createArray();
    }

    p5.draw = () => {
        p5.background(0);

        for (let i = 0; i < 100; i++) {
            p5.rect(10*i, 600, 10, -array[i]*5);
        }
    }
}

new P5(sketch);