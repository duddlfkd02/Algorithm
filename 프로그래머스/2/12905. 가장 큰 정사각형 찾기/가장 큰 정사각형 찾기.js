function solution(board){
    let side = 0;
    let row = board.length;
    let col = board[0].length;
    
    let boardArr = Array.from({length : row}, () => Array(col).fill(0));
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === 1){
                if(i === 0 || j === 0){
                    boardArr[i][j] = 1;
                }else {
                    boardArr[i][j] = Math.min(boardArr[i - 1][j], boardArr[i][j - 1], boardArr[i - 1][j - 1]) + 1;
                }
                side = Math.max(side, boardArr[i][j])
            }
        }
    }
    return side * side;
}