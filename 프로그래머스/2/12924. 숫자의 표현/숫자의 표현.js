function solution(n) {
    let count = 0; 
    
    for(let i = 1; i * (i - 1) / 2 < n; i++){
        const remain = n - (i * (i - 1)) / 2;
        if(remain % i === 0){
            count++;
        }
    }
    return count;
}