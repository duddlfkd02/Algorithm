function solution(numbers) {
    const numSet = new Set();
    const numArr = numbers.split("");
    
    // 1. 소수 판별 함수
    function isPrime(num){
        if (num < 2) return false; // 0, 1 제외
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    // 2. 숫자 조합하는 함수
    function combination(arr, selectNum, currentNum = ""){ 
        if(currentNum.length > 0) numSet.add(Number(currentNum));

            for(let i = 0; i < arr.length; i++){
                combination([...arr.slice(0, i), ...arr.slice(i+ 1)], selectNum + 1, currentNum + arr[i] );
            }
    }
    
    // 함수 실행
    combination(numArr, 0);
    
    return [...numSet].filter(isPrime).length;
}