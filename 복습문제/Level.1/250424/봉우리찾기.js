/* 🧠 문제 설명

N×N 크기의 2차원 배열(행렬)이 주어집니다.
각 칸에는 높이가 기록되어 있고, 상하좌우 네 방향에 있는 칸의 높이보다 엄격히 큰 칸을 봉우리(peak) 라고 합니다.
행렬 안에서 봉우리가 총 몇 개 있는지 세어서 반환하세요.



✅ 입출력
	•	첫 줄에 정수 N (3 ≤ N ≤ 100)
	•	다음 N개의 줄에, 각 줄마다 N개의 높이(1 이상 1000 이하 정수)가 공백으로 구분되어 주어집니다.

	•	봉우리(peak)의 개수

  input:
  5
  5 3 7 2 3
  3 7 1 6 1
  7 2 5 3 4
  4 3 6 4 1
  8 7 3 5 2

  output:
  10
*/

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

function solution(arr) {
  const dx = [-1, 1, 0, 0]; // 좌우
  const dy = [0, 0, 1, -1]; // 상하
  const N = arr.length;
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const current = arr[i][j];
      let isPeak = true;

      for (let k = 0; k < 4; k++) {
        const ni = i + dx[k];
        const nj = j + dy[k];

        if (ni < 0 || ni >= N || nj < 0 || nj >= N) continue;

        if (arr[ni][nj] >= current) {
          isPeak = false;
          break;
        }
      }
      if (isPeak) count++;
    }
  }

  return count;
}

console.log(solution(arr));
