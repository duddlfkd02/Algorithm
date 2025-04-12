/* 🧠 문제 : 
영어로 된 문자열 s가 주어집니다.
문자열에 있는 모든 소문자는 대문자로,
모든 대문자는 소문자로 변환해서 출력하세요.
	•	공백은 그대로 두세요.

✅ 입출력
	•	s: 영어 대소문자와 공백으로만 이루어진 문자열 (길이 1 이상 1000 이하)
	•	대소문자가 반전된 문자열을 반환


input: "Hello World"
output: "hELLO wORLD"
*/

// 반복문 사용 -> index가 소문자니? -> 대문자로 변환

let s = "Hello World";

function solution(s) {
  const splitedStr = s.split("");
  for (let i = 0; i < splitedStr.length; i++) {
    if (splitedStr[i] === splitedStr[i].toUpperCase()) {
      splitedStr[i] = splitedStr[i].toLowerCase();
    } else {
      splitedStr[i] = splitedStr[i].toUpperCase();
    }
  }
  return splitedStr.join("");
}
solution(s);

// map 사용해보기
function solution(s) {
  return s
    .split("")
    .map((str) => {
      str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
    })
    .join("");
}
