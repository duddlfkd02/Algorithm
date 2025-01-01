function solution(n, m, section) {
    let count = 0;
    let lastIndex = 0;
    
    for(let s of section){
        if(s > lastIndex){
            count++;
            lastIndex = s + m - 1;
        }
    }
    return count;
}