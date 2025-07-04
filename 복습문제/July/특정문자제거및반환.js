/* 🧠 문제 설명

문자열 s와 제거할 문자 letter가 주어집니다.
문자열 s에서 letter에 해당하는 모든 문자를 제거한 뒤,
남은 문자열을 반환하세요.


✅ 입력
	•	s: 문자열 (1 이상 100 이하, 영문 소문자)
	•	letter: 제거할 문자 (영문 소문자 한 글자)


✅ 출력
	•	letter가 제거된 문자열을 반환
*/

const s = "apple";
const letter = "p";

// 출력: "ale"

function solution(s, letter) {
  return s
    .split("")
    .filter((str) => str !== letter)
    .join("");
}

console.log(solution(s, letter));
