/* 🧠 문제 설명

여러 개의 회의(시작 시간, 종료 시간)가 주어질 때,
한 개의 회의실을 가장 효율적으로 배정하여 최대 몇 개의 회의를 잡을 수 있는지 구하세요.

✅ 입력
첫째 줄: 정수 N           // 회의 개수 (1 ≤ N ≤ 100,000)  
다음 N줄: 두 정수 S, E    // 회의 시작 시간 S, 종료 시간 E (0 ≤ S < E ≤ 10^9)

✅ 출력
	•	배정할 수 있는 회의의 최대 개수 (int)

input:
3
1 4
2 3
3 5

output:
2

// 가능한 최대 회의 배정: [2,3], [3,5] 또는 [1,4], [4,?...] 중 2개
*/

const inputLines = ["3", "1 4", "2 3", "3 5"];

function solution(inputLines) {
  const N = Number(inputLines[0]);
  const meetings = [];

  for (let i = 1; i <= N; i++) {
    const [s, e] = inputLines[i].split(" ").map(Number);
    meetings.push([s, e]);
  }
  // 종료시간 기준 정렬
  meetings.sort((a, b) => {
    return a[1] - b[1];
  });
  console.log(meetings);

  //회의 배정 루프 (그리디)
  let count = 0; // 선택한 회의 수
  let lastEnd = 0; // 마지막으로 배정된 회의의 종료 시각

  for (const [s, e] of meetings) {
    if (s >= lastEnd) {
      count++;
      lastEnd = e;
    }
  }
  return count;
}

console.log(solution(inputLines));

/**
🚨 내가 작성했던 그리디 로직
for (let i = 0; i < meetings.length; i++) {
  for (let j = i + 1; j < meetings.length; j++) {
    let prevEndTime = meetings[i][1];
    let curStartTime = meetings[j][0];

    if (prevEndTime <= curStartTime) {
      count++;
    }
  }
}
return count;


⚠️ 문제점
	1.	독립적인 쌍만 센다
	•	ex) i=0, j=2가 겹치지 않으면 또 하나 +1
	•	하지만 실제로는 “하나의 회의실”에 순차적으로 배정할 수 있는 가장 많은 회의 개수를 세야 함
	2.	연쇄 선택을 보장하지 않는다
	•	i=0 → j=1는 불가, i=0 → j=2는 가능 → count=1
	•	그런데 i=1 → j=2도 가능하다면 또 +1 → count=2
	•	실제로 (1,4) 회의는 배정되지 않았지만, i=1–j=2 쌍만 보고 +1을 하게 됨
	3.	중복·과대 계산
 */
