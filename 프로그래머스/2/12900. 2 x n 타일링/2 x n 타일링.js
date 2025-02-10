function solution(n) {
    const dp = new Array(n + 1).fill(0);
    
    dp[1] = 1;
    dp[2] = 2;
    
    for(let i = 3; i <= n; i++){
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }
    return dp[n]
}

// 2x1 세워서 한 개 f(n-1)
// 2x1 눕혀서 두 개 f(n-2)

