/* 🧠 문제 : 
정수 배열 arr이 주어집니다.
배열에서 짝수인 숫자들만 골라서 평균을 구해 주세요.

	•	짝수가 하나도 없으면 0을 반환하세요.

✅ 입출력 예시
	•	arr: 정수 배열 (길이 1 이상 100 이하)
	•	짝수만 평균을 구한 실수(float) 또는, 짝수가 없으면 0

1)
input: [1, 2, 3, 4, 5, 6]
output: 4

// 짝수: [2, 4, 6]
// 평균: (2 + 4 + 6) / 3 = 4

2)
input: [1, 3, 5, 7]
output: 0

// 짝수가 없으므로 0 반환
*/

let arr = [1, 2, 3, 4, 5, 6];

function solution(arr) {
  const filteredNum = arr.filter((num) => num % 2 === 0);
  if (filteredNum.length === 0) {
    return 0;
  }
  return filteredNum.reduce((acc, cur) => acc + cur) / filteredNum.length;
}

solution(arr);
