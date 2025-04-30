/* 🧠 문제 설명

N×M 크기의 2차원 미로가 주어집니다.
각 칸은 0 또는 1로 이루어져 있고,
	•	0은 이동할 수 있는 통로
	•	1은 벽을 의미합니다.

시작점 (0,0)에서 출구 (N-1,M-1)로 이동할 때,
한 번에 벽 하나까지는 부수고 이동할 수 있다고 할 때,
최단 경로로 이동하기 위해 지나야 하는 칸의 개수를 구하세요.
(벽을 부술 때도 이동 칸으로 간주합니다.)


✅ 입출력
	•	첫 줄에 정수 N, M (2 ≤ N, M ≤ 1,000)
	•	다음 N개의 줄에 길이 M인 문자열(‘0’과 ‘1’로 구성)이 주어집니다.

	•	(0,0)에서 (N-1,M-1)까지 이동할 때 최단 경로의 칸 수
	•	만약 도달할 수 없으면 -1을 출력하세요.

input:
6 4
0100
1110
1000
0000
0111
0000

output:
15

// 한 벽(‘1’)을 하나 부수고 지나면서
// (0,0) → (5,3)까지 최단 15칸을 이동할 수 있습니다.
*/

const grid = [
  ["0", "1", "0"],
  ["0", "0", "0"],
  ["0", "1", "0"],
];

function solution(grid) {
  const N = grid.length;
  const M = grid[0].length;
  // visited[i][j][b]: visited at (i,j) with broken status b (0 = not broken, 1 = broken)
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => [false, false])
  );

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [];
  visited[0][0][0] = true;
  queue.push([0, 0, 1, 0]); // (i, j, dist, broken)

  while (queue.length > 0) {
    const [i, j, dist, broken] = queue.shift();
    if (i === N - 1 && j === M - 1) return dist;

    for (let k = 0; k < 4; k++) {
      const ni = dx[k] + i;
      const nj = dy[k] + j;
      // 범위
      if (ni < 0 || nj < 0 || ni >= N || nj >= M) continue;
      // determine new broken state
      let newBroken = broken;
      if (grid[ni][nj] === "1") {
        // can break exactly one wall
        if (broken === 0) {
          newBroken = 1;
        } else {
          continue; // already broke one, cannot pass another wall
        }
      }
      // if already visited this cell with the same broken state, skip
      if (visited[ni][nj][newBroken]) continue;
      visited[ni][nj][newBroken] = true;
      queue.push([ni, nj, dist + 1, newBroken]);
    }
  }
  return -1;
}

console.log(solution(grid));

/**
 * BFS 탐색 흐름
 * 범위 검사 → 벽 검사 → 방문 검사 → 방문 처리 → 큐 삽입
 */

/**
 * const visited = Array.from({ length: N }, () => Array(M).full(false)); : 단순 방문처리
 * 
 * const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => [false, false])
  ); : 세 번째 축으로 broken 상태(0 또는 1)를 추가
 */
