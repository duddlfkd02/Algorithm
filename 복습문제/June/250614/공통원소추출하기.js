/* 🧠 문제 설명

두 개의 정수 배열 arr1, arr2가 주어집니다.
두 배열에서 공통으로 등장하는 원소들을 모두 찾아,
오름차순으로 정렬된 배열로 반환하세요.

단, 중복된 숫자는 1번만 포함되도록 합니다.


✅ 입력
function solution(arr1, arr2)
	•	arr1, arr2: 길이 1 이상 10,000 이하의 정수 배열
	•	배열 내 정수는 1 이상 100,000 이하의 자연수

✅ 출력
	•	공통된 원소를 오름차순으로 정렬한 배열을 반환
	•	공통된 원소가 없다면 빈 배열 [] 반환
*/

const arr1 = [1, 3, 4, 5, 7];
const arr2 = [3, 5, 6, 7, 8];

function solution(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [...set1].filter((num) => set2.has(num));

  return result.sort((a, b) => a - b);
}

console.log(solution(arr1, arr2));
