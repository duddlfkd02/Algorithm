/*
🧠 문제
기능이 여러 개 담긴 작업 리스트가 있고, 각 작업은 하루에 일정한 진도로 개발됩니다.
작업은 앞에서부터 순서대로 배포되며, 앞의 작업이 끝나야 뒤의 작업도 함께 배포될 수 있어요.

배포는 하루에 한 번, 여러 개의 작업이 함께 배포될 수도 있음을 고려해
각 배포마다 몇 개의 기능이 배포되는지 배열로 반환하세요.

*/

/*
✅ 입력
progresses: 작업들의 진척도 (배열, 정수 0~100)
speeds: 작업별 개발 속도 (배열, 정수)

🔍 예시
input:
progresses = [93, 30, 55]
speeds = [1, 30, 5]

output:
[2, 1]

- Day 1~6: [93+1*6, 30+30*6, 55+5*6] = [99, 210, 85] → 첫 배포에 2개
- Day 7: 85+5*1 = 90 → 1개 더 배포
*/

function solution(progresses, speeds) {
  let queue = [];
  let count = 0;
  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] + speeds[i] < 100) {
        queue.push(progresses[i] + speeds[i]);
      } else if (progresses[i] + speeds[i] >= 100) {
        count++;
      }
    }
  }
  return count;
}

/*
🚨 문제점
진행률을 날짜로 바꿔서 비교해야 하는 문제이다.
- 매일 진행률을 계산하는 방식보다는, 작업이 완료되는데 걸리는 '날의 수'를 먼저 구한다.
- 각 숫자를 순서대로 비교하는 방식이 효율적이다.
*/

// 🚧 수정 & 개선
function solution(progresses, speeds) {
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const result = [];

  let current = days[0];
  let count = 1; // 첫 작업 포함

  for (let i = 1; i < days.length; i++) {
    if (days[i] === current) {
      count++; // 배포
    } else {
      result.push(count);
      current = days[i];
      count = 1;
    }
  }
  result.push(count);
  return result;
}
