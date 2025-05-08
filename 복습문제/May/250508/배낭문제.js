/* 🧠 문제 설명

무게 제한이 W인 배낭 하나가 있고,
각각 무게 w_i와 가치 v_i를 가진 N개의 물건이 있습니다.
각 물건은 최대 한 번만 넣을 수 있을 때,
배낭에 담을 수 있는 물건의 가치 합을 최대로 해 보세요.


✅ 입력
첫째 줄: 정수 N, W  
  (1 ≤ N ≤ 100, 1 ≤ W ≤ 100,000)

이후 N개의 줄:  
  i번째 줄에 두 정수 w_i, v_i  
  (1 ≤ w_i ≤ W, 1 ≤ v_i ≤ 1,000)

✅ 출력
	•	배낭에 담을 수 있는 물건들의 가치 합의 최댓값

input:
4 7
6 13
4 8
3 6
5 12

output:
14

// 4kg 가치8 + 3kg 가치6 = 14가 최댓값
*/

function solution(N, W, items) {
  // dp 초기화
  const dp = new Array(W + 1).fill(0);
  console.log("dp초기화", dp);

  for (const [w, v] of items) {
    console.log("items 요소 1개", [w, v]);
    // 뒤에서부터 순회해야 중복을 막을 수 있음
    for (let j = W; j >= w; j--) {
      console.log("j", j);
      dp[j] = Math.max(dp[j], dp[j - w] + v);
      console.log("dp[j]", dp[j]);
    }
  }
  return dp[W];
}

const N = 4;
const W = 7;
const items = [
  [6, 13],
  [4, 8],
  [3, 6],
  [5, 12],
];

console.log(solution(N, W, items));
