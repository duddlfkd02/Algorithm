function solution(d, budget) {
    const sortNumD = d.sort((a,b) => a - b);
    let count = 0;
    let totalCost = 0;
    
    for(let i = 0; i < sortNumD.length; i++){
        totalCost += sortNumD[i]
        if(totalCost > budget) break;
        count++
    }
    return count;
}