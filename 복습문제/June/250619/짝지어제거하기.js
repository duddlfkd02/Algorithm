/* 🧠 문제 설명

소문자로 이루어진 문자열 s가 주어집니다.
이 문자열에서 같은 문자가 두 번 연속으로 나타나는 짝을 찾아서 제거하세요.
이 작업을 반복해서, 최종적으로 문자열이 모두 제거되면 1,
하나라도 남으면 0을 반환하세요.


✅ 입력
	•	s: 길이 1 이상 1,000,000 이하인 소문자 문자열

✅ 출력
	•	문자열을 모두 제거할 수 있다면 1, 그렇지 않으면 0
*/

const s = "baabaa";
// 출력: 1

function solution(s) {
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution(s));
