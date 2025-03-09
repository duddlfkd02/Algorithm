function solution(n) {
    let result = [];
    
    const hanoi = (n, from, to, via) => {
        if(n === 1){
            result.push([from, to]);
        } else {
            hanoi(n - 1, from, via, to)
            result.push([from, to])
            hanoi(n - 1, via, to, from)
        }
    }
    hanoi(n, 1, 3, 2)
    return result;
}
