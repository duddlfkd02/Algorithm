/* 🧠 문제 설명

여러 개의 회의(시작 시간, 종료 시간)가 주어질 때,
한 개의 회의실을 사용해 겹치지 않게 배정할 수 있는 회의의 최대 개수를 구하세요.

✅ 입력
첫째 줄: 정수 N                // 회의 개수 (1 ≤ N ≤ 100,000)  
다음 N줄: 두 정수 S, E        // 회의 시작 시간 S, 종료 시간 E (0 ≤ S < E ≤ 10^9)

✅ 출력
	•	배정할 수 있는 회의의 최대 개수 (int)



input:
5
1 2
2 4
3 5
0 6
5 7

output:
4
// 가능한 최대 배정: [1,2], [2,4], [4,5], [5,7] (또는 비슷한 4개)
*/

const inputLines = ["5", "1 2", "2 4", "3 5", "0 6", "5 7"];

function solution(inputLines) {
  const N = Number(inputLines[0]);
  const meetings = [];
  for (let i = 1; i <= N; i++) {
    const [s, e] = inputLines[i].split(" ").map(Number);
    meetings.push([s, e]);
  }
  // 종료 시간 기준으로 정렬
  // meetings.sort((a, b) => a.e - b.e);
  meetings.sort((a, b) => a[1] - b[1]);

  let count = 0; // 배정 완료 개수
  let lastTime = 0;

  for (const [s, e] of meetings) {
    if (s >= lastTime) {
      count++;
      lastTime = e;
    }
  }
  return count;
}

console.log(solution(inputLines));

/**
 * 종료시간 기준 정렬 시 meetings.sort((a, b) => a.e - b.e); 를 사용하면 안 되는 이유
 * meetings 를 [시작, 종료] 형태의 배열이기 때문에 종료 시간을 꺼내려면 index로 꺼내야함
 * -> meetings.sort((a, b) => a[1] - b[1]);
 *
 * 만약 s.e 형태를 유지하고 싶다면
 * meetings.push({ s, e }); 형태로 파싱한 후
 * meetings.sort((a, b) => a.e - b.e); 로 작성한다.
 */
