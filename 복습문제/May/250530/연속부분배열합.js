/* 🧠 문제 설명

길이 N인 정수 배열과 목표 합 K가 주어질 때,
합이 정확히 K가 되는 연속 부분배열의 개수를 구하세요.
	•	부분배열은 원본 배열에서 순서를 유지하며 연속으로 뽑은 구간입니다.

✅ 입력
첫째 줄: 정수 N, K  
(1 ≤ N ≤ 200,000, |K| ≤ 10^9)  
둘째 줄: N개의 정수 arr[i]  
(|arr[i]| ≤ 10^9)


✅ 출력
	•	합이 K인 연속 부분배열의 개수 (int)

*/

const inputLines = ["5 5", "1 2 3 2 -1"];

function solution(inputLines) {
  const [N, K] = inputLines[0].split(" ").map(Number);
  const arr = inputLines[1].split(" ").map(Number);

  let count = 0; // 조건을 만족하는 부분배열의 개수
  let sum = 0; // 0개 원소 기준으로 시작하는 누적합
  const freq = new Map(); // 이전에 등장한 sum 값 -> 등장 횟수
  freq.set(0, 1); // 처음부터 K가 나와서 sum이 0인 경우

  for (let i = 0; i < N; i++) {
    sum += arr[i];

    if (freq.has(sum - K)) {
      count += freq.get(sum - K);
    }

    freq.set(sum, freq.get(sum) || 0 + 1);
  }

  return count;
}

console.log(solution(inputLines));

/**
 * 누적합 정의 : sum(i) = arr[0] + arr[1] + … + arr[i]
 * 합이 K인 구간 찾기: 지금 위치 i의 누적합 sum(i)에서 K를 뺀 값이 이전에 한번이라도 등장한 누적합이라면? -> 그 등장 위치 바로 다음! index 부터 i까지의 합이 K라는 뜻
 * 등장 횟수만큼 count를 올려서 return
 */
