function solution(n, info) {
    let maxDiff = 0;
    let result = [-1];
    
    const dfs = (index, remain, ryan) => {
        if(index === 11){
            if(remain > 0) ryan[10] += remain
            
            let ryanScore = 0, apeachScore = 0;
            for(let i = 0; i < 11; i++){
                if(info[i] === 0 && ryan[i] === 0) continue;
                if(ryan[i] > info[i]) {ryanScore += 10 - i;}
                else { apeachScore += 10 - i}
            }
            
            
            if(ryanScore > apeachScore){
                const diff = ryanScore - apeachScore;
                if(diff > maxDiff) {
                    maxDiff = diff;
                    result = [...ryan];
                } else if(diff === maxDiff){
                    for(let i = 10; i >= 0; i--){
                        if(ryan[i] > result[i]){
                            result = [...ryan];
                            break;
                        } else if(ryan[i] < result[i]) break;
                    }
                }
            }
            
            
            if(remain > 0) ryan[10] -= remain;
            return;
            
        }
        
        if (remain > info[index]) {
          ryan[index] = info[index] + 1;
          dfs(index + 1, remain - ryan[index], ryan);
          ryan[index] = 0;
        }

        // 이 점수 포기하는 경우
        dfs(index + 1, remain, ryan);
      }

      dfs(0, n, Array(11).fill(0));
      return result;
}