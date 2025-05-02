//🧠 문제 : 문자열 my_string과 문자 letter가 주어졌을 때, my_string에서 letter를 제거한 결과를 리턴하세요.

//✅ 입출력 예시
// input: ("abcdef", "f")
// output: "abcde"

// input: ("hello world", "l")
// output: "heo word"

function solution(my_string, letter) {
  for (let str of my_string) {
    if (str.includes(my_string)) {
      return my_string.replace(letter, "");
    }
  }
}

/*
🚨 문제점
- for...of와 includes() 사용이 어색
- replace()는 한 번만 제거 → 모든 문자를 제거하려면 replaceAll() 또는 정규식 사용 필요
*/

// 🚧 수정 & 개선
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

// replaceAll이 안 된다면?
return my_string.replace(new RegExp(letter, "g"), "");
