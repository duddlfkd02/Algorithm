function solution(n) {
    let x = n;
    const result = [x];
    while(x !== 1){
        if(x % 2 === 0){
            x =x / 2
            
        }else{
            x = 3 * x + 1
        }
        result.push(x)
    }
    return result
}