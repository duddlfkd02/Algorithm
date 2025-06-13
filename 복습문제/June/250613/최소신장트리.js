/* 🧠 문제 설명

정점이 V개, 간선이 E개인 가중치 없는(무방향) 그래프가 주어집니다.
이 그래프를 연결하면서 간선 가중치 합이 최소가 되도록 하는 트리를 만들어야 합니다.


✅ 입력
첫째 줄: 정수 V, E  
  (1 ≤ V ≤ 100,000, 1 ≤ E ≤ 200,000)  
다음 E줄: 세 정수 A, B, C  
  (1 ≤ A, B ≤ V, 1 ≤ C ≤ 10,000)  
  무방향 그래프이므로 A↔B에 가중치 C인 간선이 연결됨

✅ 출력
	•	선택한 간선들의 가중치 합 (int)
*/

const input = ["3 3", "1 2 1 ", "2 3 2", "1 3 3"];

function solution(input) {
  const [V, E] = input[0].split(" ").map(Number);
  const edges = [];

  // 간선정보 파싱하기
  for (let i = 1; i <= E; i++) {
    const [a, b, c] = input[1].split(" ").map(Number);
    edges.push([a, b, c]);
  }

  // 가중치 기준으로 정렬
  edges.sort((a, b) => a[2] - b[2]);

  // 서로소 집합 만들기
  // 부모 배열
  const parent = Array(V + 1)
    .fill(0)
    .map((_, index) => index);

  // find func
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  // union func
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootY] = rootX;
    }
  }

  // MST
  let result = 0;

  for (const [a, b, cost] of edges) {
    if (find(a) !== find(b)) {
      union(a, b);
      result += cost;
    }
  }
  return result;
}

console.log(solution(input));
