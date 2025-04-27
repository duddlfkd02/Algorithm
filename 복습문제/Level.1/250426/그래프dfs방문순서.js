/* 🧠 문제 설명

객체 형태로 표현된 그래프(graph)와 시작 노드(start)가 주어집니다.
깊이 우선 탐색(DFS)을 사용해서, 시작 노드에서부터 방문한 순서대로 노드 이름을 배열에 담아 반환하세요.
이미 방문한 노드는 다시 방문하지 않습니다.



✅ 입출력
	1.	graph: { [node: string]: string[] }
	  •	각 키가 노드 이름, 값이 그 노드와 연결된 이웃 노드들의 배열입니다.
	2.	start: DFS를 시작할 노드 이름(문자열)

  	•	DFS로 방문한 순서대로 노드 이름을 담은 배열


  const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
  };
  const start = 'A';

  // DFS 방문 순서: A → B → D → E → C → F
  output: ['A', 'B', 'D', 'E', 'C', 'F']
*/

/**
 * 접근방식
 * start부터 시작해서 인접 노드 방문
 * "A" -> "B"로 갔다면, "B" 재귀 시작
 * "B"의 이웃 "D" 확인 -> "D"는 이웃이 없으므로 다시 "B"로 돌아와 다음 이웃 "E" 확인
 * "E"도 없고 "B"도 모두 확인했으므로 "A" 확인
 *
 * visited 방문 순서 담는 배열
 * check 방문한 노드 표시용 변수
 */

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};

const start = "A";

function solution(graph, start) {
  const seen = new Set();
  const visited = [];

  const dfs = (index) => {
    if (seen.has(index)) return;

    seen.add(index);
    visited.push(index);

    for (const next of graph[index]) {
      dfs(next);
    }
  };
  dfs(start);
  return visited;
}

console.log(solution(graph, start));
