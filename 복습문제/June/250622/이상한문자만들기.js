/* 🧠 문제 설명

문자열 s가 주어졌을 때,
각 단어의 짝수번째 인덱스 문자는 대문자,
홀수번째 인덱스 문자는 소문자로 바꿔서 반환하세요.

단어는 공백으로 구분되며, 공백이 여러 개 연속해서 등장할 수 있습니다.


✅ 입력
	•	s: 길이 1 이상 1,000 이하의 문자열 (영문자 + 공백)
	•	단어 사이 공백 수는 정해져 있지 않습니다.


✅ 출력
	•	변형된 문자열을 반환하세요.
*/

const s = "  hello     world  ";
// 출력:   HeLlO     WoRlD

function solution(s) {
  let result = "";
  let wordIdx = 0; // 단어 내 인덱스

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === " ") {
      result += " ";
      wordIdx = 0; // 공백 만나면 초기화
    } else {
      result += wordIdx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      wordIdx++;
    }
  }

  return result;
}

console.log(solution(s));

/**
function solution(s) {
  let result = "";
  let isx = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result += s[i].toUpperCase();
    } else if (i % 2 !== 0) {
      result += s[i].toLowerCase();
    }
  }

  return result;
}

 * 공백이 여러 개 있는 경우에는 잘못된 결과가 나올 수 있음
 * 공백 기준으로 풀이를 헤야함
 */
