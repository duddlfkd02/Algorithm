/* 🧠 문제 설명

1차원 배열에서 부분집합의 합이 S가 되는 경우의 수 구하기
	•	예: [1,2,3]에서 S=3인 부분집합은 [3], [1,2] → 2개

✅ 출력
 2

3 3
1 2 3
*/

function solution(grid) {
  const [N, S] = inputLine1.split(" ").map(Number);
  const arr = inputLine2.split(" ").map(Number);
  // N=3, S=3, arr=[1,2,3]

  function dfs(i, sum) {
    // dfs 역할 : 원소 각각을 포함하는가 하지 않는가
    if (i === N) {
      if (sum === S) total++;
      return;
    }

    dfs(i + 1, sum + arr[i]); // arr[i] 선택
    dfs(i + 1, sum); // arr[i] 선택하지 않음
  }

  let total = 0;
  dfs(0, 0);
}

const grid = [1, 2, 3];

console.log(solution(grid));

/**
dfs(0,0)
 ├─ 선택 arr[0]=1 → dfs(1,1)
 │    ├─ 선택 arr[1]=2 → dfs(2,3)
 │    │    ├─ 선택 arr[2]=3 → dfs(3,6) → sum≠3
 │    │    └─ 미선택         → dfs(3,3) → sum===3 → total++
 │    └─ 미선택 arr[1]      → dfs(2,1)
 │         ├─ 선택 arr[2]   → dfs(3,4) → sum≠3
 │         └─ 미선택        → dfs(3,1) → sum≠3
 └─ 미선택 arr[0]          → dfs(1,0)
      ├─ 선택 arr[1]=2     → dfs(2,2)
      │    ├─ 선택 arr[2]  → dfs(3,5) → sum≠3
      │    └─ 미선택       → dfs(3,2) → sum≠3
      └─ 미선택 arr[1]     → dfs(2,0)
           ├─ 선택 arr[2]  → dfs(3,3) → sum===3 → total++
           └─ 미선택       → dfs(3,0) → sum≠3
 */
