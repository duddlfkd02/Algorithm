/* 🧠 문제 설명

문자열 배열 strs가 주어졌을 때,
모든 문자열에서 공통으로 시작되는 가장 긴 접두사(prefix)를 찾아 반환하세요.
	•	공통 접두사가 없다면 "" (빈 문자열)을 반환하세요.


✅ 입력
	•	strs: 문자열 배열 (길이 1 이상, 각 원소는 소문자 알파벳, 1 ~ 100자)

✅ 출력
	•	공통 접두사 문자열 (없다면 "")
*/

const strs = ["flower", "flow", "flight"];

// 출력: "fl"

function solution(strs) {
  const first = strs[0];
  const last = strs[strs.length - 1];

  let i = 0;
  while (i < first.length && first[i] === last[i]) {
    i++;
  }

  return first.slice(0, i);
}

console.log(solution(strs));
