/* 🧠 문제 : 
정수 n과 r이 주어집니다.
n을 어떤 수 x로 나누었을 때, 나머지가 r이 되는 가장 작은 자연수 x를 구하세요.
	•	단, 1 ≤ r < n


✅ 입출력
	•	x는 2 이상 n 미만의 자연수
	•	n % x === r이 되는 가장 작은 x를 구하면 됩니다
	•	없다면 -1 반환 x

input: n = 14, r = 3
output: 11

// 14 % 11 === 3
*/

function solution(n, r) {
  for (let x = 2; x < n; x++) {
    if (n % x === r) {
      return x;
    }
  }
  return -1;
}

// Array.from() 사용하기
function solution(n, r) {
  const x = Array.from({ length: n - 2 }, (_, i) => i + 2).find(
    (x) => n % x === r
  );
  return x ?? -1;
}
console.log(solution(14, 3));
console.log(solution(10, 1));
console.log(solution(9, 7));
console.log(solution(10, 0));
