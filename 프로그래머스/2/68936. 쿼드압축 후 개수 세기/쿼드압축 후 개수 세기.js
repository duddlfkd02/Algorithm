function solution(arr) {
    let result = [0,0] // 0, 1 각각 개수
    
    // 압축 함수 - 현재 영역이 모두 같은 숫자인지
    function currentArea(x, y, size){
        let first = arr[x][y];
        let isSame = true;
        
        for(let i = x; i < x + size; i++){
            for(let j = y; j < y + size; j++){
                if(arr[i][j] !== first){
                    isSame = false;
                    break;
                }
            }
            if (!isSame) break;
        }
        
        if(isSame){
            result[first] += 1;
            return;
        }
        
        // 4등분 후 재귀 호출
        let half = size / 2;
        currentArea(x, y, half); 
        currentArea(x, y + half, half); 
        currentArea(x + half, y, half); 
        currentArea(x + half, y + half, half);
    }
    
    currentArea(0, 0, arr.length);
    return result;
}

/*
1. arr의 row[1],[arr.length -2](배열의 마지막 열/줄)의 각 인덱스 값이 모두 같은지 확인
2. 같다면 압축
3. 아니라면 4개의 균일한 정사각형으로 나눠서 탐색
*/