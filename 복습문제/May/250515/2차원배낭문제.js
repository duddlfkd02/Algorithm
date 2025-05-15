/* 🧠 문제 설명

무게 제한 W인 배낭이 있고,
각 물건 i마다 무게 w_i와 가치 v_i가 주어집니다.
각 물건은 한 번만 넣을 수 있을 때,
“배낭에 담을 수 있는 최대 가치 합”을 구하세요.

✅ 입력
첫째 줄: 정수 N, W  
  (1 ≤ N ≤ 100, 1 ≤ W ≤ 10_000)

다음 N줄: 두 정수 w_i, v_i  
  (1 ≤ w_i ≤ W, 1 ≤ v_i ≤ 1_000)

✅ 출력
배낭에 담을 수 있는 물건들의 가치 합의 최댓값

input:
4 7
6 13   // w₁=6kg, v₁=13
4 8    // w₂=4kg, v₂=8
3 6    // w₃=3kg, v₃=6
5 12   // w₄=5kg, v₄=12

output:
14
// 4kg 가치8 + 3kg 가치6 = 14
*/

/**
 * 변수 의미
 * N : 물건(아이템)의 개수
 * W : 배낭이 담을 수 있는 최대 무게 
 * w_i : i번째 물건의 무게
 * v_i : i번째 물건의 가치

 */

inputLines = ["4 7", "6 13", "4 8", "3 6", "5 12"];

function solution(inputLines) {
  const [N, W] = inputLines[0].split(" ").map(Number);
  console.log("[N,W]", [N, W]);

  const items = [];
  for (let i = 0; i < N; i++) {
    const [w, v] = inputLines[i + 1].split(" ").map(Number);
    console.log("[w, v]", [w, v]);
    items.push([w, v]);
  }
  const dp = Array(W + 1).fill(0);
  console.log("dp", dp);

  for (const [w, v] of items) {
    for (let j = W; j >= w; j--) {
      dp[j] = Math.max(dp[j], dp[j - w] + v);
      console.log("dp[j]", dp[j]);
    }
  }
  return dp[W];
}

console.log(solution(inputLines));
