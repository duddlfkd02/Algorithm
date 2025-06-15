/* 🧠 문제 설명

문자열 배열 words가 주어졌을 때,
각 단어에서 모음(a, e, i, o, u) 을 제거한 후,
남은 알파벳의 길이 기준으로 오름차순 정렬된 배열을 반환하세요.

단, 같은 길이라면 원래 단어 순서 유지합니다. (Stable Sort)

✅ 입력
	•	words: 문자열 배열 (1 ≤ words.length ≤ 1,000)
	•	각 단어는 소문자 알파벳으로 이루어져 있고, 길이는 1 이상 20 이하입니다.

✅ 출력
	•	모음이 제거된 단어들 중, 남은 알파벳 수로 정렬된 문자열 배열을 반환
*/

const words = ["apple", "banana", "kiwi", "grape"];
// 출력: ["kiwi", "grape", "apple", "banana"]

function solution(words) {
  // 모음만 저장된 배열 만든다. words 단어를 순회한다
  // words의 각 단어에서 모음 배열 filter한다
  // 원래 문자 + 필터링 한 문자의 length 묶기
  // 길이 기준 오름차순 정렬

  const vowel = ["a", "e", "i", "o", "u"];

  // 자음만 남긴 문자열
  const result = words.map((word, index) => {
    const filterd = word
      .split("")
      .filter((char) => !vowel.includes(char))
      .join("");

    return {
      origin: word,
      filterd,
      length: filterd.length,
      index,
    };
  });

  result.sort((a, b) => {
    if (a.length === b.length) return a.index - b.index;
    return a.length - b.length;
  });

  return result.map((element) => element.origin);
}

console.log(solution(words));
