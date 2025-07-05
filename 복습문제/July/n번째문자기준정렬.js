/* 🧠 문제 설명

문자열로 이루어진 배열 strings와 정수 n이 주어졌을 때,
각 문자열의 n번째 문자를 기준으로 정렬하되,
같은 문자의 경우 사전순으로 정렬된 배열을 반환하세요.


✅ 입력
	•	strings: 문자열 배열 (1 이상 50 이하, 각 문자열은 1 이상 100자 이하)
	•	n: 정렬 기준이 될 인덱스 (0 ≤ n < 문자열 길이)


✅ 출력
	•	정렬된 문자열 배열
*/

const strings = ["sun", "bed", "car"];
const n = 1;

// 출력: ["car", "bed", "sun"]

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }

    return a[n].localeCompare(b[n]);
  });
}

console.log(solution(strings, n));

/**
 * localeCompare()
  : 문자열을 사전 순으로 비교할 때 사용하는 메서드
 
  "a".localeCompare("b")  >> -1 ("a"가 "b"보다 앞)
  "b".localeCompare("a")  >>  1 ("b"가 "a"보다 뒤)
  "a".localeCompare("a")  >>  0 (같다)
 * 
 */
