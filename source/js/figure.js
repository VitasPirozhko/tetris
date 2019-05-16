import drawFigureCube from './figureСube'
import {
    DEFAULT_FIGURE_POS_X,
    DEFAULT_FIGURE_POS_Y,
    BLOCK_WIDTH
} from './constants/constants'

export default class Figure {
    constructor(){
        this.drawFigureCube = new drawFigureCube
    }
    draw(figure, x, y){
        for(let i = 0; i < figure.length; i++){
            for(let j = 0; j < figure.length; j++){
                if(figure[i][j] === 1){
                    const figureCubePosX = x + (BLOCK_WIDTH * j);
                    const figureCubePosY = y + (BLOCK_WIDTH * i);

                    this.drawFigureCube.draw(figureCubePosX, figureCubePosY)
                }
            }
        }
    }
}