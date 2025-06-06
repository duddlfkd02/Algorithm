/* 🧠 문제 설명

길이 N인 정수 배열이 주어집니다.
이 배열에서 하나 이상의 연속된 원소들을 골라 만들 수 있는 부분수열(subarray)의 합 중에서,
가장 큰 값을 출력하세요.

	•	배열에는 양수·음수·0이 모두 섞여 있을 수 있습니다.
	•	최소 한 개 이상의 원소를 반드시 골라야 합니다.


✅ 입력
첫째 줄: 정수 N  (1 ≤ N ≤ 100,000)  
둘째 줄: N개의 정수 A[i]  (−10,000 ≤ A[i] ≤ 10,000)

✅ 출력
	•	연속 부분수열 중 “합”이 가장 큰 값 (int)

*/

const inputLines = ["10", "-1 3 -5 2 5 -2 6 -1 4 -7"];

function solution(inputLines) {
  const N = Number(inputLines[0].trim());
  const arr = inputLines[1].trim().split(" ").map(Number);

  const d = Array(N).fill(0);
  d[0] = arr[0];
  let ans = d[0];

  for (let i = 1; i < N; i++) {
    // i번까지의 연속합을 연장할 건지, 아니면 i번부터 새로 시작할 건지
    d[i] = Math.max(d[i - 1] + arr[i], arr[i]);
    console.log("d[i - 1]", d[i - 1]);
    console.log("arr[i]", arr[i]);
    console.log("d[i - 1] + arr[i]", d[i - 1] + arr[i]);

    ans = Math.max(ans, d[i]);
  }
  return ans;
}

console.log(solution(inputLines));

/**
 * d[i-1]: i-1번 인덱스까지 끝나는 구간 중에서 가장 큰 연속합
 * arr[i]: 이전 구간을 버리고, 지금부터 i번 하나만으로 다시 시작하는 값
 * 
 * 예시
 * 배열이 [-2, 3, -5, 4] 라고 가정
	1.	i = 0 (첫 번째 원소): d[0] = arr[0] = −2
	2.	i = 1 (두 번째 원소 = 3):
	•	d[0] = −2 → “이전까지 끝나는 구간 최대합”
	•	후보1 = d[0] + arr[1] = (−2) + 3 = 1 (이전 −2 구간을 이어서 +3)
	•	후보2 = arr[1] = 3 (두 번째 원소부터 새로 시작)
	•	둘을 비교하면 Math.max(1, 3) = 3
	•	따라서 d[1] = 3 (여기서는 “i=1 하나만 고른 게 더 좋으니까” 이전 구간을 버린 셈)
 */
