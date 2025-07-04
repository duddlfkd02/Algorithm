/* 🧠 문제 설명

정수 배열 arr와 제거할 값 target이 주어집니다.
배열 arr에서 target에 해당하는 숫자들을 모두 제거한 새 배열을 반환하세요.
단, 제거 후 남은 숫자가 하나도 없다면 [-1]을 반환하세요.


✅ 입력
	•	arr: 정수 배열 (길이 1 이상 100 이하)
	•	target: 제거할 정수


✅ 출력
	•	target을 제거한 배열. 단, 빈 배열이 되면 [-1]을 반환
*/

const arr = [1, 2, 3, 4, 3];
const target = 3;

// 출력: [1, 2, 4]

function solution(arr, target) {
  const filteredNum = arr.filter((num) => num !== target);

  return filteredNum.length === 0 ? [-1] : filteredNum;
}

console.log(solution(arr, target));
