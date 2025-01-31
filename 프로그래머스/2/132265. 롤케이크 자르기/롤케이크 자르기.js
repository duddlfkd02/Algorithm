function solution(topping) {
    // 1. 2개의 set 만들기 (왼 감소 ,오른 증가)
    // 2. 중복 없앤 값의 개수 비교해서 동일하면 count 증가
    
    let count = 0;
    let leftSet = new Set();
    let rightMap = new Map()
    
    // 오른쪽 토핑
    for(const topp of topping){
        rightMap.set(topp, (rightMap.get(topp) || 0) + 1)
    }
    // 왼쪽 토핑 
    for(const topp of topping){
        leftSet.add(topp);
        rightMap.set(topp, (rightMap.get(topp) - 1)) // 왼쪽에서 가져갔으니 1 감소
        
        if(rightMap.get(topp) === 0) rightMap.delete(topp);
        
        if(leftSet.size === rightMap.size) count++;
    }
    
    return count;
}