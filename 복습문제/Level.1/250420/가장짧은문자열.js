/* 🧠 문제 설명

문자열 s가 주어질 때,
문자열에서 같은 문자가 2개 연속으로 붙어있으면 제거하는 과정을 반복하여
남은 문자열의 길이를 반환하세요.


✅ 입출력
	•	문자열 s (길이 1 이상 1,000 이하, 소문자 알파벳만 포함)

  •	문자열에서 연속된 동일한 문자를 제거한 뒤 남는 문자열의 길이
	•	아무것도 남지 않으면 0을 반환하세요.

  input: "aabbcc"
  output: 0

  input: "abbaca"
  output: 3
  // 제거 순서: "abbaca" → "aaca" → "ca"
*/

/**
 * 접근 방식
 * 빈 배열 stack , for of로 문자 하나씩 순회하기
 * current str이 stack[stack.length - 1]과 같으면 pop(), 다르면? push();
 * stack 길이 반환하기
 */

const s = "abbaca";

function solution(s) {
  const stack = [];

  for (const str of s) {
    if (stack[stack.length - 1] === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  }
  return stack.length;
}

console.log(solution(s));
