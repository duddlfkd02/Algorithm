/* 🧠 문제 설명

노드: 4개 (번호 0,1,2,3)
간선 리스트 (u, v, w):
[0, 1, 1]
[0, 2, 3]
[1, 2, 1]
[1, 3, 4]
[2, 3, 2]

이 중에서 네 개의 노드를 모두 연결하되, 가중치 합을 최소로 만드는 간선들의 합을 구하세요.
*/

let edges = [
  [0, 1, 1],
  [0, 2, 3],
  [1, 2, 1],
  [1, 3, 4],
  [2, 3, 2],
];

function solution(edges) {
  // 1) 정렬 - w 기준
  edges.sort((a, b) => a[2] - b[2]);

  // 2) DSU 초기화
  const parent = [];
  for (let i = 0; i < 4; i++) parent[i] = i;

  function find(u) {
    if (parent[u] === u) return u;
    return (parent[u] = find(parent[u]));
  }

  function union(u, v) {
    const ru = find(u),
      rv = find(v);
    if (ru !== rv) parent[rv] = ru;
  }

  // 3) 크루스칼 루프
  let mstWeight = 0;
  for (const [u, v, w] of edges) {
    if (find(u) !== find(v)) {
      union(u, v);
      mstWeight += w;
    }
  }
  return mstWeight;
}

console.log(solution(edges));

/**
 * 크루스칼 알고리즘 : 가장 가중치가 작은 간선부터 차례로 연결해 나가면, 최종적으로 최소 신장 트리가 완성된다. ( -> 그리디 알고리즘의 일종)
 * - 그래프에는 정점(vertex)과 간선(edge)가 있는데, 간선에 가중치가 포함되어 있음
 * - 그래프 간선들을 가중치의 오름차순으로 정렬해 놓은 뒤, 사이클을 형성하지 않는 선에서 정렬된 순서대로 간선을 선택
 *
 * Union & Find 활용 : 서로소 집합을 표현하는 자료구조
 * 서로 다른 두 집합을 병합하는 Union 연산, 집합 원소가 어떤 집합에 속해있는지 찾는 Find
 *
 * https://chanhuiseok.github.io/posts/algo-33/
 */
