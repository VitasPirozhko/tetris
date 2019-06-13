import '../css/main.css'
import {
    CTX,
    FPS,
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    DEFAULT_FIGURE_POS_X,
    DEFAULT_FIGURE_POS_Y,
    BLOCK_WIDTH
} from './constants/constants'
import { widthCalc } from './helpers'


import { loop } from './main';
import figureRotate from './figureRotate'
import Figure from './figure'

class Tetris{
    constructor(){
        this.figureRotate = new figureRotate;
        this.Figure = new Figure;
        this.posX = DEFAULT_FIGURE_POS_X;
        this.posY = DEFAULT_FIGURE_POS_Y;
        this.figureL = [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
    }
    run(){
        this.step();
    }
    step(){
        const step = this.step.bind(this);
        setTimeout(function() {
            loop(step);
        }, 500 /FPS);

        this.draw();
    };
    runFigure(){
        const figureWidth = widthCalc(this.figureL)[0];
        const firstVerticalRow = widthCalc(this.figureL)[1];

        document.onkeydown = (event) => {
            switch (event.keyCode){
                case 37 :{
                    if(this.posX > 0 || (!firstVerticalRow && this.posX > -BLOCK_WIDTH)) {
                        this.posX = this.posX - BLOCK_WIDTH;
                    }
                    break;
                }
                case 38 :{
                    this.figureL = this.figureRotate.rotate(this.figureL);
                    if(this.posX < 0){
                        this.posX = 0
                    }
                    if(this.posX === (CANVAS_WIDTH - BLOCK_WIDTH * 2) && firstVerticalRow){
                        this.posX -= BLOCK_WIDTH
                    }
                    break;
                }
                case 39 :{
                    if(firstVerticalRow && this.posX + figureWidth < CANVAS_WIDTH) {
                        this.posX = this.posX + BLOCK_WIDTH;
                    }else if(this.posX + figureWidth + BLOCK_WIDTH < CANVAS_WIDTH){
                        this.posX = this.posX + BLOCK_WIDTH;
                    }
                    break;
                }
            }
        };
    }
    draw(){
        CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        this.runFigure();

        this.Figure.draw(this.figureL, this.posX, this.posY);
    };
}

new Tetris('tetris').run();