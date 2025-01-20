function solution(n){
    //현재 위치가 홀수라면 점프
    let batteryCount = 0;
    
     while (n > 0) {
        if (n % 2 === 0) {
            // 짝수인 경우
            n /= 2;
        } else {
            // 홀수인 경우 점프
            n -= 1;
            batteryCount++;
        }
    }
    return batteryCount;
}