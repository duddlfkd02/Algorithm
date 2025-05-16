/* 🧠 문제 설명

서로 다른 양의 정수 N개와 목표 합 S가 주어집니다.
이 정수들을 한 번씩만 사용해서 만들 수 있는 모든 순서 있는 부분수열(순열) 중,
원소들의 합이 정확히 S가 되는 경우의 수를 구하세요.
	•	각 숫자는 최대 한 번만 골라 쓸 수 있습니다.
	•	순서가 다르면 다른 경우로 센다(예: [2,3]와 [3,2]는 별개).

✅ 입력
첫째 줄: 정수 N, S  
(1 ≤ N ≤ 8, 1 ≤ S ≤ 50)
둘째 줄: N개의 서로 다른 양의 정수 a_1, a_2, …, a_N  
(각 a_i ≤ 50)

✅ 출력
	•	합이 S인 순열의 총 개수 (int)

input:
3 5
1 2 3

output:
2

// 가능한 순열: [2,3], [3,2]
*/

const inputLines = ["3 5", "1 2 3"];

function solution(inputLines) {
  const [N, S] = inputLines[0].split(" ").map(Number); // N:3 , S:5
  const arr = inputLines[1].split(" ").map(Number); // arr [1,2,3]

  const visited = Array(N).fill(false);
  let sum = 0;

  function dfs(currentSum) {
    if (currentSum > S) return;

    if (currentSum === S) {
      sum++;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(currentSum + arr[i]);
        visited[i] = false; // 표시 → 재귀 → 표시 해제 (다음 분기에서 재사용할 수 있게 해제 처리)
      }
    }
  }
  dfs(0);
  return sum;
}

console.log(solution(inputLines));
