function solution(n, control) {
    const controlMap = {w: 1, s: -1, d: 10, a: -10}
    
    // 객체 순회 for in
    for(const mapNum of control){
        n += controlMap[mapNum]
    }
    return n
}
    