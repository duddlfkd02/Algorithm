/* 🧠 문제 설명

길이 N인 정수 배열이 주어질 때,
“합이 정확히 S가 되는 부분수열” (순서를 유지하되, 연속일 필요는 없음)의 개수를 구하세요.
단, 빈 부분수열(아무런 수를 고르지 않는 경우)은 제외하고 계산합니다.

✅ 입력
첫째 줄: 정수 N, S  
  (1 ≤ N ≤ 20, |S| ≤ 1\,000\,000)  
둘째 줄: N개의 정수 arr[i]  
  (|arr[i]| ≤ 100\,000)


✅ 출력
	•	합이 S인 부분수열의 개수 (int)

*/

const inputLines = ["5 0", "-7 -3 -2 5 8"];

function solution(inputLines) {
  const [N, S] = inputLines[0].split(" ").map(Number);
  const arr = inputLines[1].split(" ").map(Number);

  let count = 0;

  function dfs(index, sum, taken) {
    if (index === N) {
      if (taken && sum === S) {
        count++;
      }
      return;
    }

    dfs(index + 1, sum + arr[index], true);
    dfs(index + 1, sum, taken);
  }

  dfs(0, 0, false);
  return count;
}

console.log(solution(inputLines));
