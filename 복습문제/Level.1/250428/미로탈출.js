/* 🧠 문제 설명

N×M 크기의 2차원 미로가 주어집니다.
각 칸은 0 또는 1로 이루어져 있고,
	•	1은 이동할 수 있는 통로,
	•	0은 벽을 의미합니다.

시작점 (0,0)에서 출구 (N-1,M-1)까지 이동하려고 할 때,
최단 경로로 이동할 때 지나야 하는 칸의 개수를 반환하세요.


✅ 입출력
	•	첫 줄에 정수 N, M (2 ≤ N, M ≤ 100)
	•	다음 N개의 줄에 길이가 M인 문자열(0과 1로 구성)이 주어집니다.

	•	(0,0)에서 (N-1,M-1)까지 최단 경로로 이동할 때 칸의 개수
	•	이동이 불가능하면 -1을 반환

input:
5 6
101010
111111
000001
111111
111111

output:
10

// 한 가지 최단 경로(→ 아래 ↘ ↘ → …)를 따라  
// 총 10칸을 지나게 됩니다.
*/

const grid = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];

function solution(grid) {
  const N = grid.length; // 행 개수
  const M = grid[0].length; // 열 개수

  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const dx = [1, -1, 0, 0]; // 좌우
  const dy = [0, 0, 1, -1]; // 상하

  const queue = [];
  visited[0][0] = true; // 출발점 0,0 true로 설정
  queue.push([0, 0, 1]);

  while (queue.length > 0) {
    const [i, j, dist] = queue.shift();
    if (i === N - 1 && j === M - 1) return dist;

    for (let k = 0; k < 4; k++) {
      const ni = dx[k] + i;
      const nj = dy[k] + j;
      // 1. 범위 검사
      if (ni < 0 || nj < 0 || ni >= N || nj >= M) continue;
      // 2. 벽 검사
      if (grid[ni][nj] === 0) continue;
      // 3. 방문 검사
      if (visited[ni][nj]) continue;

      // 4. 방문처리 + 큐 삽입
      visited[ni][nj] = true;
      queue.push([ni, nj, dist + 1]);
    }
  }
  return -1;
}

console.log(solution(grid));

/**
 * BFS 탐색 흐름
 * 범위 검사 → 벽 검사 → 방문 검사 → 방문 처리 → 큐 삽입
 */
