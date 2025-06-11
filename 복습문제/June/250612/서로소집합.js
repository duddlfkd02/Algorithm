/* 🧠 문제 설명

1부터 N까지 번호가 매겨진 원소들이 있을 때, 다음 두 연산을 처리하세요.
	1.	합치기 연산 0 a b
| containing a {합집합} containing b|
	2.	같은 집합인지 확인 연산 1 a b
if a,b in same set → YES, else NO



✅ 입력
첫째 줄: 정수 N, M  
(1 ≤ N ≤ 100 000, 1 ≤ M ≤ 100 000)  
다음 M줄: 세 정수 op, a, b  
    op=0 → union(a,b)  
    op=1 → check(a,b), 결과 출력

✅ 출력
	•	op=1일 때마다 한 줄에 YES 또는 NO를 출력
*/

const input = [
  "7 8",
  "0 1 3",
  "1 1 7",
  "0 7 6",
  "1 7 1",
  "0 3 7",
  "1 1 7",
  "0 1 1",
  "1 1 1",
];

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = Array(N + 1)
    .fill(0)
    .map((_, i) => i);
  // arr = [0,1,2,3,4,5,6,7]

  // 중복 여부 확인
  function find(x) {
    // 기본: arr[x] === x 이면 대표 자신
    if (arr[x] === x) {
      return arr[x];
    }
    return (arr[x] = find(arr[x]));
  }

  // 합집합 함수
  function union(a, b) {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) arr[rb] = ra; // 두 대표 값이 다르면 하나를 다른 집합에 붙인다.
  }
  for (let i = 1; i <= M; i++) {
    const [op, a, b] = input[i].split(" ").map(Number);
    if (op === 0) {
      union(a, b);
    } else {
      const same = find(a) === find(b);
      console.log(same ? "YES" : " NO");
    }
  }
}

console.log(solution(input));
