//🧠 문제 : 정수 n이 주어질 때, 1부터 n까지의 수 중에서 홀수만 오름차순으로 담긴 배열을 리턴하세요.

//✅ 입출력 예시
// input: 10
// output: [1, 3, 5, 7, 9]

// input: 5
// output: [1, 3, 5]

function solution() {
  const result = [];

  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

/*
🚨 문제점
- n이라는 입력값이 없음 (항상 10으로 고정)
*/

// 🚧 수정 & 개선
function solution(n) {
  const result = [];
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }

  return result;
}
