function solution(prices) {
    let result = [];
    for(let i = 0; i < prices.length; i++){
        let stack = 0;
        for(let j = i + 1; j < prices.length; j++){
            stack++;
            if(prices[i] > prices[j]){
                break;
            }
        }
        result.push(stack);
    }
    return result;
}