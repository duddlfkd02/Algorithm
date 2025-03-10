function solution(k, ranges) {
    // 우박수열
    let y = [k];
    while(k > 1){
        k = k % 2 === 0 ? k / 2 : k * 3 + 1;
        y.push(k) // [ 3, 10, 5, 16, 8, 4, 2 ]
    }
    
    let n = y.length - 1;
    
    // 사다리꼴 넓이
    let area = new Array(n).fill(0);
    for(let i = 0; i < n; i++){
        area[i] = (y[i] + y[i + 1]) / 2
    }
    
    
    let sum = new Array(n + 1).fill(0);
    for(let i = 0; i < n; i++){
        sum[i + 1] = sum[i] + area[i]
    }
    
    let result = [];
    for(let [a, b] of ranges){
        let end = n + b;
        if(a > end){
            result.push(-1.0)
        }else{
            result.push(sum[end] - sum[a])
        }
    }
    return result;
}