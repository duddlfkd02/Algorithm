/* 🧠 문제 : 
명함을 넣을 지갑을 만들려고 합니다.
명함들은 가로와 세로가 다 다를 수 있고, 명함을 회전할 수도 있습니다.
(즉, 가로 <-> 세로 바꿔도 됨)

모든 명함을 넣을 수 있는 지갑 크기의 최소 넓이를 구하세요.

✅ 입출력 예시
	•	sizes: 각 명함의 가로, 세로를 담은 2차원 배열
  •	지갑의 최소 넓이

input: [[60, 50], [30, 70], [60, 30], [80, 40]]
output: 4000

// 설명:
// 각 명함을 회전시켜 가로와 세로를 바꿀 수 있음.
// 명함들을 회전해서 (큰 쪽, 작은 쪽)으로 놓으면
// [60, 50], [70, 30], [60, 30], [80, 40]
// 가장 큰 가로: 80
// 가장 큰 세로: 50
// 80 x 50 = 4000
*/

/*
🚨 힌트
- 각 명함에서 가로와 세로 중 큰 값을 “가로”로, 작은 값을 “세로”로 맞춘다.
- 그 명함들 중 “가장 큰 가로”, “가장 큰 세로”를 찾는다.
- 최종적으로 지갑 크기는 “가장 큰 가로 × 가장 큰 세로”

명함 하나하나의 큰 값/작은 값을 맞춘 다음 → 전체 중 최댓값 찾기
*/

function solustion(sizes) {
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

// 더 간딘한 방법

function solution(sizes) {
  const rotated = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)]);
  const maxWidth = Math.max(...rotated.map(([w, _]) => w));
  const maxHeight = Math.max(...rotated.map(([_, h]) => h));

  return maxWidth * maxHeight;
}
