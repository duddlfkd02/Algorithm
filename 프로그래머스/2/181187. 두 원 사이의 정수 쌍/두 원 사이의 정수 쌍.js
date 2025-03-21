function solution(r1, r2) {
    let count = 0;
    
    for(let x = 1; x <= r2; x++){
        let maxY =  Math.floor(Math.sqrt(r2 * r2 - x * x));
        let minY = x >= r1 ? 0 : Math.ceil(Math.sqrt(r1 * r1 - x * x));
        
        count += maxY - minY + 1
    }
    return count*4


}
