export default class figureRotate {
    rotate(figure){
        let afterRotateFigure = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        //поворот матрицы 3х3 по часовой стрелке (2 - размер матрицы которую нужно повернуть -1)
        for(let i = 0; i <= 2; i++){
            for(let j = 0; j <= 2; j++){
                afterRotateFigure[j][2 - i] = figure[i][j]

            }
        }
        return afterRotateFigure;
    }
}