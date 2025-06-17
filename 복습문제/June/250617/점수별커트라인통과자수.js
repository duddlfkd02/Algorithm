/* 🧠 문제 설명

시험 점수가 담긴 배열 scores가 주어집니다.
각 사람은 0점에서 100점 사이의 점수를 받습니다.

이 중 상위 k명까지만 합격자로 간주합니다.
(동점자는 모두 포함하지 않고, 정확히 k명만 뽑습니다.)

이때, 각 사람의 점수가 주어졌을 때
자신이 합격 가능한지 여부를 boolean 배열로 반환하세요.


✅ 입력
	•	scores: 정수 배열 (1 ≤ scores.length ≤ 1,000), 각 원소는 0~100 사이 정수
	•	k: 정수 (1 ≤ k ≤ scores.length)

✅ 출력
	•	합격 여부를 true/false로 담은 boolean 배열 (입력 순서 기준)
*/

const scores = [60, 80, 90, 70, 85];
const k = 3;

// [false, true, true, false, true]

function solution(scores) {
  const map = scores.map((score, index) => [index, score]);

  map.sort((a, b) => b[1] - a[1]);
  console.log(map);

  // k명까지만 index 추출
  const pass = new Set(map.slice(0, k).map(([index]) => index)); // [2, 90] → 2, [4, 85] → 4, [1, 80] → 1

  console.log("pass", pass); // Set { 2, 4, 1 }

  return scores.map((_, i) => pass.has(i));
}

console.log(solution(scores));
