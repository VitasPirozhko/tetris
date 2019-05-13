/*
// разбитие поля на квадраты (хз нужно ли, пока коментирую)
/!*const fieldMarking = (end, endOfLine, horizontal) => {
    for(let i = blockWidth; i < end; i += blockWidth){
        if(horizontal){
            ctx.moveTo(i, 0);
            ctx.lineTo(i, endOfLine);
        }else{
            ctx.moveTo(0, i);
            ctx.lineTo(endOfLine, i);
        }
    }
};

fieldMarking(canvas.width, canvas.height, true);
fieldMarking(canvas.height, canvas.width, false);
ctx.stroke();*!/

const loop = (function(){
    return requestAnimationFrame ||
        webkitRequestAnimationFrame ||
        mozRequestAnimationFrame ||
        oRequestAnimationFrame ||
        msRequestAnimationFrame;
})();

class Constants {
  static asd = 123;
}

class Figure {
    constructor(){
        this.canvas = document.getElementById('game-body');
        this.ctx = this.canvas.getContext('2d');
        this.blockWidth = 42;
    }
}

class FigureL extends Figure{  //рисование L
    drawL(startX, startY, step){
        let figureHeight;
        let figureWidth;
        switch (step){
            default: {
                this.ctx.fillRect(startX,startY,this.blockWidth,( 3 * this.blockWidth));
                this.ctx.fillRect(startX + this.blockWidth,startY + (2 * this.blockWidth),this.blockWidth,this.blockWidth);
                figureHeight = 3 * this.blockWidth;
                figureWidth = 2 * this.blockWidth;
                break;
            }
            case 1: {
                this.ctx.fillRect(startX,startY,(3 * this.blockWidth),this.blockWidth);
                this.ctx.fillRect(startX,startY + this.blockWidth,this.blockWidth,this.blockWidth);
                figureHeight = 2 * this.blockWidth;
                figureWidth = 3 * this.blockWidth;
                break;
            }
            case 2: {
                this.ctx.fillRect(startX,startY,this.blockWidth,this.blockWidth);
                this.ctx.fillRect(startX + this.blockWidth ,startY,this.blockWidth,(3 * this.blockWidth));
                figureHeight = 3 * this.blockWidth;
                figureWidth = 2 * this.blockWidth;
                break;
            }
            case 3: {
                this.ctx.fillRect(startX + (2 * this.blockWidth),startY + this.blockWidth,this.blockWidth,this.blockWidth);
                this.ctx.fillRect(startX ,startY + (2 * this.blockWidth),(3 * this.blockWidth),this.blockWidth);
                figureHeight = 3 * this.blockWidth;
                figureWidth = 3 * this.blockWidth;
                break;
            }
        }
        return [figureWidth, figureHeight,startX, startY, 'figureL', step];
    }
}
const figureL = new FigureL('figureL');

class Game {
    constructor(){
        this.canvas = document.getElementById('game-body');
        this.ctx = this.canvas.getContext('2d');
        this.blockWidth = 42;
        const fps = 1.5;
        this.fpsInterval = 1000 / fps;
        this.figureStep = 0;
        this.figurePosY = 0;
        this.figurePosX = 168;
        this.safeFigure = [];
    }
    gameEngineStep = () => {
        loop(this.gameEngineStep);
        const now = Date.now();
        const elapsed = now - this.then;
        if (elapsed > this.fpsInterval) {
            this.then = now - (elapsed % this.fpsInterval);
            this.gameEngine();
        }
    };
    gameEngineStart(){
        this.then = Date.now();
        this.gameEngine = this.drawGame;
        this.handlers();
        this.gameEngineStep();
    }
    handlers(){
        document.onkeydown = (event) => {
            switch (event.keyCode){
                case 37 :{
                    this.figurePosX <= 0 ? this.figurePosX = 0 : this.figurePosX -= this.blockWidth;
                    break;
                }
                case 38 :{
                    this.figureStep === 3 ? this.figureStep = 0 : this.figureStep++;
                    break;
                }
                case 39 :{
                    this.figurePosX + this.figureWidth > 378 ? this.figurePosX = this.figurePosX : this.figurePosX += this.blockWidth;
                    break;
                }
            }
        };
    }
/!*    // рисование квадрата
    drawASquare(startX, startY){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(startX,startY,this.blockWidth,this.blockWidth);
        this.ctx.fillRect(startX + this.blockWidth,startY,this.blockWidth,this.blockWidth);
        this.ctx.fillRect(startX,startY + this.blockWidth,this.blockWidth,this.blockWidth);
        this.ctx.fillRect(startX + this.blockWidth,startY + this.blockWidth,this.blockWidth,this.blockWidth);
    };*!/
    drawGame(){
        console.log(Constants.asd);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        /!*this.drawASquare(168, 0)*!/
        const figureData = figureL.drawL(this.figurePosX, this.figurePosY, this.figureStep);
        this.figureWidth = figureData[0];
        if(this.canvas.height -  this.figurePosY <= figureData[1]){
            this.safeFigure.push({
                figurePosX: figureData[2],
                figurePosY: figureData[3],
                figureType: figureData[4],
                figureStep: figureData[5]
            });

            this.figurePosX = 168;
            this.figurePosY = 0;
            this.figureStep = 0;
        }

        this.figurePosY += this.blockWidth;
        this.safeFigure.map((figureData) => {
             switch (figureData.figureType) {
                 case 'figureL': {
                     figureL.drawL(figureData.figurePosX, figureData.figurePosY, figureData.figureStep);
                     break;
                 }
             }
        });

    };
}


const game = new Game('game');
game.gameEngineStart();

*/
console.log(1)