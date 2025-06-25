/* 🧠 문제 설명

어떤 대회에서는 아래의 조건을 만족하는 우수 학생들만 선발하려고 합니다.

조건
	•	점수가 70점 이상이어야 하며
	•	이름이 영어 알파벳 순으로 앞선 사람부터 선발됩니다.

선발 기준에 따라 선발된 학생들의 이름만 문자열 배열로 반환하세요.


✅ 입력
	•	students: 각 학생은 [이름, 점수] 형태로 구성된 2차원 배열입니다.

✅ 출력
	•	조건에 맞는 학생 이름만 알파벳 오름차순 정렬된 배열
*/

const students = [
  ["Alice", 82],
  ["Bob", 68],
  ["Charlie", 91],
  ["David", 75],
  ["Eve", 55],
];

// 출력: ["Alice", "Charlie", "David"]

function solution(students) {
  return students
    .filter(([name, score]) => score >= 70)
    .map(([name]) => name)
    .sort();
}

console.log(solution(students));
