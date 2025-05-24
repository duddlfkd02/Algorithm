/* 🧠 문제 설명

정수 배열 nums가 주어질 때,
하나 이상의 연속된 요소들로 이루어진 부분 배열(subarray)의 합 중
가장 큰 값을 구하세요.

✅ 입력
첫째 줄: 정수 N                // 배열 길이 (1 ≤ N ≤ 100,000)  
둘째 줄: N개의 정수 nums[i]  (−10⁵ ≤ nums[i] ≤ 10⁵)

✅ 출력
	•	연속 부분 배열의 최대 합 (int)

input:
8
-2 1 -3 4 -1 2 1 -5 4

output:
6

// 부분 배열 [4, -1, 2, 1]의 합이 6으로 최댓값
*/

const inputLines = ["8", "-2 1 -3 4 -1 2 1 -5 4"];

function solution(inputLines) {
  const N = Number(inputLines[0]);
  const nums = inputLines[1].split(" ").map(Number);

  const dp = Array(N).fill(0);
  dp[0] = nums[0];
  let ans = dp[0];

  // i를 끝으로 비교함
  // 이전 i 값과 새로운 값 비교
  for (let i = 1; i < N; i++) {
    console.log("nums[i + 1]", nums[i + 1]);
    dp[i] = Math.max(
      dp[i - 1] + nums[i], // i-1까지 이어온 합에 nums[i] 더하기
      nums[i] // 이전 합을 완전히 버리고 여기서 새로 시작
    );
    console.log("dp[i]", dp[i]);
    ans = Math.max(ans, dp[i]);
  }
  return ans;
}

console.log(solution(inputLines));

/**
 * 잘못된 식 : dp[i] = Math.max(dp[i], nums[i + 1]);
 *
 * 1. 인덱스가 어긋남
 *  - nums[i + 1]을 비교 대상으로 썼는데,“현재 바라보는 위치”인 i에서 끝나는 연속 부분 배열을 구해야 함
 *  - 그럼 비교 대상은 nums[i]이어야지, 다음 요소인 nums[i+1]가 아니다.
 *
 * 2. dp[i]의 정의
 *  - dp[i]는 “i번째 원소를 끝으로 하는 연속 부분 배열의 최대 합”
 *  - i직전까지 이어온 부분 배열에 nums[i]를 붙여 보는 경우 (dp[i-1] + nums[i])
 *  - 아니면 여기서 새로 시작하는 경우 (nums[i])
 *  -> 두 가지를 비교해야함
 */
