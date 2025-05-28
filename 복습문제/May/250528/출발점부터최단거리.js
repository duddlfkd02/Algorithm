/* 🧠 문제 설명

방향성이 없는 가중치 그래프가 주어질 때,
1번 정점에서 각 정점까지의 최단 거리를 모두 구하세요.
경로가 존재하지 않으면 Infinity 혹은 적절한 표시로 남기시면 됩니다.

✅ 입력
첫째 줄: 정점 개수 N, 간선 개수 M  
(1 ≤ N ≤ 1,000, 1 ≤ M ≤ 50,000)  
다음 M줄: u v w  
  // 양방향 간선 u–v, 가중치 w (1 ≤ u,v ≤ N, 1 ≤ w ≤ 10,000)



✅ 출력
첫째 줄: 정점 개수 N, 간선 개수 M  
(1 ≤ N ≤ 1,000, 1 ≤ M ≤ 50,000)  
다음 M줄: u v w  
  // 양방향 간선 u–v, 가중치 w (1 ≤ u,v ≤ N, 1 ≤ w ≤ 10,000)



input:
5 6
1 2 2 u v w
1 3 5
2 3 1
2 4 2
3 5 3
4 5 1

output:
0
2
3
4
5
*/

const inputLines = [
  "5 6",
  "1 2 2",
  "1 3 5",
  "2 3 1",
  "2 4 2",
  "3 5 3",
  "4 5 1",
];

function solution(inputLines) {
  const [N, M] = inputLines[0].split(" ").map(Number);
  const adj = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= M; i++) {
    const [u, v, w] = inputLines[i].split(" ").map(Number);
    adj[u].push([v, w]);
    adj[v].push([u, w]);
  }
  // 예제일 때, adj[1] = [[2,2],[3,5]], adj[2] = [[1,2],[3,1],[4,2]], …

  const dist = Array(N + 1).fill(Infinity);

  dist[1] = 0;

  // 간단한 우선순위 큐 역할: [거리, 정점] 쌍을 담는 배열
  let pq = [[0, 1]];

  while (pq.length > 0) {
    //가장 짧은 후보를 꺼내기 위해 정렬
    pq.sort((a, b) => a[0] - b[0]);

    const [d, u] = pq.shift();
    // d: 현재 꺼낸 후보의 거리, u: 그때의 정점 번호
    // 예: 첫 루프에 [0,1]이 꺼져서 d=0, u=1

    // 이미 더 짧은 경로를 발견했으면 이 엔트리는 무시
    if (d > dist[u]) continue;
    // 예: 나중에 u까지 거리가 3으로 갱신된 뒤 [5,3] 같은 후보가 나오면 스킵

    //u에서 이어지는 모든 간선을 검사
    for (const [v, w] of adj[u]) {
      const nd = d + w; // u까지 거리 d + u→v 가중치
      if (dist[v] > nd) {
        dist[v] = nd;
        pq.push([nd, v]);
      }
    }
  }

  // dist[1] = 0, dist[2] = 2, dist[3] = 3, dist[4] = 4, dist[5] = 5
  return dist;
}

console.log(solution(inputLines));
