function solution(participant, completion) {
    const map = new Map();
    
    // participant map에 저장
    for(const name of participant){
        map.set(name, (map.get(name) || 0) + 1);
    }
    
    // completion 이름 map에서 제거
    for(const name of completion){
        map.set(name, map.get(name) -1);
    }
    
    for(const [name, count] of map){
        if(count > 0){
            return name;
        }
    }
}