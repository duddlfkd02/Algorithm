function solution(a, d, included) {
    let sum = 0;
    for(let i = 0; i < included.length; i++){
        // 등차수열 첫번째 항 계산하기
        const term = a + i * d
        if(included[i]){
            sum += term;
        }
    }
    return sum
}