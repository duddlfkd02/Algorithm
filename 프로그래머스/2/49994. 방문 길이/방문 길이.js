function solution(dirs) {
    let move = {
        L :[-1, 0],
        R :[1, 0],
        U :[0, 1],
        D :[0 , -1]
    }
    let current = [0, 0];
    let route = new Set();
    
    for(let dir of dirs){
        let nx = current[0] + move[dir][0]
        let ny = current[1] + move[dir][1]
        
        // 경계 벗어난다면? 무시해라
        if(nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        // 경로 저장 형태 정렬
        let path = `${current[0]},${current[1]} → ${nx},${ny}`
        let reversePath = `${nx},${ny} → ${current[0]},${current[1]}`;
        
        if(!route.has(path) && !route.has(reversePath)){
            route.add(path);
        }
        
        // 현재 위치 업데이트
        current = [nx, ny];
    }
    return route.size;
}