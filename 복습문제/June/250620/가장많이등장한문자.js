/* 🧠 문제 설명

문자열 s가 주어졌을 때,
가장 많이 등장한 문자를 찾아
그 문자와 등장 횟수를 [문자, 개수] 형식의 배열로 반환하세요.

단, 가장 많이 등장한 문자가 여러 개라면
알파벳 순으로 가장 앞서는 문자를 반환하세요.


✅ 입력
	•	s: 길이 1 이상 1,000 이하의 소문자 문자열

✅ 출력
	•	가장 많이 등장한 문자를 [문자, 개수] 형식으로 담은 배열
*/

const s = "mississippi";
// 출력: ["i", 4]

function solution(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  let maxCount = 0;
  let maxChar = "";

  for (const [char, count] of map) {
    if (count > maxCount || (count === maxCount && char < maxChar)) {
      // 알파벳순
      maxCount = count;
      maxChar = char;
    }
  }

  return [maxChar, maxCount];
}

console.log(solution(s));
