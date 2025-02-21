function solution(n) {
    let result = "";
    const arr = ["4", "1", "2"];
    
    while(n > 0){
        result = arr[n % 3] + result;
        n = n % 3 === 0 ? Math.floor(n / 3) - 1 : Math.floor(n / 3);
    }
    return result
}