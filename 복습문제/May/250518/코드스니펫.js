/* 🧠 자주 쓰이는 알고리즘 코드 스니펫 모음 (복습용) */

// 1. BFS - 최단 경로나 레벨 탐색
function bfs(start, adj) {
  const N = adj.length;

  const dist = Array(N).fill(-1);
  const visited = Array(N).fill(false);
  const queue = [];

  visited[start] = true;
  dist[start] = 0;
  queue.push(start);

  while (queue.length > 0) {
    const u = queue.shift();

    for (const v of adj[u]) {
      if (!visited[u]) {
        visited[v] = true;
        dist[v] = dist[u] + 1;
        queue.push(v);
      }
    }
  }
  return dist;
}

// 2. DFS - 모든 경로 탐색, 부분집합/순열
function dfs(index, sum) {
  // 기저 조건
  if (index === N) {
    if (sum === target) count++;
    return;
  }

  dfs(index + 1, sum + arr[index]); // 포함
  dfs(index + 1, sum); // 미포함
}
// 호출
let count = 0;
dfs(0, 0);

// 백트래킹(순열)
function permute(sum) {
  if (sum === target) {
    count++;
    return;
  }
  if (sum > target) return; // -> 가지치기

  for (let i = 0; i < N; i++) {
    if (!used[i]) {
      used[i] = true;
      permute(sum + arr[i]);
      used[i] = false;
    }
  }
}

// 3. 투포인터 / 슬라이딩 윈도우 - 연속 부분합, 쌍 찾기
function twoPointers(arr, M) {
  let left = 0;
  sum = 0;
  count = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > M) {
      sum -= arr[left++];
    }
    if (sum === M) count++;
  }
  return count;
}

// 4. 이분 탐색 - 정렬된 배열에서 범위/위치 탐색
function lowerBound(arr, target) {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (arr[mid] < target) low = mid + 1;
    else high = mid;
  }
  return low;
}

function upperBound(arr, target) {
  let low = 0,
    high = arr.length;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (arr[mid] <= target) low = mid + 1;
    else high = mid;
  }
  return low;
}

// 5. Disjoint Set (Union‑Find) - 사이클 검사, 그룹 관리
const parent = Array(N)
  .fill()
  .map((_, i) => i);
function find(x) {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x])); // 경로 압축
}

function union(a, b) {
  a = find(a);
  b = find(b);
  if (a !== b) parent[b] = a;
}

// 6. DP 1차원배낭문제
// items = [[w1,v1], [w2,v2], ...]
const dp = Array(W + 1).fill(0);
for (const [w, v] of items) {
  for (let j = W; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}
return dp[W];

// 7. DP: 최장 증가 부분수열
const dp2 = Array(N).fill(1);
let ans = 1;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (a[j] < a[i]) {
      dp2[i] = Math.max(dp2[i], dp2[j] + 1);
    }
  }
  ans = Math.max(ans, dp2[i]);
}
return ans;

/* 💡 격자 BFS (미로 탐색, 상하좌우 이동)와 관련된 문제라면 
  1.	adj 대신 2D grid 배열을 쓰고,
	2.	for (let k=0; k<4; k++) 와 (nx, ny) = (x+dx[k], y+dy[k]) 계산,
	3.	0 ≤ nx < R, 0 ≤ ny < C 범위 검사,
  4.	grid[nx][ny] === 1 또는 !visited[nx][ny] 체크
*/

/* 💡 lowerBound vs. upperBound
  두 함수의 틀(초기화, while (low<high) 루프, mid 계산, 반환값 low)은 똑같고,
if 절 비교 연산자(< vs. <=)만 다름
-> 뼈대는 동일한 이분탐색을 사용하고 비교 연산자만 다르게 해서 알고리즘 구현

	•	lowerBound
    •	arr[mid] < target 이면 low = mid + 1
    •	그렇지 않으면 high = mid
    •	결과: 첫 번째로 “arr[i] ≥ target” 이 되는 인덱스
*/
