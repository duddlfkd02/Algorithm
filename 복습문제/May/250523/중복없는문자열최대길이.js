/* 🧠 문제 설명

문자열 s가 주어질 때,
“중복 없이(같은 문자가 두 번 이상 나오지 않으면서) 연속으로 이어지는” 부분 문자열 중
가장 긴 것의 길이를 구하세요.

✅ 입력
문자열 s  (1 ≤ s.length ≤ 10⁵)

✅ 출력
	•	중복 없는 연속 부분 문자열의 최대 길이 (int)


input: "abcabcbb"
output: 3   // "abc" 길이 3

input: "bbbbb"
output: 1   // "b" 길이 1

input: "pwwkew"
output: 3   // "wke" 길이 3
*/

const s = ["abcabcbb"];

function solution(s) {
  let left = 0;
  result = 0;
  const seen = new Map(); // 마지막에 나온 인덱스

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1;
    }

    seen.set(char, right);

    result = Math.max(result, right - left + 1);
  }
  console.log(result);
}

console.log(solution(s));

/**
 * 1. right 포인터를 0부터 끝까지 한 칸씩 옮김
 * 2. char = s[right]가 이전에 등장했고 + 그 인덱스(seen.get(char))가 현재 구간의 시작 left 이상이면,
 * 3. left를 seen.get(char) + 1
 * 4. seen.set(char, right)로 “가장 최근 위치” 갱신
 * 5. result = max(ans, right - left + 1)로 최대 길이 업데이트
 */
