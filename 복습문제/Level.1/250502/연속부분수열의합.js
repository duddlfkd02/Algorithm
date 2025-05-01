/* 🧠 문제 설명

길이 N인 양의 정수 배열 arr와 목표값 M이 주어집니다.
배열에서 연속된 원소들의 합이 M이 되는 경우가 총 몇 개 있는지 구하세요.


✅ 입출력
	1.	첫 줄에 정수 N (1 ≤ N ≤ 100,000)과 M (1 ≤ M ≤ 10^9)
	2.	둘째 줄에 공백으로 구분된 양의 정수 N개 (arr[0]…arr[N-1], 각 값 ≤ 10^4)

	•	연속된 부분수열의 합이 M이 되는 경우의 개수

input:
8 6
1 2 1 3 1 1 1 2

output:
3

// 합이 6이 되는 부분수열은
// [2,1,3], [1, 3, 1, 1], [3,1,1,1] 총 3개
*/

function solution(arr, M) {
  const N = arr.length;
  let left = 0; // sum 이 크면 차례대로 뺄 index
  let count = 0; // M 값 맞춘 횟수
  let sum = 0;

  for (let right = 0; right < N; right++) {
    sum += arr[right]; // 윈도우 확장

    while (sum > M && left <= right) {
      // 목표값 초과시 left 활용해서 윈도우 좁히기
      sum -= arr[left];
      left++;
    }
    if (sum === M) count++;
  }

  return count;
}
console.log(solution(arr, M));
