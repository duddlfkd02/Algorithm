/* 🧠 문제 설명

문자열 s가 주어질 때,
(, ), {, }, [ ,] 의 괄호들이
모두 올바르게 짝을 이루고 중첩되어 있는지 판단하세요.
	•	예를 들어
	•	"()[]{} → true`
	•	"([)]" → false
	•	"{[]}" → true

✅ 입력
문자열 s  (1 ≤ s.length ≤ 10⁴)

✅ 출력
	•	올바른 괄호 구조이면 true, 아니면 false

input:
5 7
1 5 3 4 2

output:
2

// 가능한 쌍: (1,6)? 아니고, (5+2), (3+4) 두 가지
*/

const s = "()[]{}";

function solution(s) {
  // 여는 괄호 => 스택에 넣기
  // 닫는 괄호 => 스택에 짝이 있는지 확인 / 아니면 false
  // 스택이 비어있으면 true / 남아있으면 false

  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  while (s.length > 0) {
    for (const char of s) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else {
        if (stack.length === 0 || stack.pop() !== pairs[char]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}

console.log(solution(s));
console.log(solution("([)]"));
console.log(solution("{[]}"));
