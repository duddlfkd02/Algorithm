function solution(n) {
    // 1. n을 2진수로 바꾼 후 1의 개수 구하기
    // 2. n보다 큰 숫자 중에서 조건에 만족하는 값 구하기
    const countNumOne = (num) => num.toString(2).split("1").length - 1;
    const nCount = countNumOne(n);
    
    let nextNumber = n + 1;
    
    while(countNumOne(nextNumber) !== nCount){
        nextNumber++
    }
    return nextNumber
}