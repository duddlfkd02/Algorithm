/* 🧠 문제 설명

길이가 n인 문자열을 반환하세요.
문자열은 "수박수박수박..." 패턴으로 이루어져 있어야 합니다.
즉, "수박"이 번갈아 가며 반복되어야 하며
총 길이는 정확히 n이어야 합니다.


✅ 입력
	•	n: 1 이상 10,000 이하의 정수

✅ 출력
	•	길이 n인 "수박수박..." 패턴의 문자열
*/

const n = 5;

function solution(n) {
  const soo = "수";
  const bak = "박";
  let result = "";

  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (result += soo) : (result += bak);
  }
  return result;
}

console.log(solution(n));

// 성능 개선 버전 repeat + slice
function refactor(n) {
  return "수박".repeat(Math.ceil(n / 2)).slice(0, n);
}

console.log(refactor(n));
