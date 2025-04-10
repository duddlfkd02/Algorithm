/* 🧠 문제 : 
정수를 담고 있는 배열 arr이 주어집니다.
배열에 담긴 정수들의 평균값을 구해서 리턴하세요.

✅ 입출력 예시
	•	arr: 정수 배열 (길이 1 이상 100 이하)
	•	각 원소는 -10,000 이상 10,000 이하의 정수입니다.
  •	평균값을 소수점까지 나타낸 실수(float) 형태로 반환

input: [1, 2, 3, 4]
output: 2.5

(1 + 2 + 3 + 4) / 4 = 2.5
*/

let arr = [1, 2, 3, 4];

function solution(arr) {
  let average = 0;

  average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

  return average;
}

solution(arr);
