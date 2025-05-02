/* 🧠 문제 설명

0 또는 양의 정수가 담긴 배열 numbers가 주어졌을 때,
숫자들을 이어붙여 만들 수 있는 수 중 가장 큰 수를 문자열로 return 하세요.

단, 이번에는 다음 조건이 추가됩니다:

숫자들을 이어붙여 만든 수 중에서 가장 큰 수 중에서
“짝수로 끝나는 수”만 정답 후보로 인정한다.


✅ 입출력
	•	numbers: 1 이상 10,000 이하의 정수 배열

	•	모든 조합 중 가장 큰 수 (단, 마지막 자릿수가 짝수여야 함)
	•	조건을 만족하는 조합이 없다면 "0"을 반환하세요.

input: [3, 30, 34, 5, 9]
output: "953430"

→ "9534330" 정답

input: [9, 5, 1]
output: "0"

→ 만들 수 있는 조합이 모두 홀수로 끝나므로 0
*/

/**
 * 접근 방식
 * numbers index 중 짝수로 끝나는 숫자는 맨 뒤로 빼기 (없다면 0 반환)
 * 문자열로 변환 후 조합하기
 */

const numbers = [3, 30, 34, 5, 9];

function solution(numbers) {
  const strNumbers = numbers.map(String);

  strNumbers.sort((a, b) => (a + b < b + a ? 1 : -1));

  const join = strNumbers.join("");

  if (join[0] === "0") return "0";

  const lastDigit = Number(join[join.length - 1]);
  return lastDigit % 2 === 0 ? join : "0";
}

console.log(solution(numbers));
