/* 🧠 문제 설명

길이 N의 정수 배열이 주어질 때,
오른쪽으로 갈수록 값이 커지는(Strictly Increasing) 부분수열 중
가장 길이가 긴 것의 길이를 구하세요.

✅ 입력
첫째 줄: 정수 N  
(1 ≤ N ≤ 1000)  
둘째 줄: N개의 정수 a_1, a_2, …, a_N  
(각 |a_i| ≤ 10^9)

✅ 출력
	•	최장 증가 부분수열의 길이 (int)

input:
6
10 20 10 30 20 50

output:
4

// LIS 예시: 10 → 20 → 30 → 50  (길이 4)
*/
const inputLines = ["6", "10 20 10 30 20 50"];

function solution(inputLines) {
  const N = Number(inputLines[0]);
  const arr = inputLines[1].split(" ").map(Number);

  const dp = Array(N).fill(1);
  let result = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(result, dp[i]);
  }
  return result;
}

console.log(solution(inputLines));
