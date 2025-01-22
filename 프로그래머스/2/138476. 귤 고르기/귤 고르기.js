function solution(k, tangerine) {
    const countMap = new Map();
    
    // 귤 크기 개수
    for(size of tangerine){
        countMap.set(size, (countMap.get(size) || 0) + 1)
    }
    
    const sortCounts = [...countMap.values()].sort((a, b) => b - a);
    
    let selectedCount = 0; // 지금까지 선택한 귤 개수 -> k랑 비교
    let types = 0; // 귤 종류
    
    for(const count of sortCounts){
        selectedCount += count;
        types++
        if(selectedCount >= k) break;
    }
    
    return types
}