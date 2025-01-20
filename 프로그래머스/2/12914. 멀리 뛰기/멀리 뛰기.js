function solution(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    //피보나치 수열 사용
    let a = 1; 
    let b = 2;
    
    for(let i = 3; i <= n; i++){
        const next = (a + b) % 1234567;
        a = b;
        b = next;
    }
    return b;
}