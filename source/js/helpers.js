import { BLOCK_WIDTH } from './constants/constants'

export const widthCalc = (figure) => {
    let theNumberBlocks = 1;
    let firstVerticalRow = false;
    for(let i = 0; i < figure.length; i++){
        for(let j = 0; j < figure.length; j++){
            if(typeof figure[i][j - 1] !== "undefined") {
                if((figure[i][j] === 1) && (figure[i][j - 1] === 1))
                    theNumberBlocks++
            }
        }
        if(figure[i][0] === 1){
            firstVerticalRow = true;
        }

    }
   return [theNumberBlocks * BLOCK_WIDTH, firstVerticalRow]
};