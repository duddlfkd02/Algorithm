/* 🧠 문제 설명

M×N 격자에 토마토들이 놓여 있습니다.
	•	1은 익은 토마토
	•	0은 익지 않은 토마토
	•	-1은 토마토가 들어 있지 않은 칸

익은 토마토는 하루가 지나면 상하좌우 인접한 네 칸의 익지 않은 토마토를 모두 익게 만듭니다.
격자의 모든 토마토를 익게 만들기 위해 필요한 최소 일수를 구하세요.
이미 모두 익어 있으면 0,
모든 토마토가 익지 못하는 상황이면 -1을 출력합니다.


✅ 입출력
	1.	첫 줄에 정수 M, N (2 ≤ M,N ≤ 1,000) // 칸 가로·세로
	2.	이어지는 N개의 줄에 M개의 정수 (-1, 0, 1)가 공백 구분으로 주어집니다.

  •	모든 토마토가 익을 때까지 걸리는 최소 일수
	•	이미 모두 익어 있으면 0
	•	절대 모두 익지 못하면 -1

input:
6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1

output:
8
*/

function solution(grid) {
  const N = grid.length; // 행 개수
  const M = grid[0].length; // 열 개수

  // (1) visited 배열: 각 칸이 “몇일째 익었는지” 혹은 “방문했는지”를 기록
  //     0 = 아직 익지 않았거나 방문 안 함
  //     양수 = 익은(방문된) 날짜(일 수)
  const visited = Array.from({ length: N }, () => Array(M).fill(0));

  // (2) 상하좌우 이동
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  // (3) BFS: [i, j, day]
  //      i, j = 좌표, day = 이 칸이 익은 날짜(1부터 시작)
  const queue = [];

  // (4) 초기화: grid 전체 훑어서, 이미 익은 토마토(값 === 1)를
  //     visited에 1로 표시하고, queue에 (i, j, 1)로 넣기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 1) {
        visited[i][j] = 1;
        queue.push([i, j, 1]);
      }
    }
  }

  // (5) BFS 수행
  while (queue.length > 0) {
    const [i, j, day] = queue.shift();
    // (6) 상하좌우 검사
    for (let k = 0; k < 4; k++) {
      const ni = i + dx[k];
      const nj = j + dy[k];

      // (7) 경계 검사
      if (ni < 0 || ni >= N || nj < 0 || nj >= M) continue;

      // (8) 익혀야 할 토마토만 — grid[ni][nj] === 0 &&
      //     아직 visited[ni][nj] === 0인 칸
      if (grid[ni][nj] === 0 && visited[ni][nj] === 0) {
        // (9) 날짜기록: 현재 칸이 day라면,
        //     이웃 칸은 day+1일째 익음
        visited[ni][nj] = day + 1;
        // (10) 익은 상태로 바꿔주면(선택)
        grid[ni][nj] = 1;
        // (11) 다음 탐색을 위해 큐에 추가
        queue.push([ni, nj, day + 1]);
      }
    }
  }

  // (12) BFS가 끝나면 visited 전체를 훑어서
  //      0이 남아 있는 칸(grid[..][..]===0)이 있으면 → -1
  //      아니라면 익은 날짜(visited[i][j]) 중 최대값을 뽑아
  //        “최초 익은 날(1)을 0일로 세고 싶다면” -1
  let maxDay = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 0) return -1; // 아직 못 익은 토마토 존재
      maxDay = Math.max(maxDay, visited[i][j]);
    }
  }
  // 모든 토마토가 이미 익어 있었다면 maxDay===1 → 0일 걸린 셈
  return maxDay - 1;
}
console.log(solution(grid));

/**
 * BFS 탐색 흐름
 * 범위 검사 → 벽 검사 → 방문 검사 → 방문 처리 → 큐 삽입
 */
