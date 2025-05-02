/* 🧠 문제 : 
자연수 n이 주어집니다.
n을 3진법(3을 밑으로 하는 진법) 으로 바꾼 뒤, 그 숫자를 뒤집어서 다시 10진법으로 변환한 값을 리턴하세요.

✅ 입출력 예시
	•	n: 1 이상 100,000,000 이하의 자연수
  •	변환하고 뒤집은 뒤의 10진법 값

input: 45
output: 7

과정:
- 45를 3진법으로 변환 → "1200"
- 뒤집기 → "0021"
- 10진법으로 다시 변환 → 7
*/

let n = 45;

function solution(n) {
  const ternary = n.toString(3);
  let reversed = ternary.split("").reverse().join("");
  // console.log(reversed.toString(10));
  return reversed.toString(10);
}

/*
🚨 문제점
reversed.toString(10)에서 10진법 적용이 안 되는 이유
: toString(10)은 숫자를 10진법 문자열로 변환하는 함수, reversed 문자열!
-> 문자열에 .toString(10)을 적용해도 단순 문자열로 남아버린다.
-> 이럴 때는 parseInt(문자열, n진법) 사용
*/

function solution(n) {
  const ternary = n.toString(3);
  let reversed = ternary.split("").reverse().join("");
  return parseInt(reversed, 3);
}
solution(n);
