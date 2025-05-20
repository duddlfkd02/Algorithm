/* 🧠 문제 설명
프림 알고리즘으로 MST 구하기

정점 V, 간선 E가 주어지는 무방향 가중치 그래프에서,
프림 알고리즘을 사용해 최소 신장 트리(MST) 의 가중치 합을 구하세요.

✅ 입력
첫째 줄: 정수 V E          // 정점 개수 V (1 ≤ V ≤ 20,000), 간선 개수 E (1 ≤ E ≤ 100,000)  
다음 E줄: 세 정수 A B W    // 무방향 간선 A–B, 가중치 W (1 ≤ A,B ≤ V, 1 ≤ W ≤ 10,000)

✅ 출력
	•	MST의 가중치 합 (int)

input:
4 5
1 2 1
1 3 5
2 3 2
2 4 4
3 4 3

output:
6

// 선택 간선: 1–2(1), 2–3(2), 3–4(3) → 합 6
*/

const inputLines = ["4 5", "1 2 1", "1 3 5", "2 3 2", "2 4 4", "3 4 3"];

function solution(inputLines) {
  const [V, E] = inputLines[0].split(" ").map(Number);
  const adh = Array.from({ length: V + 1 }, () => []);

  for (let i = 1; i <= E; i++) {
    const [u, v, w] = inputLines[i].split(" ").map(Number);
    adj[u].push([v, w]);
    adj[v].push([u, w]);
  }

  const visited = Array(V + 1).fill(false);

  // 최소 힙 구현 (가중치 기준)
  class MinHeap {
    constructor() {
      this.heap = [];
    }
    push(item) {
      this.heap.push(item);
      this._bubbleUp(this.heap.length - 1);
    }
    pop() {
      if (this.heap.length === 0) return null;
      const min = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length) {
        this.heap[0] = end;
        this._bubbleDown(0);
      }
      return min;
    }
    _bubbleUp(idx) {
      while (idx > 0) {
        const parent = (idx - 1) >> 1;
        if (this.heap[parent][0] <= this.heap[idx][0]) break;
        [this.heap[parent], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parent],
        ];
        idx = parent;
      }
    }
    _bubbleDown(idx) {
      const len = this.heap.length;
      while (true) {
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;
        let smallest = idx;
        if (left < len && this.heap[left][0] < this.heap[smallest][0])
          smallest = left;
        if (right < len && this.heap[right][0] < this.heap[smallest][0])
          smallest = right;
        if (smallest === idx) break;
        [this.heap[smallest], this.heap[idx]] = [
          this.heap[idx],
          this.heap[smallest],
        ];
        idx = smallest;
      }
    }
  }

  // 힙과 MST 누적 가중치, 선택된 정점 수 카운터
  const pq = new MinHeap();
  let mstWeight = 0;
  let count = 1; // 시작 정점(1번)을 먼저 선택했다고 가정

  //
  visited[1] = true;
  for (const [next, w] of adj[1]) {
    pq.push([w, next]);
  }

  while (count < V) {
    // (1) 가중치가 가장 작은 간선 꺼내기
    const item = pq.pop();
    if (!item) break; // 혹시 힙이 비면 종료
    const [w, node] = item; // w: 가중치, node: 도착 정점

    // (2) 이미 MST에 포함된 정점이면 건너뛰기 (사이클 방지)
    if (visited[node]) continue;

    // (3) 새 정점을 MST에 포함
    visited[node] = true;
    mstWeight += w;
    count++; // 선택된 정점 개수 증가

    // (4) 이 정점에서 뻗어나가는 간선들을 모두 힙에 넣기
    for (const [next, w2] of adj[node]) {
      if (!visited[next]) {
        pq.push([w2, next]);
      }
    }
  }

  // (g) MST 완성 후 가중치 합 출력
  console.log(mstWeight);
}

console.log(solution(inputLines));
