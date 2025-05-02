/*
🧠 문제
0 또는 양의 정수가 담긴 배열 numbers가 주어졌을 때, 각 숫자를 조합해서 만들 수 있는 가장 큰 수를 문자열 형태로 리턴하세요.
*/

/*
✅ 입력
numbers: 0 이상 1,000 이하의 정수로 이루어진 배열 (길이 1 이상 100,000 이하)
✅ 출력
조합해서 만들 수 있는 가장 큰 수 (문자열)

🔍 예시
input: [6, 10, 2]
output: "6210"

input: [3, 30, 34, 5, 9]
output: "9534330"
*/

function solution(numbers) {
  const numToStr = [];
  const strArr = [];

  // 문자열로 바꾸기
  for (num of numbers) {
    numToStr = num.toString();
  }

  //문자 조합하기
  const combinations = () => {
    for (let i = 0; i <= numToStr.length; i++) {
      let queue = "";
      queue += numToStr[i];
      strArr.push(queue);
    }
    return strArr;
  };
  combinations(numToStr);

  return strArr;
}

/*
🚨 문제점
내가 생각한 접근 방식
1. 숫자를 문자로 바꾸기
2. 가능한 조합을 만든 후 Math.max로 가장 큰 수 반환

-> 모든 조합을 만들어 비교하는 방식은 비효율적임

✏️ 해결책
정렬기준 수정 : 조합했을 때 큰 수가 앞으로 오도록 설정하기
*/

// 🚧 수정 & 개선
function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join(" ");

  return result[0] === " 0" ? "0" : result;
}

/*
input: [3, 30, 34, 5, 9]

문자열 변환: ["3", "30", "34", "5", "9"]

정렬 기준 비교:
- "9"+"5" vs "5"+"9" → "95" vs "59" → "9" 우선
- "34"+"3" vs "3"+"34" → "343" vs "334" → "34" 우선

정렬 결과: ["9", "5", "34", "3", "30"]
→ "9534330"
*/
