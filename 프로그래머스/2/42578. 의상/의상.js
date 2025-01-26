function solution(clothes) {
    // 의상 종류별 개수 세기
    // 모든 경우의 수 계산, 아무것도 입지 않는 경우 -1
    const clothesMap = new Map();
    
    for(const [name, type] of clothes){
        clothesMap.set(type, (clothesMap.get(type) || 0) + 1)
    }
    
    let wearing = 1;
    for(const count of clothesMap.values()){

        wearing *= (count + 1)
    }
    
    return wearing - 1;
}