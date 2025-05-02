/* 🧠 문제 설명

문자열 s가 주어질 때, 연속해서 같은 문자가 반복되는 경우를 하나의 그룹으로 보고,
그 그룹의 반복된 개수와 문자를 조합하여 새로운 문자열을 만들어 반환하세요.

•	예를 들어 "aaabbccccd"라면
	•	"a"가 3번 연속 → "3a"
	•	"b"가 2번 연속 → "2b"
	•	"c"가 4번 연속 → "4c"
	•	"d"가 1번 연속 → "1d"
→ 최종 결과는 "3a2b4c1d"가 됩니다.


✅ 입출력
	•	문자열 s: 길이 1 이상 1,000 이하, 알파벳 소문자만 포함

  •	압축된 문자열 (반복 개수 + 문자 조합)

  input: "aaabbccccd"
  output: "3a2b4c1d"  
*/

const s = "aaabbccccd";

function solution(s) {
  let prev = s[0];
  let count = 1;
  let result = "";

  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    if (char === prev) {
      count++;
    } else {
      result += `${count}${prev}`;
      prev = char;
      count = 1;
    }
  }
  result += `${count}${prev}`;
  return result;
}

console.log(solution(s));
