/* 🧠 문제 설명

영어로 구성된 문자열 s가 주어졌을 때,
가장 많이 등장한 알파벳을 모두 찾아 알파벳 순으로 정렬하여 문자열로 반환하세요.


✅ 입력
	•	s: 영어 소문자로만 이루어진 길이 1 이상 100,000 이하의 문자열

✅ 출력
	•	가장 많이 등장한 알파벳들을 알파벳 순으로 정렬한 문자열
*/

const s = "mississippi";
// 출력: "is"

function solution(s) {
  const map = new Map();

  // 알파벳 등장 횟수 세기
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }
  // 가장 많은 횟수 고르기
  let maxCount = 0;

  for (const [_, count] of map) {
    if (count > maxCount) maxCount = count;
  }

  // maxCount와 같은 문자만 빼기
  const result = [...map.entries()]
    .filter(([_, count]) => count === maxCount)
    .map(([char]) => char)
    .sort()
    .join("");

  return result;
}

console.log(solution(s));
