/* 🧠 문제 설명

크기가 N x M인 미로가 주어집니다.
각 칸에는 ‘1’(길) 또는 ‘0’(벽)이 쓰여 있고,
시작점인 (1,1)에서 출구인 (N,M)까지 이동하려고 합니다.
	•	상하좌우로만 이동할 수 있고,
	•	이동할 때마다 한 칸씩 이동합니다.

출구까지 최단 경로로 이동할 때 지나야 하는 칸의 수(이동 횟수 + 1)를 구하세요.

✅ 입력
첫째 줄: N, M (2 ≤ N, M ≤ 100)  
다음 N줄: 길(1)과 벽(0)으로 이루어진 길이 M의 문자열


✅ 출력
	•	시작 (1,1)에서 출구 (N,M)까지 지나야 하는 최소 칸 수 (int)

*/

const inputLines = ["4 6", "101111", "101010", "101011", "111011"];

function solution(inputLines) {
  const [N, M] = inputLines[0].split(" ").map(Number);
  const grid = inputLines.slice(1).map((line) => line.split("").map(Number));

  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const dist = Array.from({ length: N }, () => Array(M).fill(0));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  visited[0][0] = true;
  dist[0][0] = 1; //  출발점 자체를 이미 1칸 지나왔다고 기록

  const queue = [];
  queue.push([0, 0]);
  console.log(queue);

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (grid[nx][ny] === 0) continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = true;
      dist[nx][ny] = dist[x][y] + 1; // 출발점에서 또 한 칸 이동했으므로 +1
      queue.push([nx, ny]);
    }
  }
  console.log(dist[N - 1][M - 1]); // 이동횟수를 구하는 것이므로 (칸의개수 -1) 처리
}

console.log(solution(inputLines));
