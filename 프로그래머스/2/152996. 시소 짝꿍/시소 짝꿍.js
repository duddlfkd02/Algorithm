function solution(weights) {
    let result = 0;
    const weightCount = new Map();
    
    // 몸무게 빈도 -> 같은 무게 찾기
    for(const weight of weights){
        weightCount.set(weight, (weightCount.get(weight) || 0) + 1);
    }
    
    // 짝꿍 찾기
    for(const [weight, count] of weightCount){
        if(count > 1){
            result += (count * (count -1)) / 2;
        }
        
        // 다르다면?
        for(const ratio of [2/3, 2/4, 3/4]){
            const partner = weight * ratio;
            if(weightCount.has(partner)){
                result += weightCount.get(partner) * count
            }
        }
    }
    return result;
    
}



