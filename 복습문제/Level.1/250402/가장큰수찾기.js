//🧠 문제 : 숫자 배열 arr이 주어졌을 때, 가장 큰 수와 그 수의 인덱스를 배열로 반환하세요.

//✅ 입출력 예시
// input: [1, 8, 3]
// output: [8, 1]

// input: [9, 10, 11, 8]
// output: [11, 2]

function solution(arr) {
  const maxNum = Math.max(arr);
  let result = [];
  let index = 0;

  for (let i = 0; i <= arr; i++) {
    if (arr[i] === maxNum) {
      index = arr[i];
    }
  }

  return (result = [maxNum, index]);
}

/*
🚨 문제점
- Math.max(arr) → ❌ 배열로 넘기면 작동하지 않음 (Math.max(...arr)로 수정)
- for (let i = 0; i <= arr; i++) → ❌ arr는 배열인데 수처럼 쓰임
- index = arr[i] → ❌ index가 아닌 값이 들어감
*/

// 🚧 수정 & 개선
function solution(arr) {
  const maxNum = Math.max(...arr);
  const index = arr.indexOf(maxNum);
  return [maxNum, index];
}
