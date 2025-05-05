function solution(grid) {
  const N = grid.length;
  const M = grid[0].length;
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function dfs(i, j) {
    // 범위 검사, 방문 여부
    if (i < 0 || j < 0 || i >= N || j > M || grid[i][j] === 0 || visited[i][j])
      return 0;

    // 현재 땅 방문
    visited[i][j] = true;

    // 칸 하나 당 넓이 1 추가
    let area = 1;

    // 재귀 호출
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
        const cur = dfs(i, j);
        maxArea = Math.max(maxArea, cur);
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
