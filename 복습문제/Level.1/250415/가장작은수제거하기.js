/* 🧠 문제 : 
정수로 이루어진 리스트 arr이 주어집니다.
이 리스트에서 가장 작은 수를 제거한 배열을 반환하는 함수를 작성하세요.

단, 리스트에 원소가 하나만 있으면 [-1]을 반환합니다.


✅ 입출력
	•	arr: 1개 이상 1,000,000개 이하의 정수 배열
	•	각 수는 1 이상 10,000 이하의 자연수

	•	가장 작은 수를 제거한 배열
	•	단, 배열의 길이가 1이면 [-1]을 반환

input: [4, 3, 2, 1]
output: [4, 3, 2]

input: [10]
output: [-1]
*/

const arr = [4, 3, 2, 1];

function solution(arr) {
  if (arr.length === 1) return [-1];
  const min = Math.min(...arr);
  return arr.filter((num) => num !== min);
}
solution(arr);
