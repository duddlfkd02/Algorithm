/* 🧠 문제 설명

문자열 s가 주어졌을 때, 각 문자마다 자신보다 앞에 나왔던 같은 문자가 있다면
얼마나 떨어져 있는지를 배열로 반환하세요.
만약 같은 문자가 앞에 없었다면 -1을 반환하세요.


✅ 입력
function solution(s)
	•	s: 길이 1 이상 1,000 이하인 문자열 (소문자 알파벳)

✅ 출력
	•	각 위치에 대해 가장 가까운 같은 문자가 앞에 있었다면 거리, 없었다면 -1을 담은 배열을 반환
*/

const s = "banana";

function solution(s) {
  const result = [];
  // 같은 문자가 있는지 확인한다.
  // 없다면 -1을 반환한다.
  // 각 문자열에 대한 key value로 저장 한 다음에..
  // key값이 이전에 있었다면 value 값을 계산한다.(빼기로)

  let arr = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (arr.has(char)) {
      result.push(i - arr.get(char));
    } else {
      result.push(-1);
    }
    arr.set(char, i);
  }
  return result;
}

console.log(solution(s));
