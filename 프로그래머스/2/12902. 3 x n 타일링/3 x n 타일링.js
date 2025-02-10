function solution(n) {
    if(n % 2 === 1) return 0; // 홀수는 타일링 할 수 없음
    
    const dp = new Array(n + 1).fill(0);
    
    dp[0] = 1;
    dp[2] = 3; // ||| ===
    
    for(let i = 4; i <= n; i += 2){
        dp[i] = (dp[i - 2] * 3) % 1000000007 // 기본 타일 패턴
        // 짝수인 경우 특정한 패턴
        for(let j = i - 4; j >= 0; j -= 2){
            dp[i] = (dp[i] + dp[j] * 2) % 1000000007
        }
    }
    return dp[n]
}