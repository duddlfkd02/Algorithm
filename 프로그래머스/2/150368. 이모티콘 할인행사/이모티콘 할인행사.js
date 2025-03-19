function solution(users, emoticons) {
    let maxSubscribe = 0;
    let maxSales = 0;
    const discountRates = [10, 20, 30, 40];
    
    // 모든 할인 조합 이진탐색
    const dfs = (index, discountSet) => {
        if(index === emoticons.length){
            calculateResult(discountSet);
            return;
        }
        
        for(let rate of discountRates){
            discountSet.push(rate);
            dfs(index + 1, discountSet)
            discountSet.pop()
        }
    }
    
    
    // discountSet 기준 조합에 대해 계산
    const calculateResult = (discountSet) => {
        let subscribeCount = 0;
        let sales = 0;
        
        for(let user of users){
            let [minRate, minPrice] = user;
            let cost = 0;
            
            
            for(let i = 0; i < emoticons.length; i++){
                if(discountSet[i] >= minRate){
                    cost += emoticons[i] * (1 - discountSet[i] / 100); // 할인율 계산해서 비용 추가
                }
            }
            
            if(cost >= minPrice){
                subscribeCount++
            } else {
                sales += cost;
            }
        }
            
        // 최종 가입자, 매출 정산
        if(subscribeCount > maxSubscribe || subscribeCount === maxSubscribe && sales > maxSales){
            maxSubscribe = subscribeCount;
            maxSales = sales
        }            
    }
    dfs(0, [])  
    return [maxSubscribe, maxSales];
}

