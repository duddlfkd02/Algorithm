/* 🧠 문제 : 
가로(n)와 세로(m)가 주어질 때,
* 문자를 사용해서 가로 × 세로 크기의 직사각형을 출력하세요.

(단, 문제를 직접 출력하는 것이 아니라,
문자열로 만들어서 리턴하는 함수를 작성해 주세요!)


✅ 입출력
	•	n: 가로 길이 (1 ≤ n ≤ 50)
	•	m: 세로 길이 (1 ≤ m ≤ 50)

	•	가로 n개, 세로 m개로 *을 찍은 직사각형을 문자열로 반환하세요.
	•	줄 바꿈은 \n을 사용합니다.

input: (5, 3)
output: 
*****
*****
*****
*/

const n = 5;
const m = 3;

function solution(n, m) {
  let width = "*".repeat(n);
  let result = "";

  for (let i = 0; i < m; i++) {
    if ((width.length = n && height.length < m)) {
      // width 길이는 이미 n만큼 반복, 그런데 height값이 m만큼 생성되지 않았다면
      result = `${width} + "\n" + ${height}`;
    }
  }
  return result;
}
/*🚨문제점
- ${width} + "\n" + ${height} → 이건 문자열이 아니라 변수 이름 + 변수 이름처럼 된다
  문자열끼리 덧셈(+) 으로 붙이거나 템플릿 리터럴 수정필요
- height는 따로 필요 없고, result에 한 줄씩 추가하면 된다


✅ 다시 생각해보기
1. 가로 (width) 한 줄 만들기
2. 이 값을 m번 반복해서 result에 붙이기
3. 각 줄의 끝에 "\n" 필요
 */

function solution(n, m) {
  let width = "*".repeat(n);
  let result = "";

  for (let i = 0; i < m; i++) {
    result += width + "\n";
  }
  return result;
}

// 반복문 대신 Array.from 사용하기
function solution(n, m) {
  const width = "*".repeat(n);
  return Array.from({ length: m }, () => width).join("\n");
}
