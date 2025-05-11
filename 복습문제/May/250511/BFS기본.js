/* 🧠 문제 설명

문제: 3×3 격자에서 (0,0) → (2,2)로 이동할 때 가장 짧은 칸 수 구하기
	•	격자는 1이 통로, 0이 벽입니다.

✅ 출력
최단 경로 칸 수

3 3
1 1 1
0 1 0
1 1 1
*/

function solution(grid) {
  const N = grid.length;
  const M = grid[0].length;
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [];
  visited[0][0] = true;
  queue.push([0, 0, 1]);

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    if (x === N - 1 && y === M - 1) return dist;

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < M &&
        grid[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
  return -1;
}

const grid = [
  [1, 1, 1],
  [0, 1, 0],
  [1, 1, 1],
];

console.log(solution(grid));
