/* 🧠 문제 설명

크기가 m \times n인 2D 격자 grid가 주어집니다.
각 칸에는 '1'(땅) 또는 '0'(물)이 저장되어 있고,
상하좌우 4방향으로 연결된 '1'들이 하나의 섬을 이룹니다.
격자 내에 몇 개의 섬이 있는지 구하세요.

✅ 입력
첫째 줄: 정수 m n        (1 ≤ m, n ≤ 300)  
다음 m줄: 길이 n인 문자열(grid row)  
  ('1' 또는 '0'만으로 이루어짐)

✅ 출력
	•	격자 내 섬(땅 덩어리)의 개수 (int)



input:
4 5
11110
11010
11000
00000

output:
1


input:
4 5
11000
11000
00100
00011

output:
3
*/

const inputLines = ["4 5", "11110", "11010", "11000", "00000"];

function solution(inputLines) {
  const [m, n] = inputLines[0].split(" ").map(Number);

  const grid = [];
  for (let i = 1; i <= m; i++) {
    grid.push(inputLines[i].split(""));
  }

  const visited = Array.from({ length: m }, () => Array.from(n).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function dfs(x, y) {
    if (
      x < 0 ||
      y < 0 ||
      x >= m ||
      y >= n ||
      grid[x][y] === "0" ||
      visited[x][y]
    )
      return;

    visited[x][y] = true;

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      dfs(nx, ny);
    }
  }

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
}

console.log(solution(inputLines));
