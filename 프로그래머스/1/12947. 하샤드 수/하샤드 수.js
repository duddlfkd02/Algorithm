function solution(x) {
    // x 자리 수 나누기
    // 각 자리수 더한 값 변수에 지정 후 x 값이랑 나누기
    // 조건문으로 나누어지며면 true. false
    
    const splitNum = String(x).split("");
    let sumSplitNum  = 0;
    
    for(let i = 0; i < splitNum.length; i++){
        sumSplitNum += Number(splitNum[i]);
    }
    return x % sumSplitNum === 0 ? true : false
  
}