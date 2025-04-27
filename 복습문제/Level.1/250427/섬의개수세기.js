/* 🧠 문제 설명

1과 0으로 이루어진 2차원 배열 grid가 주어집니다.
	•	1은 땅(land), 0은 바다(water)를 의미합니다.

상하좌우로 연결된 땅이 하나의 섬(island)이 됩니다.
섬의 개수를 세어 반환하세요.



✅ 입출력
•	grid: M행 N열의 2차원 배열
	•	1 ≤ M, N ≤ 100
	•	각 원소는 0 또는 1

•	grid에 있는 섬의 개수 (int)

const grid = [
  [1,1,0,0,0],
  [1,1,0,1,1],
  [0,0,0,1,1],
  [0,1,0,0,0],
  [1,1,1,0,0]
];

// 시각화:
// ■ ■ . . .
// ■ ■ . ■ ■
// . . . ■ ■
// . ■ . . .
// ■ ■ ■ . .

// 섬은 총 3개 → 출력: 3
*/

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
];

function solution() {
  const m = grid.length; // 행 개수
  const n = grid[0].length; // 열 개수
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        count++;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    if (grid[i][j] === 0) return;
    grid[i][j] = 0;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  return count;
}

console.log(solution(grid));

/**
 * 이중 반복문
 i = 0; j = 0;
  grid[0][0] === 1  → 참
  → count = 1
  → dfs(0, 0)
 */
