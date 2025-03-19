function solution(n) {
    let count = 0;
    let usedCols = new Set();
    let leftDiag = new Set();
    let rightDiag = new Set();
    
    function dfs(row){
        if(row === n){
            count++;
            return
        }
        
        for(let col = 0; col < n; col++){ 
            if(usedCols.has(col) || leftDiag.has(row - col) || rightDiag.has(row + col)){
                continue;
            }
            
            // 지금 위치에 퀸 배치하기
            usedCols.add(col)
            leftDiag.add(row - col);
            rightDiag.add(row + col);
            
            dfs(row + 1)
            
            usedCols.delete(col)
            leftDiag.delete(row - col);
            rightDiag.delete(row + col);
        }
    }
    dfs(0); // 1번째 행부터 시작
    return count;
}
    
    