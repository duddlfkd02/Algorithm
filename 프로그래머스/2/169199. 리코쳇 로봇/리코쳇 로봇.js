function solution(board) {
    const n = board.length;    // 세로 크기
    const m = board[0].length; // 가로 크기
    const map = board.map(row => row.split(""));
    
    // 방문 체크 배열
    const visited = Array.from({ length: n }, () => Array(m).fill(false));


    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let startX, startY;

    // 시작 위치 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (map[i][j] === "R") {
                startX = i;
                startY = j;
            }
        }
    }

    // BFS 탐색 
    const queue = [[startX, startY, 0]]; // [x좌표, y좌표, 이동 횟수]
    visited[startX][startY] = true;

    while (queue.length) {
        const [x, y, count] = queue.shift(); 

        // 목표 지점 
        if (map[x][y] === "G") {
            return count;
        }

       
        for (let i = 0; i < 4; i++) {
            let newX = x;
            let newY = y;

            // 벽이나 장애물에 부딪힐 때까지 이동
            while (
                newX + dx[i] >= 0 && newX + dx[i] < n &&
                newY + dy[i] >= 0 && newY + dy[i] < m &&
                map[newX + dx[i]][newY + dy[i]] !== "D"
            ) {
                newX += dx[i];
                newY += dy[i];
            }

            // 방문 여부 확인
            if (!visited[newX][newY]) {
                visited[newX][newY] = true;
                queue.push([newX, newY, count + 1]);
            }
        }
    }

    return -1;
}
