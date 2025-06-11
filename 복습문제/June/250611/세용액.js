/* 🧠 문제 설명

정수 N개의 용액 특성값이 담긴 배열이 주어질 때,
서로 다른 세 용액을 골라 그 특성값의 합이 0에 가장 가까운 세 용액을 찾아
그 세 용액의 특성값을 오름차순으로 출력하세요.


✅ 입력
첫째 줄: 정수 N  (3 ≤ N ≤ 10 000)  
둘째 줄: N개의 정수 A[i]  (|A[i]| ≤ 10^9)

✅ 출력
	•	합이 0에 가장 가까운 세 용액의 특성값 세 개를 작은 값부터 출력 (공백 구분)
	•	“0에 정확히 같아지는” 조합이 여러 개면, 그중 오름차순으로 가장 뒤쪽(큰 용액)을 우선하는 조합을 출력
*/

const input = ["5", "-2 4 -99 -1 98"];

function solution(input) {
  const N = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);

  let bestSum = Infinity;
  let result = [0, 0, 0];

  for (let i = 0; i < N - 2; i++) {
    let left = i + 1; // i 다음 문자
    let right = N - 1; // 오른쪽 끝

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (
        Math.abs(sum) < Math.abs(bestSum) ||
        (Math.abs(sum) === Math.abs(bestSum) && sum > bestSum) // 거리가 같다 >> 양수 선택
      ) {
        bestSum = sum;
        result = [arr[i], arr[left], arr[right]];
      }

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        return;
      }
    }
    return result;
  }
}

console.log(solution(input));

/**
 * 투포인터
 *
 * 1. 정렬된 투포인터 : 값의 크기 비교에 의존
    → sum > target 이면 right-- 하고,
    → sum < target 이면 left++ 할 때 합이 예측 가능하기 때문에 동작


 * 2. 슬라이딩 윈도우 투포인터 : 합 or 곱이 양수이거나 비음수일때만 적용 가능
    → 배열이 양수로만 구성되어 있다는 점이 핵심
    if (sum < K) {
      // 아직 부족하니까 R을 늘려 합을 키운다
      sum += A[R++];
    } else {
      // 이미 충분하니 L을 늘려 합을 줄인다
      sum -= A[L++];
    }
 */
