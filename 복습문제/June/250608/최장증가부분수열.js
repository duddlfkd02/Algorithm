/* 🧠 문제 설명

크기가 N인 정수 배열이 주어질 때,
배열에서 증가하는 (각 원소가 바로 앞 원소보다 커야 함)
부분수열(subsequence)의 길이 중에서 가장 긴 것의 길이를 구하세요.
	•	부분수열은 원래 순서를 유지하면서 일부 원소를 골라 만든 수열입니다.
	•	연속할 필요는 없지만, 인덱스 순서는 지켜야 합니다.


✅ 입력
첫째 줄: 정수 N  (1 ≤ N ≤ 1 000)  
둘째 줄: N개의 정수 A[i]  (−10 000 ≤ A[i] ≤ 10 000)

✅ 출력
	•	배열에서 만들 수 있는 증가 부분수열 중 최대 길이 (정수)

*/

const inputLines = ["6", "10 20 10 30 20 50"];

function solution(inputLines) {
  const N = Number(inputLines[0]);
  const arr = inputLines[1].split(" ").map(Number);

  const dp = Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  const answer = Math.max(...dp);
  return answer;
}

console.log(solution(inputLines));
