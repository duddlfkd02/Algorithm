/* 🧠 문제 설명

문자열 s가 주어질 때,
해당 문자열에서 딱 한 번만 등장한 문자들만 추출해서
사전 순으로 정렬된 문자열을 반환하세요.



✅ 입력
	•	s: 길이 1 이상 1,000 이하의 소문자 문자열

✅ 출력
	•	한 번만 등장한 문자들을 오름차순 정렬한 문자열로 반환
*/

const s = "banana";
// 출력: abn

// b: 1
// a: 3
// n: 2

function solution(s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  console.log([...map.entries()]);
  return [...map.entries()]
    .filter(([_, count]) => count === 1)
    .sort()
    .join("");
}

console.log(solution(s));
