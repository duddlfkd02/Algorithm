/* 🧠 문제 설명

숫자로 이루어진 배열 arr가 주어집니다.
이 배열을 왼쪽부터 오른쪽으로 순회하면서,
연속으로 같은 숫자가 나올 경우 하나만 남기고 제거한 새 배열을 반환하세요.

단, 연속되지 않은 같은 숫자는 제거 대상이 아닙니다.


✅ 입력
	•	arr: 길이 1 이상 1,000 이하의 정수 배열
	•	배열의 숫자는 0 이상 9 이하의 정수입니다

✅ 출력
	•	연속 중복을 제거한 배열을 반환하세요.
*/

const arr = [1, 1, 3, 3, 0, 1, 1];
// [1, 3, 0, 1]

function solution(arr) {
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== result[result.length - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(solution(arr));
