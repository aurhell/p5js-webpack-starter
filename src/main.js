import * as p5 from "p5/lib/p5.min.js";

let sketch = (s) => {
    s.setup = () =>{
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.background(40);
    }

    s.draw = () =>{
        s.textSize(64);
        s.fill(255);
        s.text('Enjoy p5.js !', window.innerWidth / 2 - 175, window.innerHeight / 2);
    }
}

const P5 = new p5(sketch);