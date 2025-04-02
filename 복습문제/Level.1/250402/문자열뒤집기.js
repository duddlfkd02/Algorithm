//🧠 문제 : 문자열 str이 주어졌을 때, 문자를 뒤집은 문자열을 리턴하세요.

//✅ 입출력 예시
// input: "hello"
// output: "olleh"

// input: "algorithm"
// output: "mhtirogla"

function solution(str) {
  return str.reverse();
}

/*
🚨 문제점
- str은 문자열이고, .reverse()는 배열 메서드
- 문자열 → 배열로 바꾼 후 .reverse() → 다시 문자열로 합쳐야 함
*/

// 🚧 수정 & 개선
function solution(str) {
  return str.split("").reverse().join("");
}
