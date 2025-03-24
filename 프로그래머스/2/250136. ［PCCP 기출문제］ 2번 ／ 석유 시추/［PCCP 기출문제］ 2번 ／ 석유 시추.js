function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const oilGroup = Array.from({ length: n }, () => Array(m).fill(-1));
    const oilSize = []; // groupId -> size
    const oilCols = []; // groupId -> Set of columns

    let groupId = 0;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    function bfs(sx, sy) {
        const queue = [[sx, sy]];
        visited[sx][sy] = true;
        oilGroup[sx][sy] = groupId;

        let size = 1;
        const cols = new Set();
        cols.add(sy);

        while(queue.length) {
            const [x, y] = queue.shift();
            for(let d = 0; d < 4; d++) {
                const nx = x + dx[d];
                const ny = y + dy[d];
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && land[nx][ny] === 1) {
                    visited[nx][ny] = true;
                    oilGroup[nx][ny] = groupId;
                    size++;
                    cols.add(ny);
                    queue.push([nx, ny]);
                }
            }
        }

        oilSize[groupId] = size;
        oilCols[groupId] = cols;
        groupId++;
    }

    // 석유 덩어리 찾기
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                bfs(i, j);
            }
        }
    }

    // 각 열마다 덩어리 중복없이 합산
    let answer = 0;
    for(let col = 0; col < m; col++) {
        const seen = new Set();
        let sum = 0;

        for(let gid = 0; gid < groupId; gid++) {
            if (oilCols[gid].has(col)) {
                sum += oilSize[gid];
            }
        }

        answer = Math.max(answer, sum);
    }

    return answer;
}
