/* 🧠 문제 설명

문자열 s가 주어졌을 때,
같은 문자가 반복될 경우 반복된 횟수와 함께 압축된 문자열의 길이를 반환하세요.

압축 단위는 1글자부터 s.length / 2까지 모두 시도해보고,
가장 짧은 길이로 압축했을 때의 최소 길이를 반환해야 합니다.


✅ 입력
	•	s: 1 이상 1,000 이하인 문자열

✅ 출력
	•	압축했을 때의 최소 문자열 길이를 반환
*/

const s = "aabbaccc";
// → 압축 결과: "2a2ba3c" → 길이: 7

function solution(s) {
  let minLen = s.length;

  for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
    let compressed = "";
    let prev = s.slice(0, unit);
    let count = 1;

    for (let i = unit; i < s.length; i += unit) {
      const cur = s.slice(i, i + unit);

      if (cur === prev) {
        count++;
      } else {
        compressed += (count > 1 ? count : "") + prev;
        prev = cur;
        count = 1;
      }
    }

    // 마지막 문자 처리
    compressed += (count > 1 ? count : "") + prev;
    minLen = Math.min(minLen, compressed.length);
  }
  return minLen;
}

console.log(solution(s));
