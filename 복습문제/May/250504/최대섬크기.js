/* 🧠 문제 설명

크기가 N×M인 2차원 격자 grid가 주어집니다.
	•	1은 땅,
	•	0은 물을 뜻합니다.
상하좌우로 연결된 1 들이 모여 하나의 섬이 되는데,
가장 넓은(넓이 = 칸 개수) 섬의 크기를 반환하세요.
섬이 하나도 없으면 0을 반환합니다.


✅ 입력
	•	정수 N, M (각 1 ≤ N, M ≤ 100)
	•	다음 N개의 줄에 M개의 정수(0 또는 1)로 구성된 grid

✅ 출력
	•	가장 넓은 섬의 칸 개수 (int)

input:
4 5
1 1 0 0 0
1 1 0 1 1
0 0 0 1 1
0 1 1 0 0

output:
4

// 섬1: (0,0),(0,1),(1,0),(1,1) → 넓이 4
// 섬2: (1,3),(1,4),(2,3),(2,4) → 넓이 4
// 섬3: (3,1),(3,2) → 넓이 2
// 최대는 4
*/

function solution(grid) {
  const N = grid.length;
  const M = grid[0].length;
  // visited[i][j] = true 면 (i,j) 땅을 이미 세어봤다는 뜻
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function dfs(i, j) {
    // 1. 범위 밖이거나, 물(0)이거나, 이미 방문한 경우
    if (i < 0 || j < 0 || i >= N || j >= M || grid[i][j] === 0 || visited[i][j])
      return 0;

    // 2. 현재 땅 방문 처리
    visited[i][j] = true;

    // 3. 칸 하나의 넓이 1 더하기
    let area = 1;

    // 4. 네 방향으로 이어진 땅을 재귀적으로 호출
    for (let k = 0; k < 4; k++) {
      const ni = i + dx[k];
      const nj = j + dy[k];
      area += dfs(ni, nj);
    }
    return area;
  }

  let maxArea = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        const current = dfs(i, j);
        maxArea = Math.max(maxArea, current);
      }
    }
  }
  return maxArea;
}

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 1, 1, 0, 0],
];

console.log(solution(grid));
