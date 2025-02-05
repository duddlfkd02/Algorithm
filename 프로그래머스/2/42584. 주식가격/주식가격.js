function solution(prices) {
    const length = prices.length;
    const result = new Array(length).fill(0);
    const stack = []; // 시간, 가격 저장
    
    for(let i = 0; i < length; i++){
        // 현재 가격 < 스택 최상단 가격
        while(stack.length && prices[i] < prices[stack[stack.length -1]]){
            const lastIndex = stack.pop();
            result[lastIndex] = i - lastIndex;
        }
        stack.push(i);
    }
    // 스택에 남아있는 시간들 처리
    while(stack.length){
        const lastIndex = stack.pop();
        result[lastIndex] = length - 1 - lastIndex;
    }
    return result;
}