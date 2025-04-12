/* 🧠 문제 : 
영어로 이루어진 문자열 s가 주어집니다.
문자열에서 모음(a, e, i, o, u) 을 모두 제거한 뒤, 남은 문자열을 리턴하세요.
	•	대문자 모음(A, E, I, O, U)도 제거해야 합니다.

✅ 입출력
	•	s: 영어 대소문자로 이루어진 문자열 (길이 1 이상 1000 이하)
	•	모음이 제거된 문자열

input: "Hello World"
output: "Hll Wrld"

설명:
- "e", "o", "o"가 모음이므로 제거
*/

let s = "Hello World";

function solution(s) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  return s
    .split("")
    .filter((str) => !vowel.includes(str))
    .join("");
}
solution(s);

//배열.includes(문자)가 올바른 형태이기 때문에 str.includes(vowel)는 맞지 않는 표현
// filter는 조건과 함께 true/false를 리턴해야한다.
// map은 값 반환할 때 , filter는 값을 골라낼 때 사용!
