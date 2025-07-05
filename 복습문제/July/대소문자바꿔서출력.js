/* 🧠 문제 설명

문자열 s가 주어졌을 때,
영문자의 대문자는 소문자로, 소문자는 대문자로 바꿔서 출력하세요.


✅ 입력
	•	s: 길이 1 이상 1,000 이하의 문자열 (영문자 + 공백)


✅ 출력
	•	대소문자가 바뀐 새 문자열
*/

const s = "Hello World";

// 출력: "hELLO wORLD"

function solution(s) {
  return s
    .split("")
    .map((str) => {
      if (str === str.toUpperCase()) {
        return str.toLowerCase();
      } else {
        return str.toUpperCase();
      }
    })
    .join("");
}

console.log(solution(s));
