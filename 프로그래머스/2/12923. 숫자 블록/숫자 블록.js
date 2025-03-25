function solution(begin, end) {
    const result = [];
    const THOUSANDS = 10000000;
    
    for(let num = begin; num <= end; num++){
        if(num === 1){
            result.push(0);
            continue;
        }
        
        let blockNum = 1; // 가장 큰 약수
    
        for(let i = 2; i <= Math.sqrt(num); i++){
            
            if(num % i === 0){
                let pair = num / i
                if(pair <= THOUSANDS){
                    blockNum = pair
                    break;
                }
                if(i <= THOUSANDS){
                    blockNum = i;
                }
            }
        }
        
        result.push(blockNum);
    }
    
    return result;
}

