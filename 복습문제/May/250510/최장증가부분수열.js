/* 🧠 문제 설명

주어진 길이 N의 정수 배열에서,
오른쪽으로 갈수록 값이 커지는 부분수열(subsequence)을 골라 내려고 합니다.
(연속일 필요는 없고, 인덱스가 증가하는 순서대로 원소를 뽑되, 값은 strictly increasing)
이때 만들 수 있는 가장 긴 증가 부분수열의 길이를 구하세요.


✅ 입력
	•	첫째 줄: 정수 N (1 ≤ N ≤ 100,000)
	•	둘째 줄: 공백으로 구분된 정수 a_1, a_2, \dots, a_N
(각 |a_i| ≤ 10^9)

✅ 출력
	•	가장 긴 증가 부분수열의 길이 (int)

input:
8
10 20 10 30 20 50 40 60

output:
5

// LIS 예시: 10 → 20 → 30 → 50 → 60  (길이 5)
*/

function solution(a) {
  const N = a.length;
  const dp = Array(N).fill(1); // dp[i] : i번 요소를 마지막으로 하는 증가 부분수열 중 최대 길이 -> 자기자신만 골라도 길이가 1이므로 1로 초기화
  let result = 1;

  // 이중반복문으로 이전 값과 비교
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (a[j] < a[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(result, dp[i]);
  }
  return result;
}

const a = [10, 20, 10, 30, 20, 50];

console.log(solution(a));
