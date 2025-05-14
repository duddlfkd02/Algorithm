/* 🧠 문제 설명

가중치가 0 또는 1인 작은 그래프에서 최단 거리 구하기

노드: 4개 (번호 0,1,2,3)
간선 리스트 (출발, 도착, 가중치):
[0, 1, 0]
[1, 3, 1]
[0, 2, 1]
[2, 3, 0]

목표: 0번 노드에서 3번 노드까지 이동할 때 가중치 합이 최소가 되도록 경로를 찾으세요.
*/

const N = 4;
const edges = [
  [0, 1, 0],
  [1, 3, 1],
  [0, 2, 1],
  [2, 3, 0],
];

function solution(edges) {
  // 인접 리스트 생성
  const adj = Array.from({ length: N }, () => []);
  for (const [u, v, w] of edges) {
    adj[u].push([v, w]);
  }

  // 거리 배열 초기화
  const dist = Array(N).fill(Infinity);
  dist[0] = 0; // 시작점 거리 0

  // 덱(deque) 초기화
  const deque = [];
  deque.unshift(0);

  // 0-1 BFS
  while (deque.length > 0) {
    const u = deque.shift();

    for (const [v, w] of adj[u]) {
      if (dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
        if (w === 0) {
          deque.unshift(v);
        } else {
          deque.push(v);
        }
      }
    }
  }

  // 3번 노드까지의 최단 거리 반환
  return dist[3];
}

// 0번에서 3번까지 최소 가중치 합 출력
console.log(solution(edges)); // 1
