function solution(n) {
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수 제거

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            // i의 배수를 모두 소수가 아닌 것으로 표시
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime.filter(Boolean).length;
}
