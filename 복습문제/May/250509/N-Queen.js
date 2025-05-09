/* 🧠 문제 설명

크기 N\times N 체스판 위에 퀸 N개를 놓으려 합니다.
퀸은 같은 행, 열, 대각선에 다른 퀸이 있으면 공격할 수 있으므로,
어떤 두 퀸도 서로 공격하지 못하도록 놓는 방법의 총 가지 수를 구하세요.


✅ 입력
	•	첫 줄에 정수 N (1 ≤ N ≤ 14)

✅ 출력
	•	가능한 모든 배치의 개수 (int)

input:
4

output:
2

4×4 보드에 퀸 4개를 놓는 방법은
. Q . .      . . Q .
. . . Q      Q . . .
Q . . .  와  . . . Q
. . Q .       . Q .

총 2가지가 존재합니다.
*/

function solution(N) {
  let count = 0;
  const visitedCol = Array(N).fill(false);
  const diag1 = Array(2 * N - 1).fill(false);
  const diag2 = Array(2 * N - 1).fill(false);

  function dfs(row) {
    if (row === N) {
      count++;
      return;
    }
    // 한 행에 퀸을 놓을 수 있는 열 모두 순회
    for (let col = 0; col < N; col++) {
      // 같은 열 또는 대각선에 이미 퀸이 있으면 스킵
      if (visitedCol[col] || diag1[row + col] || diag2[row - col + N - 1])
        continue;
      // 퀸 놓기
      visitedCol[col] = true;
      diag1[row + col] = true;
      diag2[row - col + N - 1] = true;
      dfs(row + 1);
      // 퀸 빼기 (백트랙)
      visitedCol[col] = false;
      diag1[row + col] = false;
      diag2[row - col + N - 1] = false;
    }
  }
  dfs(0);
  return count;
}

const N = 4;

console.log(solution(N));
