/* 🧠 문제 설명

방향성이 있는 가중치 그래프가 주어집니다.
정점의 개수 N, 간선의 개수 M, 그리고 시작 정점 K가 주어질 때,
시작 정점 K에서 모든 정점으로 가는 최단 경로 거리를 구하세요.
도달할 수 없는 정점에는 “INF”를 출력합니다.

✅ 입력
첫째 줄: 정수 N, M, K  
  (1 ≤ N ≤ 20,000, 1 ≤ M ≤ 300,000, 1 ≤ K ≤ N)

이후 M개의 줄: 정수 u, v, w  
  (u에서 v로 가는 비용이 w인 간선, 1 ≤ w ≤ 10)

✅ 출력
	•	총 N줄에 걸쳐, 정점 1번부터 N번까지
시작점 K에서 해당 정점으로 가는 최단 거리를 한 줄에 하나씩 출력
	•	도달 불가한 정점은 INF로 출력


input:
6 11 1
1 2 2
1 3 5
1 4 1
2 3 3
2 4 2
3 2 3
3 6 5
4 3 3
4 5 1
5 3 1
5 6 2

output:
0
2
3
1
2
4
*/

function solution(N, M, k, edges) {
  // 1) 거리 배열 초기화
  const dist = Array(N + 1).fill(Infinity);

  // 2) 인접 리스트(Adjacency List) 생성
  const adj = Array.from({ length: N + 1 }, () => []);
  for (const [u, v, w] of edges) {
    adj[u].push([v, w]);
  }

  // 3) 시작 정점 거리 0, 우선순위 큐에 삽입
  dist[k] = 0;
  const pq = [[0, k]]; // [현재까지의 거리, 정점]

  // 4) 메인 루프: 큐가 빌 때까지
  while (pq.length > 0) {
    // 4-a) “지금까지 가장 짧은 경로 후보” 꺼내기
    pq.sort((a, b) => a[0] - b[0]);
    const [cd, u] = pq.shift();
    //    cd: u까지의 현재 최단 후보 거리

    // 4-b) 만약 이미 더 짧은 경로로 업데이트된(dist[u]) 값이
    //       cd보다 작으면 버리기
    if (cd > dist[u]) continue;

    // 4-c) u에서 뻗어나가는 모든 간선을 검사
    for (const [v, w] of adj[u]) {
      const nd = cd + w; // u→v로 가는 거리 합산
      if (nd < dist[v]) {
        //  더 짧은 경로를 찾았으니 갱신
        dist[v] = nd;
        //  새로운 후보로 큐에 추가
        pq.push([nd, v]);
      }
    }
  }

  // 5) 결과 문자열 만들기
  let result = "";
  for (let i = 1; i <= N; i++) {
    result += (dist[i] === Infinity ? "INF" : dist[i]) + "\n";
  }
  return result.trim();
}
const N = 6;
const M = 11;
const k = 1;
const edges = [
  [1, 2, 2],
  [1, 3, 5],
  [1, 4, 1],
  [2, 3, 3],
  [2, 4, 2],
  [3, 2, 3],
  [3, 6, 5],
  [4, 3, 3],
  [4, 5, 1],
  [5, 3, 1],
  [5, 6, 2],
];

console.log(solution(N, M, k, edges));

/**
  1.	dist 배열: 최단 거리 저장소
	2.	adj 인접 리스트: 각 정점의 모든 간선을 빠르게 순회
	3.	pq (우선순위 큐): “가장 짧은 후보 거리”부터 처리
	4.	완화: cd + w < dist[v] → 갱신
	5.	반복: 큐가 빌 때까지 → 모든 정점 최단 거리 확정 → 출력
 * 
 * 
 * 다익스트라 알고리즘은 특정한 하나의 정점에서 다른 모든 정점으로 가는 최단 경로를 계산한다. 이때, 거리가 음수인 간선은 포함할 수 없다.
 */
