/* 🧠 문제 설명

크기가 N x M인 격자가 주어집니다.
각 칸은 0(길) 또는 1(벽)으로 되어 있고,
출발점 (1,1)에서 도착점 (N,M)까지 이동하려고 합니다.
	•	상하좌우 네 방향으로만 이동할 수 있습니다.
	•	단, 단 한 번만(최대 한 칸만) 벽(1)을 부수고 지나갈 수 있습니다.
	•	부순 벽을 지나간 뒤에는 더 이상 벽을 부술 수 없습니다.

출발점에서 도착점까지 가는 **최단 거리(이동 횟수 + 1)**를 구하세요.
만약 도달할 수 없으면 -1을 출력합니다.

✅ 입력
첫 번째 줄: 정수 N, M   (1 ≤ N, M ≤ 1000)
다음 N줄: 각 줄마다 길이 M인 문자열 (문자 `'0'` 또는 `'1'`)


✅ 출력
	•	출발점 (1,1)에서 도착점 (N,M)까지 최단 거리(칸 개수)를 출력
	•	이동할 수 없으면 -1

*/

const inputLines = ["6 4", "0100", "1110", "1000", "0000", "0111", "0000"];

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const maze = Array.from({ length: N }, (_, i) =>
    input[i + 1]
      .trim()
      .split("")
      .map((ch) => Number(ch))
  );

  // visited[x][y][b]: x,y 위치를 벽 b번 부순 상태로 방문했는지
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => [false, false])
  );
  // dist[x][y][b]: 벽 b번 부순 상태로 x,y까지 온 최단 칸 수
  const dist = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => [0, 0])
  );

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [];

  visited[0][0][0] = true;
  dist[0][0][0] = 1;
  queue.push([0, 0, 0]); // 벽을 아직 안 부순 상태

  // Step 3. BFS 탐색
  while (queue.length > 0) {
    const [x, y, b] = queue.shift();
    const cd = dist[x][y][b]; // currDist: (x,y,b) 상태까지 지나온 칸 수

    // 도착 지점에 도달했다면, 여기가 최단 거리
    if (x === N - 1 && y === M - 1) {
      console.log(cd);
      return;
    }

    // 네 방향 탐색
    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      // 범위 벗어나면 패스
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      // 길(0)이라면?
      if (maze[nx][ny] === 0) {
        // 벽을 b번 부순 상태로 방문해 본 적 없으면
        if (!visited[nx][ny][b]) {
          visited[nx][ny][b] = true;
          dist[nx][ny][b] = cd + 1;
          queue.push([nx, ny, b]);
        }
      }
      //  벽(1)인 경우 (벽을 아직 안 부순 상태)
      else if (maze[nx][ny] === 1 && b === 0) {
        // 벽을 한 번 부순 뒤 상태(b=1)로 방문한 적 없으면
        if (!visited[nx][ny][1]) {
          visited[nx][ny][1] = true;
          dist[nx][ny][1] = cd + 1;
          queue.push([nx, ny, 1]);
        }
      }
    }
  }

  // BFS가 끝났는데도 도착점에 못 가면 -1 출력
  console.log(-1);
}

console.log(solution(inputLines));
