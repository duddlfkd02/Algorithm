function solution(board) {
    let oCount = 0;
    let xCount = 0;
    
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] === "O") oCount++;
            if(board[i][j] === "X") xCount++;
        }
    }
    
    // O의 개수 : X보다 작거나 1 초과 많으면 안 됨
    if(oCount < xCount || oCount > xCount + 1) return 0;
    
    // 가로 세로 대각선 비교 후 빙고 체크
    const isWin = (player) => {
        // 가로 세로
        for(let i = 0; i < 3; i++){
            if(board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
            if(board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
        }
        // 대각선 비교
        if(board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
        if(board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
        return false;
    }
    
    const oWin = isWin("O")
     const xWin = isWin("X")
    
     if(oWin && oCount !== xCount + 1) return 0;
    if (xWin && oCount !== xCount) return 0;
    
    return 1;
}
