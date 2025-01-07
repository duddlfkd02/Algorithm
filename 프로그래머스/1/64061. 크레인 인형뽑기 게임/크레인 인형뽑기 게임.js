function solution(board, moves) {
    // board 열을 스택처럼 써보기
    // moves는 1부터 시작 -> 0으로 만들기
    // pop메서드로 moves를 인덱스로 접근해서 board 마지막 요소 빼기
    // result 빈 배열에 뺀 요소 넣은 후, 같은 숫자 연달아 있는거 count하기
    
    const basket = [];
    let count = 0;
    
    for(const move of moves){
        const col = move - 1; // board pop 할 때 index 로 사용할 것
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