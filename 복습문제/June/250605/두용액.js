/* 🧠 문제 설명

길이가 N인 정수 배열이 주어집니다.
각 용액마다 특성값(정수) A[i]가 있고,
두 용액을 섞으면 결과 특성값은 두 용액 특성값의 합이 됩니다.

배열 A에는 음수(신맛)와 양수(쓴맛)가 섞여 있고,
“섞었을 때 특성값이 0에 가장 가까운 두 용액의 조합”을 찾아
그 두 용액의 특성값을 출력하세요.
	•	어떤 두 용액이든 서로 다른 인덱스여야 하며,
	•	출력 시에는 두 용액의 특성값을 오름차순으로 정렬한 뒤 공백으로 구분해 출력합니다.

✅ 입력
첫째 줄: 정수 N  (2 ≤ N ≤ 100,000)  
둘째 줄: N개의 정수 A[i]  
 (−10^9 ≤ A[i] ≤ 10^9)


✅ 출력
	•	“합이 0에 가장 가까운” 두 용액의 특성값을 오름차순으로 출력
    (예: “-99 100” 같은 형식)

*/

const input = ["5", "-2 4 -99 -1 98"];

function solution(input) {
  const N = Number(input[0].trim());
  const arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let left = 0;
  let right = N - 1;
  let bestSum = Infinity;
  let idxL = 0;
  let idxR = 0;

  while (left < right) {
    const sum = arr[left] + arr[right];
    const curSum = Math.abs(sum);

    if (curSum < bestSum) {
      bestSum = curSum;
      idxL = left;
      idxR = right;
      if (bestSum === 0) break;
    }

    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  console.log(arr[idxL], arr[idxR]);
}

console.log(solution(input));
