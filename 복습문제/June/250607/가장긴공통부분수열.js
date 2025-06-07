/* 🧠 문제 설명

두 개의 문자열 S와 T가 주어질 때,
S와 T의 부분수열(subsequence) 중에서 가장 긴 공통 부분수열의 길이를 구하세요.
	•	부분수열은 원래 문자열에서 문자의 상대적 순서를 유지하면서 일부(또는 전부)를 골라 만든 문자열입니다.
	•	반드시 연속일 필요는 없습니다.


✅ 입력
첫째 줄: 문자열 S  (길이 1 ≤ |S| ≤ 1 000)  
둘째 줄: 문자열 T  (길이 1 ≤ |T| ≤ 1 000)  
문자열은 알파벳 대문자만으로 이루어져 있습니다.

✅ 출력
	•	S와 T의 가장 긴 공통 부분수열의 길이 (정수)

*/

const inputLines = ["ACAYKP", "CAPCAK"];

function solution(inputLines) {
  const S = inputLines[0];
  const T = inputLines[1];

  const dp = Array.from({ length: S.length + 1 }, () =>
    Array(T.length + 1).fill(0)
  );

  for (let i = 1; i <= S.length; i++) {
    for (let j = 1; j <= T.length; j++) {
      if (S[i - 1] === T[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[S.length][T.length];
}

console.log(solution(inputLines));
