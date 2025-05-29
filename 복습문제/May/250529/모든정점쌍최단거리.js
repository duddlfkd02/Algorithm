/* 🧠 문제 설명

방향성이 있는 가중치 그래프가 주어질 때,
모든 정점 i,j 쌍에 대해
“i번 정점에서 j번 정점으로 가는 최단 거리”를 구하세요.
경로가 없으면 “INF”로 표시합니다.

✅ 입력
첫째 줄: 정점 개수 N, 간선 개수 M  
 (1 ≤ N ≤ 400, 1 ≤ M ≤ N×(N−1))  
다음 M줄: u v w  
 // u → v 로 가는 가중치 w (1 ≤ u,v ≤ N, 1 ≤ w ≤ 10,000)


✅ 출력
	•	1번부터 N번까지 한 줄씩,
	•	각 줄에 “1번→1, 1번→2, …, 1번→N” 식으로
i번 행에 “i번→1, …, i번→N” 최단 거리를 출력
	•	도달 불가능하면 INF

*/

const inputLines = ["4 5", "1 2 3", "2 3 4", "1 3 10", "3 4 2", "4 2 1"];

function solution(inputLines) {
  const [N, M] = inputLines[0].split(" ").map(Number);

  const dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

  for (let i = 1; i <= N; i++) {
    dist[i][i] = 0;
  }

  // 간선 정보로 초기값 설정
  for (let k = 1; k <= M; k++) {
    const [u, v, w] = inputLines[k].split(" ").map(Number);
    dist[u][v] = Math.min(dist[u][v], w);
  }

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  // Step 3. 결과 출력
  for (let i = 1; i <= N; i++) {
    const line = [];
    for (let j = 1; j <= N; j++) {
      line.push(dist[i][j] === Infinity ? "INF" : dist[i][j]);
    }
    console.log(line.join(" "));
  }
}

console.log(solution(inputLines));

// k:경유정점, i:출발정점, j: 도착정점
