function solution(X, Y) {

    const sortedX = X.split("").sort();
    const sortedY = Y.split("").sort();
    
    const result = [];
    let i = 0, j = 0;
    
    // 공통 숫자 찾기
    while(i < sortedX.length && j < sortedY.length){
        if(sortedX[i] === sortedY[j]){
            result.push(sortedX[i])
            i++; j++;
        }else if(sortedX[i] < sortedY[j]){
            i++
        }else{
            j++
        }
    }
    
    if (result.length === 0) return "-1";
    const answer = result.sort((a, b) => b - a).join(""); 
    return answer[0] === "0" ? "0" : answer; 
}
