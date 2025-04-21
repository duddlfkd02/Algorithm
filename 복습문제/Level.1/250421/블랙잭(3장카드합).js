/* 🧠 문제 설명

N장의 카드에 적힌 숫자가 주어집니다.
카드 3장을 골라 그 합이 M을 넘지 않도록 하면서, M에 가장 가깝게 만드는 합을 구하세요.


✅ 입출력
	•	첫 줄에 N(3 ≤ N ≤ 100)와 M(10 ≤ M ≤ 300,000)이 주어집니다.
	•	둘째 줄에 N장의 카드에 적힌 정수(1 이상 100,000 이하)가 공백으로 구분되어 주어집니다.

  •	카드 3장의 합이 M을 넘지 않으면서, 그 합 중에서 가장 큰 값을 출력하세요.

  input:
  5 21
  5 6 7 8 9

  output:
  21

  -> 가능한 3장 조합의 합 중 21을 넘지 않는 최대값은 21 (5+7+9 등)
*/

/**
 * 접근 방식
 * for 반복문으로 3장 카드 뽑기
 * 카드 뽑아서 모두 더한 값 < M
 * M보다 작으면 stack 배열에 저장 후, 맨 마지막에 가장 큰 값 return
 */

const cards = [5, 6, 7, 8, 9];
const M = 21;

function solution(cards, M) {
  const N = cards.length;
  let best = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum <= M && sum > best) best = sum;
      }
    }
  }

  return best;
}

console.log(solution(cards, M));

// 투포인터 사용하기
function solution(cards, M) {
  cards.sort((a, b) => a - b);
  const N = cards.length;
  let best = 0;

  for (let i = 0; i < N - 2; i++) {
    let left = i + 1,
      right = N - 1;
    while (left < right) {
      const sum = cards[i] + cards[left] + cards[right];
      if (sum > M) {
        right--;
      } else {
        if (sum > best) best = sum;
        left++;
      }
      if (b === M) return M;
    }
  }
  return best;
}
