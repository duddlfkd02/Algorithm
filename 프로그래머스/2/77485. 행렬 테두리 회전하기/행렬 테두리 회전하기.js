function solution(rows, columns, queries) {
    // 1. 초기 행렬 생성
    let board = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: columns }, (_, j) => i * columns + j + 1)
    );

    let result = [];

    // 2. queries 순회
    for (let [x1, y1, x2, y2] of queries) {
        // 좌표를 0-based index로 변환
        x1--; y1--; x2--; y2--;

        let prev = board[x1][y1]; // 첫 번째 값 저장 (이동 시작점)
        let minVal = prev; // 최소값 저장

        // 3. 테두리를 시계방향으로 이동
        // 위쪽 이동
        for (let y = y1; y < y2; y++) {
            [board[x1][y + 1], prev] = [prev, board[x1][y + 1]];
            minVal = Math.min(minVal, prev);
        }
        // 오른쪽 이동
        for (let x = x1; x < x2; x++) {
            [board[x + 1][y2], prev] = [prev, board[x + 1][y2]];
            minVal = Math.min(minVal, prev);
        }
        // 아래쪽 이동
        for (let y = y2; y > y1; y--) {
            [board[x2][y - 1], prev] = [prev, board[x2][y - 1]];
            minVal = Math.min(minVal, prev);
        }
        // 왼쪽 이동
        for (let x = x2; x > x1; x--) {
            [board[x - 1][y1], prev] = [prev, board[x - 1][y1]];
            minVal = Math.min(minVal, prev);
        }

        result.push(minVal);
    }

    return result;
}
