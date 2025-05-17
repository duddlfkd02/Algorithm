/* 🧠 문제 설명

길이 N의 정수 배열이 주어질 때,
오른쪽으로 갈수록 값이 커지는(Strictly Increasing) 부분수열 중
가장 길이가 긴 것의 길이를 구하세요.

✅ 입력
첫째 줄: 정수 N  
(1 ≤ N ≤ 1000)  
둘째 줄: N개의 정수 a_1, a_2, …, a_N  
(각 |a_i| ≤ 10^9)

✅ 출력
	•	최장 증가 부분수열의 길이 (int)

input:
6
10 20 10 30 20 50

output:
4

// LIS 예시: 10 → 20 → 30 → 50  (길이 4)
*/
const N = 6;
const inputLines = [10, 20, 10, 30, 20, 50];

function solution(inputLines) {
  let arr = [];

  for (let i = 0; i < N; i++) {
    if (arr.includes(inputLines[i]) === false) {
      arr.push(inputLines[i]);
    }
  }
  return arr.sort((a, b) => a - b).length;
}

console.log(solution(inputLines));

// 정답은 맞지만 이 코드는 "정렬+중복제거 -> 고유값의 개수"이고
// 풀어야하는 방식은 LIS DPfh "원본 순서는 그대로 유지, 오른쪽이 더 큰 값을 이어 붙였을 때 가능한 최대 길이" 를 구해야하는 것
// 따라서 정답을 보존하려면 DP 또는 LIS 알고리즘처럼 '원본순서' + '값 대소 관계'를 모두 고려하는 로직 필요
// -> 개선 코드는 "최장증가부분수열dp.js" 에서 수정함
