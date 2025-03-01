function solution(n, k) {
    let numbers = Array.from({ length: n }, (_, i) => i + 1); 
    let result = [];
    let factorial = Array(n).fill(1);
    
    // factorial 계산
    for (let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    k--; 
    
    for (let i = n; i > 0; i--) {
        let idx = Math.floor(k / factorial[i - 1]); 
        result.push(numbers[idx]); 
        numbers.splice(idx, 1); 
        k %= factorial[i - 1]; 
    }

    return result;
}
