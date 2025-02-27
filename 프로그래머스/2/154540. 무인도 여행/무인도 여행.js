function solution(maps) {
    const result = []; // 무인도의 식량 합 저장
    const n = maps.length
    const m = maps[0].length
    const visited = Array.from({length : n}, ()=> Array(m).fill(0));
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    const bfs = (x, y) => {
        const queue = [[x, y]];
        let total = Number(maps[x][y]);
        visited[x][y] = 1;
        
        while(queue.length > 0){
            const [curX, curY] = queue.shift();
            for(const [dx, dy] of directions){
                const nearX = curX + dx
                const nearY = curY + dy
                if(nearX >= 0 && nearX < n && nearY >= 0 && nearY < m && !visited[nearX][nearY] && maps[nearX][nearY] !== "X"){
                    
                    visited[nearX][nearY] = 1
                    total += Number(maps[nearX][nearY])
                    queue.push([nearX,nearY])
                }
            }
        }
        return total;
    }
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(maps[i][j] !== "X" && !visited[i][j]) {
                result.push(bfs(i, j));
            }
        }
    }
    return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}
