/* 🧠 문제 설명

두 개의 문자열이 주어집니다.
	•	첫째 줄에 텍스트 T (길이 1 ≤ |T| ≤ 1\,000\,000)
	•	둘째 줄에 패턴 P (길이 1 ≤ |P| ≤ 1\,000\,000)

텍스트 T 안에 패턴 P가 몇 번 등장하는지 세고,
패턴이 시작하는 1-based 인덱스들을 모두 출력하세요.


✅ 입력
T
P

✅ 출력
occurrence_count
idx1 idx2 … idxk

	•	occurrence_count: 패턴이 등장한 횟수
	•	idx1 idx2 …: 등장 위치(1부터 시작)
	•	등장하지 않으면 0 한 줄만 출력
*/

const input = ["ABCABCABC", "ABCABC"];

// pi 배열 생성하기
const buildPi = (P) => {
  const n = P.length;
  const pi = Array(n).fill(0);
  let j = 0; // 비교할 접두사 위치

  for (let i = 0; i < n; i++) {
    while (j > 0 && P[i] !== P[j]) {
      j = pi[j - 1];
    }
    if (P[i] === P[j]) {
      pi[i] = ++j;
    }
  }
  return pi;
};

// KMP
const kmpSearch = (T, P) => {
  const pi = buildPi(P);
  const result = [];
  let j = 0; // 패턴 현재 매칭 길이

  for (let i = 0; i < T.length; i++) {
    while (j > 0 && T[i] !== P[j]) {
      j = pi[j - 1];
    }
    if (T[i] === P[j]) {
      if (j === P.length - 1) {
        // 매칭 성공: i-(|P|-1)부터 시작
        result.push(i - j + 1); // 1-based: +1
        j = pi[j];
      } else {
        j++;
      }
    }
  }
  return result;
};

function solution(input) {
  const [T, P] = input;
  const matches = kmpSearch(T, P);
  console.log(matches.length);
  if (matches.length) {
    console.log(matches.map((idx) => idx).join(" "));
  }
}

console.log(solution(input));
