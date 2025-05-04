/* 🧠 문제 설명

크기가 N\times M인 미로가 주어집니다.
	•	칸 값이 1이면 이동할 수 있고,
	•	0이면 벽이라 이동할 수 없습니다.

출발점(0,0)에서 출구(N−1,M−1)까지 이동할 때
지나야 하는 칸의 최소 개수를 구하세요.
이동할 수 없으면 -1을 반환합니다.


input:
5 6
101010
111111
000001
111111
111111

output:
10
*/
const grid = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

function solution(grid) {
  const N = grid.length;
  const M = grid[0].length;
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue = [];

  visited[0][0] = true;
  queue.push([0, 0, 1]);

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    if (x === N - 1 && y === M - 1) return dist;

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      // 범위 검색
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < M &&
        grid[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
  return -1;
}
console.log(solution(grid));

/**
 * 질문 1
 * Q. while 루프가 왜 필요한가?
 * A. 완전탐색을 할 때 queue에 값이 있을 때는 반복하고 값이 없다면 (length === 0) 자동으로 종료하게 만들기 위해 while 루프를 사용한다.
 *
 * 질문 2
 * Q. 각 if 조건 (grid[nx][ny] === 1 & !visited)은 어떤 역할을 하는지
 * A. grid[nx][ny] === 1은 해당 좌표의 칸 값이 1인지 확인하여 이동 가능한 칸인지 판단하는 조건이다. !visited는 아직 방문하지 않은 칸인지 확인하여 중복 방문을 방지한다.
 *
 * 질문 3.
 * Q. dist를 1로 시작해서 매 이동마다 dist+1을 하는 이유는 무엇인지
 * A. dist는 현재까지 지나온 칸의 개수를 나타내고, 출발점 (0,0)부터 시작하므로 1로 초기화한다. 이동할 때마다 지나온 칸 수를 1씩 증가시키기 위해 dist + 1을 사용한다.
 */
