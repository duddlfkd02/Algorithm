/* 🧠 문제 설명

명함을 넣을 지갑을 만들려고 합니다.
명함은 회전이 가능하므로,
가로·세로 중 더 긴 쪽을 지갑의 가로,
짧은 쪽을 지갑의 세로로 정렬해서 넣을 수 있습니다.

여러 개의 명함 크기가 주어질 때,
가장 작은 지갑 크기(가로 × 세로)를 구하세요.


✅ 입력
	•	sizes: 각 명함의 [가로, 세로] 배열 (1 이상 10,000개 이하, 각 값은 1~1,000)


✅ 출력
	•	가장 작은 지갑의 면적 (정수)
*/

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

// 출력: 4000

// sizes를 하나씩 순회하면서 두 숫자 중에서 긴 것을 판별
// 사이즈가 이전 사이즈보다 크면 교체
// 최종 가 x 세 계산 후 return

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let [w, h] of sizes) {
    const [long, short] = w > h ? [w, h] : [h, w];

    maxWidth = Math.max(maxWidth, long);
    maxHeight = Math.max(maxHeight, short);
  }
  return maxWidth * maxHeight;
}

console.log(solution(sizes));
