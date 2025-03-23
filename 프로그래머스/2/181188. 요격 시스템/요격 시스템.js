function solution(targets) {
    targets.sort((a,b) => a[1] - b[1]);
    
    let count = 0;
    let interceptX = -1;
    
    for(let [start, end] of targets){
        if(start >= interceptX){
            count++;
            interceptX = end;
        }
    }
    
    return count;
}