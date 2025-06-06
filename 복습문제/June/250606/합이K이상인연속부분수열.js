/* 🧠 문제 설명

길이 N인 양수 정수 배열 A와 정수 K가 주어질 때,
“연속된 부분수열(subarray)” 중에서 합이 K 이상인 것들 중에서,
그 길이가 가장 짧은 것의 길이를 구하세요.
만약 합이 K 이상인 부분수열이 하나도 없으면 0을 출력합니다.


✅ 입력
첫째 줄: 정수 N, 정수 K  
  (1 ≤ N ≤ 100,000, 1 ≤ A[i] ≤ 10,000, 1 ≤ K ≤ 10^9)  
둘째 줄: N개의 양수 정수 A[i]

✅ 출력
	•	합이 K 이상인 모든 연속 부분수열 중에서 최소 길이 (int)
	•	만약 그런 부분수열이 없으면 0을 출력

*/

const input = ["10 15", "5 1 3 5 10 7 4 9 2 8"];

function solution(input) {
  const [N, K] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  let left = 0;
  let right = 0;
  let sum = 0;
  let result = Infinity;

  while (true) {
    if (sum < K) {
      if (right === N) break;
      sum += arr[right];
      right++;
    } else {
      result = Math.min(result, right - left);
      sum -= arr[left];
      left++;
    }
  }

  if (result === Infinity) result = 0;

  return result;
}

console.log(solution(input));
