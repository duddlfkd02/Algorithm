/* 🧠 문제 설명

문자열 s가 주어졌을 때,
문자 중복을 제거하고,
남은 문자를 오름차순(사전 순)으로 정렬한 문자열을 반환하세요.


✅ 입력
	•	s: 길이 1 이상 1,000 이하의 소문자 문자열

✅ 출력
	•	중복을 제거하고 정렬한 결과 문자열을 반환
*/

const s = "banana";
// 출력: abn

function solution(s) {
  return Array.from(new Set(s).sort().join(""));
}

console.log(solution(s));
