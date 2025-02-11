function solution(m, n, board) {
    // 문자열을 2차원 배열로 나누기
    board = board.map((element)=> element.split(""));
    
    // 배열에서 지워질 블록 인덱스 구하기
    while(true){
        const remove = [];
        for(let i = 0; i < m -1; i++){ // 문자 abcd
            for(let j = 0; j < n-1; j++ ){ // 문자열의 길이 CCBDE
                if(
                    board[i][j] && // < 얘를 기준으로
                  board[i][j] === board[i][j + 1] &&
                  board[i][j] === board[i + 1][j] &&
                  board[i][j] === board[i + 1][j + 1]
                ){
                    remove.push([i,j])
                }
            }
        }
        // 배열에서 지워질 블록 -> 0으로 치환
        for(let i = 0; i < remove.length; i++){
            const col = remove[i][0];
            const row = remove[i][1];
            board[col][row] = 0
            board[col][row + 1] = 0
            board[col + 1][row] = 0
            board[col + 1][row + 1] = 0
        }
        // 깨질 블록이 없다면? 0 개수 필터링
        if(!remove.length){
            return [].concat(...board).filter((zero) => !zero).length;
        }
        
        // 깨진 블록을 없애고 위에서 블록을 당겨오기
        for(let j = 0; j < n; j++){
            let stack = [];
            for(let i = 0; i < m; i++){
                if(board[i][j] !== 0){
                    stack.push(board[i][j])
                }
            }
            while(stack.length < m) stack.unshift(0);
            for (let i = 0; i < m; i++) {
                board[i][j] = stack[i]; 
            }
        }
    }
}
/*
먼저 배열의 문자열을 2차원 배열로 나눕니다.
배열에서 지워질 블록의 인덱스를 구해 arr안에 넣습니다.
    - board의 i 가 CCBDE 인 경우: board[i][j] -> C, C, B, D, E
    - board[i][j] 가 있고 / board[i][j + 1] / 
배열에서 지워질 블록을 0으로 바꿉니다.
깨진 블록을 없애고 위에서 블록을 당겨옵니다.

*/