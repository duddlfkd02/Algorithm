function solution(board, moves) {
    const basket = [];
    let count = 0;
    
    for(const move of moves){
        const col = move - 1; 
        for(let i = 0; i < board.length; i++){
            if(board[i][col] !== 0){
                const selectDoll = board[i][col];
                board[i][col] = 0;
                
                // 바구니
                if(basket[basket.length -1] === selectDoll){
                    // 인형 겹치면 제거
                    basket.pop();
                    count += 2;
                }else{
                    basket.push(selectDoll);
                }
                break;
            }
        }
    }
    return count;
}