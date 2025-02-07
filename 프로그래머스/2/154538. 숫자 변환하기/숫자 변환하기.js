function solution(x, y, n) {
    // 최대 범위 설정 (x부터 y까지)
    const dp = new Array(y + 1).fill(Infinity);
    dp[x] = 0; // x를 만들기 위한 연산 횟수는 0

    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue; // 연산이 불가능한 경우 건너뜀
        
        // 가능한 연산 수행 (i + n, i * 2, i * 3)
        if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }

    return dp[y] === Infinity ? -1 : dp[y]; // y를 만들 수 없다면 -1 반환
}
