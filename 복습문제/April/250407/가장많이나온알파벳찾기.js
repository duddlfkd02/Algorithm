/* 🧠 문제 : 영어 소문자로만 이루어진 문자열 s가 주어집니다.
가장 많이 등장한 알파벳을 리턴하세요.

  •	여러 개라면 사전 순으로 가장 빠른 알파벳을 리턴합니다.

✅ 입출력 예시
	•	s: 영어 소문자로만 이루어진 문자열 (1 ≤ 길이 ≤ 100)
  •	가장 많이 등장한 알파벳 1개 (문자)

input: "hello"
output: "l"

// 설명:
// h: 1번, e: 1번, l: 2번, o: 1번
// 가장 많이 나온 알파벳은 "l"

input: "abbbbcccc"
output: "b"

// 설명:
// b: 4번, c: 4번
// 등장 횟수는 같지만 사전 순으로 "b"가 먼저
*/

function solution(s) {
  const splitedS = s.split("");
  let map = new Map();

  for (const str of splitedS) {
    map.set({ str, count });
  }
  return Math.max(map);
}

/*
🚨 개선점
- Map은 set(key, value) 메서드를 사용해서 데이터를 저장하므로 {} 같은 객체를 만들 필요 없음
- Map은 {key => value} 쌍으로 데이터를 저장하는 자료구조이므로 바로 Math.max() 를 써버리면 NaN 반환
  > value(등장한 횟수)가 크면 maxCount와 answer를 갱신
  > value가 같으면 key를 사전순으로 비교
*/

function solution(s) {
  const splitedS = s.split("");
  let map = new Map();

  for (const str of splitedS) {
    if (map.has(str)) {
      map.set(str, map.get(str) + 1);
    } else {
      map.set(str, 1);
    }
  }

  let maxCount = 0;
  let result = "";

  for (const [key, value] of map) {
    if (value === maxCount && key < result) {
      result = key;
    } else if (value > maxCount) {
      maxCount = value;
      result = key;
    }
  }
  return result;
}
