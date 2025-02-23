function solution(maps) {
    const n = maps.length; // 행 개수
    const m = maps[0].length; // 열 개수
    
    const direction = [
        [-1, 0],[1, 0],[0, -1],[0, 1]
    ]
    
    let start, lever, out;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(maps[i][j] === "S") start = [i, j];
            if(maps[i][j] === "L") lever = [i, j];
            if(maps[i][j] === "E") out = [i, j];
        }
    }
    
    // 완전탐색으로 최단거리 찾기
    const bfs = (start, end) => {
        const queue = [[...start, 0]];
        const visited = Array.from({length: n}, ()=> Array(m).fill(false));
        visited[start[0]][start[1]] = true;
        
        while(queue.length){
            const [y, x, count] = queue.shift();
            
            // 목표지점
            if(y === end[0] && x === end[1]) return count;
            
            for(const [dy, dx] of direction){
                const newY= y + dy; // n
                const newX= x + dx // m
                
                if (newY >= 0 && newY < n && newX >= 0 && newX < m &&
                    maps[newY][newX] !== "X" && !visited[newY][newX]) {
                    visited[newY][newX] = true;
                    queue.push([newY, newX, count + 1]);
                }
            }
        }
        return -1;
    }
    const reachLever = bfs(start, lever);
    if(reachLever === -1) return -1;
    
    const reachExit = bfs(lever, out);
    if(reachExit === -1) return -1;
    
    return reachLever + reachExit
    
}
