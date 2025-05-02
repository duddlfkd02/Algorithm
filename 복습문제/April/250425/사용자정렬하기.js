/* 🧠 문제 설명

사용자 정보가 담긴 객체 배열 users가 주어집니다.
각 객체는 name(문자열)과 age(숫자) 프로퍼티를 가집니다.
아래 기준에 따라 users를 정렬하여 반환하세요:

	1.	age 오름차순
	2.	age가 같으면 name 사전 순(알파벳 순) 오름차순




✅ 입출력
  const users = [
    { name: "bob", age: 25 },
    { name: "alice", age: 30 },
    { name: "dave", age: 25 },
    { name: "charlie", age: 25 }
  ];

  [
    { name: "bob", age: 25 },
    { name: "charlie", age: 25 },
    { name: "dave", age: 25 },
    { name: "alice", age: 30 }
  ]
*/

const users = [
  { name: "bob", age: 25 },
  { name: "alice", age: 30 },
  { name: "dave", age: 25 },
  { name: "charlie", age: 25 },
];

function solution(users) {
  return users.sort((a, b) => {
    if (a.age !== b.age) {
      return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
  });
}

console.log(solution(users));
