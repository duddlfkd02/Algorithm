function solution(k, score) {
    // 점수 전부 넣는 변수 1개, k번째까지 자른 변수 1개 총 2개
    const scoreArr = [];
    const result = [];
    
    for(const s of score){
        scoreArr.push(s)
        scoreArr.sort((a,b) => b - a);
        
        if(scoreArr.length > k){
            scoreArr.pop();
        }
        
        result.push(scoreArr[scoreArr.length - 1]);
    }
    return result;
    
}