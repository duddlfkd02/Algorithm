function isPrimeNum(num){
   // 소수 판별 함수
    if(num <= 1) return false;  // 1 이하는 소수 아님
    if(num === 2) return true; // 유일한 짝수 소수 2는 소수이다
    
    // 짝수 제외
    if(num % 2 === 0) return false;
    
    // 홀수 검사
    for(let i = 3; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    // 1. n을 k진수로 바꾼다. + 0 기준으로 숫자 나누기
    let count = 0;
    let numArr = n.toString(k).split("0");
    
    // 2. 조건에 맞는거만 찾아서 카운트 증가
    for(let i = 0; i < numArr.length; i++){
        if(numArr[i] !== "" && isPrimeNum(Number(numArr[i]))) {  
            count++;
        }
    }
    return count;
}