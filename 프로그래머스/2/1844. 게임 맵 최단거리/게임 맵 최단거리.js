function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    // 동서남북 이동
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const queue = [[0, 0, 1]]
    
    while(queue.length > 0){
        const [x, y, distance] = queue.shift(); // 현재 위치와 거리
        
        // 도착하면 거리 return
        if(x === n - 1 && y === m - 1) return distance;
        
        // 방향 탐색
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i] // 다음 이동할 x좌표
            const ny = y + dy[i] // 다음 이동할 y좌표
            
            
            // 1. 맵 범위 안에 있는가 2. 이동 가능한가 3. 왔던 길이 아닌가  
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1){
                queue.push([nx, ny, distance + 1]);
                maps[nx][ny] = 0 // 0으로 변경 -> 재방문 불가
            }
        }
    }
    return -1;
}