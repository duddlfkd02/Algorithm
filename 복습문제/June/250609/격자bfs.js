/* 🧠 문제 설명

크기가 N x M인 0과 1로 이루어진 미로가 주어집니다.
출발점은 (1,1), 도착점은 (N,M)이며, 1인 칸만 이동할 수 있습니다.
상하좌우 인접한 칸으로만 한 칸씩 이동할 때, 출발점에서 도착점까지 가는 최단 이동 칸 수를 구하세요.
	•	이동할 때마다 칸 수를 1씩 더 셉니다.
	•	출발 칸과 도착 칸도 칸 수에 포함합니다.


✅ 입력
첫째 줄: 정수 N M (2 ≤ N, M ≤ 100)
다음 N줄: 길이 M인 문자열(각 문자 ‘0’ 또는 ‘1’)

	•	‘1’은 이동 가능, ‘0’은 벽입니다.

✅ 출력
	•	출발점에서 도착점까지 도달하는 최소 칸 수 (int)

*/

const inputLines = ["4 6", "101111", "101010", "101011", "111011"];

function solution(inputLines) {
  const [N, M] = inputLines[0].split(" ").map(Number);
  const grid = inputLines
    .slice(1)
    .map((line) => line.split("").map((char) => Number(char)));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const dist = Array.from({ length: N }, () => Array(M).fill(0));
  const queue = [];

  visited[0][0] = true;
  dist[0][0] = 1;
  queue.push([0, 0]);

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      return dist[x][y];
    }

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (grid[nx][ny] === 0 || visited[nx][ny]) continue;
      visited[nx][ny] = true;
      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
  return 0;
}

console.log(solution(inputLines));
