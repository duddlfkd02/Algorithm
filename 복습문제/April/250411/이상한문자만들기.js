/* 🧠 문제 : 
문자열 s가 주어집니다.
문자열의 각 단어의 짝수 번째 알파벳은 대문자,
홀수 번째 알파벳은 소문자로 바꿔서 리턴하세요.

	•	단어는 공백으로 구분합니다.
	•	첫 번째 글자는 0번째 인덱스부터 시작합니다.

✅ 입출력
	•	s: 공백이 포함된 문자열 (길이 1 이상 1,000 이하)
  •	변형된 문자열을 반환

input: "try hello world"
output: "TrY HeLlO WoRlD"

설명:
- "try" → "TrY"
- "hello" → "HeLlO"
- "world" → "WoRlD"
*/

let s = "try hello world";

function solution(s) {
  const blankStr = s.split(" ");
  let result = "";

  for (const str of blankStr) {
    let changeS = str.split("");
    for (let i = 0; i < changeS.length; i++) {
      if (i % 2 === 0) {
        changeS[i].toUpperCase();
      } else {
        changeS[i].toLowerCase();
      }
      result += changeS;
    }
  }
  return result;
}

/*
🚨 문제점
- toUpperCase()는 새로운 값을 리턴하는 함수이므로 변수에 다시 담아야 적용이 된다.
: (changeS[i] = changeS[i].toUpperCase())
- changeS는 배열이므로 join("") 필요하다.
- 단어 하나 끝날 때마다 공백이 필요하다.
*/
function solution(s) {
  const blankStr = s.split(" ");
  let result = "";

  for (const str of blankStr) {
    let changeS = str.split("");
    for (let i = 0; i < changeS.length; i++) {
      if (i % 2 === 0) {
        changeS[i] = changeS[i].toUpperCase();
      } else {
        changeS[i] = changeS[i].toLowerCase();
      }
      result += changeS.join("") + " ";
    }
  }
  return result.trim(); // 마지막 공백 제거
}
solution(s);

// 깔끔하게 정리하기
function solution(s) {
  return s
    .split(" ")
    .map(
      (
        word // 각 단어 변환
      ) =>
        word
          .split("")
          .map(
            (
              char,
              idx // 인덱스 기준으로 대소문자 변환
            ) => (idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
          )
          .join("")
    )
    .join(" ");
}
