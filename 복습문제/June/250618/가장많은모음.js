/* 🧠 문제 설명

문자 배열 letters가 주어집니다.
여기서 임의의 3개를 골라 문자열을 만들었을 때,
가장 많은 모음(a, e, i, o, u)을 포함할 수 있는 조합을 찾아
그 최대 모음 개수를 반환하세요.


✅ 입력
	•	letters: 문자열 배열 (3 ≤ letters.length ≤ 20)
	•	각 요소는 길이 1의 소문자 알파벳이며, 중복이 있을 수 있습니다.

✅ 출력
	•	3개의 문자를 조합해서 만들 수 있는 문자열 중,
    가장 많은 모음을 포함한 경우의 모음 개수를 정수로 반환
*/

const letters = ["a", "b", "c", "e", "o"];
// 2

function solution(letters) {
  const vowel = new Set(["a", "e", "i", "o", "u"]);
  let maxCount = 0;

  for (let i = 0; i < letters.length - 2; i++) {
    for (let j = i + 1; j < letters.length - 1; j++) {
      for (let k = j + 1; k < letters.length; k++) {
        const comb = [letters[i], letters[j], letters[k]];
        const count = comb.filter((str) => vowel.has(str)).length;
        maxCount = Math.max(maxCount, count);
      }
    }
  }

  return maxCount;
}

console.log(solution(letters));
