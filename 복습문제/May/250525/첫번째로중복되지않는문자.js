/* 🧠 문제 설명

문자열 s가 주어질 때,
가장 처음으로 한 번만 등장하는 문자의 인덱스를 반환하세요.
만약 그런 문자가 없다면 -1을 반환합니다.

✅ 입력
문자열 s  (1 ≤ s.length ≤ 10⁵)

✅ 출력
	•	첫 번째 비반복 문자(한 번만 등장) 의 0-based 인덱스,
	•	없으면 -1

input: "leetcode"
output: 0    // 'l'이 최초 비반복 문자

input: "loveleetcode"
output: 2    // 'v'가 첫 번째

input: "aabb"
output: -1   // 비반복 문자가 없음
*/

const s = "loveleetcode";

function solution(s) {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) {
      // console.log(i);
      return i;
    }
  }
  return -1;
}

console.log(solution(s));
