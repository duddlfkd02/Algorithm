/* 🧠 문제 설명

	•	길이 N인 정수 배열과 목표 합 M이 주어집니다.
	•	서로 다른 인덱스 i<j 쌍 중,
\text{arr}[i] + \text{arr}[j] = M
이 되는 쌍이 총 몇 개인지 세어 출력하세요.

✅ 입력
첫째 줄: 정수 N, M  
(1 ≤ N ≤ 100\,000, 1 ≤ M ≤ 2\,000\,000\,000)  
둘째 줄: N개의 정수 arr[i]  
(각 \(|\text{arr}[i]|\) ≤ 10^9)

✅ 출력
	•	합이 M인 서로 다른 쌍의 개수 (int)

input:
5 7
1 5 3 4 2

output:
2

// 가능한 쌍: (1,6)? 아니고, (5+2), (3+4) 두 가지
*/

const inputLines = ["5 7", "1 5 3 4 2"];

function solution(inputLines) {
  const [N, M] = inputLines[0].split(" ").map(Number);
  const arr = inputLines[1].split(" ").map(Number);

  arr.sort((a, b) => a - b);

  // 투포인터 선언
  let left = 0;
  let right = N - 1;
  let count = 0;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === M) {
      count++;
      left++;
      right--;
    } else if (sum < M) {
      left++;
    } else {
      right--;
    }
  }
  console.log(count);
}

console.log(solution(inputLines));
