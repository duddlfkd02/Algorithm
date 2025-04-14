/* 🧠 문제 : 
각각 다른 크기의 명함들을 지갑에 넣으려고 합니다.
명함은 회전할 수 있습니다. (가로/세로를 바꿔도 됩니다.)
모든 명함을 담을 수 있는 최소한의 지갑 크기(가로 × 세로) 를 구하세요.


✅ 입출력
	•	sizes: 명함의 가로와 세로가 담긴 2차원 배열
	•	1 ≤ 가로, 세로 ≤ 1000
	•	명함은 1개 이상 10,000개 이하

  •	모든 명함을 담을 수 있는 지갑의 최소 넓이

input: [[60, 50], [30, 70], [60, 30], [80, 40]]
output: 4000

설명:
- 명함은 회전할 수 있다.
- 명함들을 회전해서 가로, 세로를 맞춘다.
- 가로 중 최대: 80, 세로 중 최대: 50
- 지갑 크기: 80 * 50 = 4000
*/

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;
  for (const size of sizes) {
    const [w, h] = size;

    const width = Math.max(w, h);
    const height = Math.min(w, h);

    maxWidth = Math.max(maxWidth, width);
    maxHeight = Math.max(maxHeight, height);
  }
  return maxWidth * maxHeight;
}
