/* 🧠 문제 설명

크기가 N x M인 미로가 주어집니다.
각 칸에는 다음 중 하나가 적혀 있습니다:
	•	'.' : 빈 칸 (이동 가능)
	•	'#' : 벽 (이동 불가)
	•	'0' : 시작점 (항상 한 곳)
	•	'1' : 출구 (항상 한 곳)
	•	'a'~'f' : 열쇠 (총 6종; 잡으면 해당 열쇠를 영구 보유)
	•	'A'~'F' : 문 (예: 'A'는 'a' 열쇠가 있어야 통과 가능)

한 칸씩 상하좌우로 이동할 수 있고,
	•	벽 '#'은 절대 통과할 수 없으며,
	•	문 'A'~'F'는 해당 소문자 열쇠를 이미 갖고 있을 때만 통과할 수 있습니다.
	•	열쇠를 만나는 칸('a'~'f')에 서면 그 열쇠를 즉시 얻어 “항상 가지고 다닙니다.”
	•	시작점 '0'에서 출발하여 출구 '1'까지 **최단 경로(칸 수)**로 이동할 때,
  만약 도달할 수 없으면 -1을 출력하세요.

✅ 입력
첫째 줄: 정수 N M  (1 ≤ N, M ≤ 50)  
다음 N줄: 길이 M인 문자열 (각 칸은 위 문자 중 하나)


✅ 출력
	•	시작점에서 출구까지 이동할 수 있는 최단 칸 수 (시작점 포함)
	•	불가능하면 -1

*/

const inputLines = [
  "7 8",
  "a#c#eF.1",
  ".#.#.#..",
  ".#B#D###",
  "0....F.1",
  "C#cE.#..",
  "...#.#..",
  ".###.#..",
];

function solution(inputLines) {
  const [N, M] = inputLines[0].split(" ").map(Number);
  const grid = Array.from({ length: N }, (_, i) => inputLines[i + 1].split(""));

  // 열쇠(또는 출발점)를 찾으면서 인덱스 파악
  let startX = -1;
  let startY = -1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === "0") {
        startX = i;
        startY = j;
      }
    }
  }
  // 3차원 배열 준비
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array(1 << 6).fill(false))
  );
  const dist = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array(1 << 6).fill(0))
  );

  //4방향 세팅
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [];
  visited[startX][startY][0] = true;
  dist[startX][startY][0] = 1;
  queue.push([startX, startY, 0]);

  // BFS
  while (queue.length > 0) {
    const [x, y, keys] = queue.shift();
    const cd = dist[x][y][keys]; // 지금까지 지나온 수

    //4방향 순회하기
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      const cell = grid[nx][ny];

      if (cell === "#") continue; // 벽이라면 넘어감

      let newKeys = keys;
      if (cell >= "a" && cell <= "f") {
        // cell="c"일 때, 'c'의 비트는 (cell.charCodeAt(0) - 'a'.charCodeAt(0))
        const bit = cell.charCodeAt(0) - "a".charCodeAt(0);
        newKeys = keys | (1 << bit);
      }

      // 문을 만난다면 소문자 알파벳이 있는가 체크
      if (cell >= "A" && cell <= "F") {
        const bit = cell.charCodeAt(0) - "A".charCodeAt(0);
        // 소문자가 없으면 문 통과 못함
        if (keys && 1 << bit) continue;
      }

      //방문 여부 확인
      if (!visited[nx][ny][newKeys]) {
        visited[nx][ny][newKeys] = true;
        dist[nx][ny][newKeys] = cd + 1;

        if (cell === "1") {
          console.log(dist[nx][ny][newKeys]);
          return;
        }
        queue.push([nx, ny, newKeys]);
      }
    }
  }
  console.log(-1);
}

console.log(solution(inputLines));

// ===================================================================================

// 문자열 상태 저장 + Set 이용
function solve(inputLines) {
  const [N, M] = inputLines[0].split(" ").map(Number);
  const maze = inputLines.slice(1).map((line) => line.split(""));

  // 시작점 찾기
  let startX = -1,
    startY = -1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maze[i][j] === "0") {
        startX = i;
        startY = j;
      }
    }
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // Set을 방문 체크 용도로 사용
  const visited = new Set();
  // 큐에 [x, y, keyString, distance] 형태로 저장
  const queue = [];

  // 초기 상태: 출발점, keys = "" (아직 아무 열쇠도 없음), distance = 1 (칸 개수)
  visited.add(`${startX},${startY},`);
  queue.push([startX, startY, "", 1]);

  while (queue.length) {
    const [x, y, keys, dist] = queue.shift();

    // (x,y)에 도착했을 때 문자가 '1'이면 출구
    if (maze[x][y] === "1") {
      console.log(dist);
      return;
    }

    // 네 방향 탐색
    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      // (1) 범위 검사
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      const cell = maze[nx][ny];

      // (2) 벽('#')이면 건너뛰기
      if (cell === "#") continue;

      let newKeys = keys;

      // (3) 열쇠(a~f) 칸을 만났으면 newKeys에 추가
      if (cell >= "a" && cell <= "f") {
        // 중복 없이 키 문자열을 관리하기 위해,
        // keys에 없으면 넣고, 있으면 그대로
        if (!newKeys.includes(cell)) {
          // 예: keys="bd", cell="a" → ["b","d","a"] 정렬 후 "abd"
          newKeys = [...new Set((newKeys + cell).split(""))].sort().join("");
        }
      }

      // (4) 문(A~F)을 만났으면, 대응하는 소문자 키가 newKeys에 있어야만 지나갈 수 있다
      if (cell >= "A" && cell <= "F") {
        // 예: cell="C" 면, 소문자 "c" 키가 있어야 통과
        const neededKey = cell.toLowerCase();
        if (!newKeys.includes(neededKey)) {
          continue; // 문을 열 수 없으니 다음 방향으로
        }
      }

      // (5) 아직 방문하지 않은 (nx,ny, newKeys) 상태인지 확인
      const nextStateKey = `${nx},${ny},${newKeys}`;
      if (!visited.has(nextStateKey)) {
        visited.add(nextStateKey);
        // distance + 1만큼 칸을 더 지나간다
        queue.push([nx, ny, newKeys, dist + 1]);
      }
    }
  }

  // 큐가 빌 때까지 출구를 못 찾았다면 불가능
  console.log(-1);
}

console.log(solve(inputLines));
