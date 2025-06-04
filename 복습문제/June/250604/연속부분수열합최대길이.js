/* 🧠 문제 설명

정수 N과 K가 주어지고, 길이 N인 양수 정수 배열 A가 주어질 때,
“합이 K 이하인 연속된 부분수열(서브어레이)” 중에서 가장 긴 길이를 구하세요.

✅ 입력
첫째 줄: 정수 N, 정수 K  
  (1 ≤ N ≤ 200,000, 1 ≤ A[i] ≤ 10^4, 1 ≤ K ≤ 10^9)  
둘째 줄: N개의 양수 정수 A[i]


✅ 출력
	•	합이 K 이하인 연속 부분수열 중 최대 길이 (int)

*/

const input = ["6 15", "5 1 3 5 10 7"];

function solution(input) {
  const [N, K] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  let left = 0;
  let right = 0;
  let sum = 0;
  let result = 0;

  while (right < N) {
    if (sum + arr[right] <= K) {
      sum += arr[right];
      right++;

      result = Math.max(result, right - left);
    } else {
      sum -= arr[left];
      left++;
    }
  }
  return result;
}

console.log(solution(input));
