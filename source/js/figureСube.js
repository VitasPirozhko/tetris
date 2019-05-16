import {
    BLOCK_WIDTH,
    CTX
} from './constants/constants'

export default class drawFigureCube{
    draw(x, y){
        CTX.fillRect(x,y,BLOCK_WIDTH,BLOCK_WIDTH);
    }
}

