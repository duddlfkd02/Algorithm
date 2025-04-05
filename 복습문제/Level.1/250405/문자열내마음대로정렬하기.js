/* 🧠 문제 : 문자열로 이루어진 배열 strings가 주어집니다.
각 문자열의 n번째 글자를 기준으로 정렬하려고 합니다.

n번째 글자가 같으면 전체 문자열을 기준으로 정렬하세요.

✅ 입출력 예시
•	strings: 문자열 배열
•	n: 정렬 기준이 되는 인덱스 (0부터 시작)


input:
strings = ["sun", "bed", "car"]
n = 1

output:
["car", "bed", "sun"]

설명:
인덱스 1 기준으로 정렬
"sun"[1] = "u", "bed"[1] = "e", "car"[1] = "a"
"a" < "e" < "u" → "car", "bed", "sun" 순
*/

function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    strings.sort((a, b) => {
      if (strings[i][a] === strings[i + 1][b]) {
        return a.localeCompare(b);
      } else {
        return strings[i][n].localeCompare(b[n]);
      }
    });
  }
}

/*
🚨 문제점
- sort는 배열 전체를 한 번에 정렬하므로 for 반복문 불필요
- a, b 자체가 배열의 요소 ("sun", "bed", "car")를 나타내기에 a[n], b[n] 을 비교해야함
*/

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    } else {
      return a[n].localeCompare(b[n]);
    }
  });
}
