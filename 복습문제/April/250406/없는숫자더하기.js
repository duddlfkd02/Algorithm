/* 🧠 문제 : 0부터 9까지의 숫자 중, 일부가 담긴 배열 numbers가 주어집니다.
배열에 없는 숫자들을 찾아서 모두 더한 값을 구하세요.

✅ 입출력 예시
•	numbers: 0 이상 9 이하의 숫자가 담긴 배열 (길이 1 이상 9 이하)
•	배열에 없는 숫자들의 합을 정수로 반환

input: [1, 2, 3, 4, 6, 7, 8, 0]
output: 14

// 없는 숫자: [5, 9]
// 5 + 9 = 14


input: [5, 8, 4, 0, 6, 7, 9]
output: 6

// 없는 숫자: [1, 2, 3]
// 1 + 2 + 3 = 6
*/

function solution(numbers) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sortedNumbers = numbers.sort();
  let stack = [];

  for (let i = 0; i < sortedNumbers.length; i++) {
    if (!nums[i].includes(sortedNumbers[i])) {
      stack.push(nums[i]);
    }
  }
  return nums.reduce((acc, cur) => acc + cur);
}

/*
🚨 문제점
- includes는 배열이나 문자열에서만 사용함. 따라서 nums[i]는 숫자여서 includes 사용 불가능
- 모든 0~9 숫자를 기준으로 numbers 배열에 있는지 검사
*/

function solution(numbers) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let missing = [];

  for (let i = 0; i < nums.length; i++) {
    if (!numbers.includes(nums[i])) {
      // numbers에 없는 숫자만
      missing.push(nums[i]);
    }
  }

  return missing.reduce((acc, cur) => acc + cur, 0); // 없는 숫자 합계
}
