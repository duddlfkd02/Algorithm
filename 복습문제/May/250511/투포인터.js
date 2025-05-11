/* 🧠 문제 설명

양의 정수 배열에서 연속 부분합이 M이 되는 구간 개수 구하기
	•	예: [1,2,1,3,1], M=3 → [1,2], [2,1], [3], [1,2] 총 4개

✅ 출력
 4

5 3
1 2 1 3 1
*/

function solution(N, M, arr) {
  let count = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < N; right++) {
    sum += arr[right];
    console.log("sum확장 후 체크", sum);

    while (sum > M && left <= right) {
      sum -= arr[left];
      left++;
    }
    if (sum === M) {
      count++;
    }
  }

  return count;
}

console.log(solution(5, 3, [1, 2, 1, 3, 1]));
