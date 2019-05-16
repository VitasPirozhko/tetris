import '../css/main.css'

import {
    CTX,
    FPS,
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    DEFAULT_FIGURE_POS_X,
    DEFAULT_FIGURE_POS_Y
} from './constants/constants'

import { loop } from './main';
import Figure from "./figure";

class Tetris{
    constructor(){
        this.Figure = new Figure;
    }
    run(){
        this.step();
    }
    step(){
        const step = this.step.bind(this);
        setTimeout(function() {
            loop(step);
        }, 1000 /FPS);

        this.draw();
    };
    draw(){
        CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        const figureL = [
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
        ];

        CTX.save();
        CTX.rotate(90 * Math.PI / 180);
        CTX.translate(250, -350)
        this.Figure.draw(figureL, DEFAULT_FIGURE_POS_X, DEFAULT_FIGURE_POS_Y);
        CTX.restore();


        this.Figure.draw(figureL, DEFAULT_FIGURE_POS_X, DEFAULT_FIGURE_POS_Y + 378);
    };
}

new Tetris('tetris').run();