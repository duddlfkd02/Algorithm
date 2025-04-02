/* 🧠 문제 : 문자열 my_string, overwrite_string, s가 주어집니다.
my_string의 인덱스 s부터 overwrite_string의 내용을 덮어쓰고, 결과 문자열을 리턴하세요.

✅ 입출력 예시
input: ("He11oWor1d", "lloWorl", 2)
output: "HelloWorld"
*/

function solution(my_string, overwrite_string, s) {
  let newStr = "";
  newStr = my_string.slice(s);
  return newStr + overwrite_string;
}

/*
🚨 문제점
- my_string의 s번째 인덱스부터 overwrite_string을 덮어쓴 결과를 반환
- overwrite의 길이만큼 my_string의 뒷부분도 유지해야 함
*/

function solution(my_string, overwrite_string, s) {
  const front = my_string.slice(0, s);
  const last = my_string.slice(s + overwrite_string.length);
  return front + overwrite_string + last;
}
