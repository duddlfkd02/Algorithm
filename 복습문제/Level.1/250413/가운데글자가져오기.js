/* 🧠 문제 : 
단어 s가 주어집니다.
단어의 가운데 글자를 리턴하는 함수를 작성하세요.
	•	단어의 길이가 짝수라면 가운데 두 글자를 반환합니다.
	•	단어의 길이가 홀수라면 가운데 한 글자를 반환합니다.


✅ 입출력
	•	s: 길이가 1 이상 100 이하인 문자열
	•	가운데 글자(들)로 이루어진 문자열


input: "abcde"
output: "c"

설명: 길이 5(홀수), 가운데 글자 하나: 'c'
*/

// 길이를 나눴을 때 몫 = s의 index
// "a b c d e f g "
// 7이니까 2로 나눈 몫은 -> 3
// 가운데 출력값 d

// 만약 짝수면, 몫 값 - 1, 목값 반환

let s = "abcde";

function solution(s) {
  const len = s.length;
  let result = "";

  if (len % 2 !== 0) {
    const mid = Math.floor(len / 2);
    result = s.substring(mid, mid + 1);
  } else {
    const mid = len / 2;
    result = s.substring(mid - 1, mid + 1);
  }
  return result;
}

// 간단하게 정리
function solution(s) {
  const len = s.length;
  const mid = Math.floor(len / 2);

  return len % 2 === 0
    ? s.substring(mid - 1, mid + 1)
    : s.substring(mid, mid + 1);
}

// slice 사용한 버전
function solution(s) {
  const len = s.length;
  const mid = Math.floor(len / 2);

  return len % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.slice(mid, mid + 1);
}
