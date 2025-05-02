/* 🧠 문제 : 
어떤 마트에서 과일 가격표와 고객의 구매내역이 주어집니다.
구매내역에 따라 총 금액을 계산하는데,
일정 조건을 만족하면 할인을 적용해서 계산해 주세요.


✅ 입출력
	1.	fruits: 객체 형태의 가격표
  { apple: 1000, banana: 1500, orange: 2000 }

  2.	orders: 배열 형태의 구매 내역
  [ { name: 'apple', count: 2 }, { name: 'banana', count: 1 } ]

	•	한 품목을 3개 이상 사면 그 품목은 10% 할인
	•	총 구매 금액을 반환하세요.
*/
const fruits = { apple: 1000, banana: 1500, orange: 2000 };
const orders = [
  { name: "apple", count: 2 },
  { name: "banana", count: 1 },
];

function solution(fruits, orders) {
  let total = 0;

  for (const order of orders) {
    const price = fruits[order.name]; // 객체 접근 apple -> 1000
    const count = order.count;

    if (count >= 3) {
      total += price * count * 0.9;
    } else {
      total += price * count;
    }
  }
  return total;
}

console.log(solution(fruits, orders));

/**
 * ✏️ 왜 fruits[order.name]이 되는가?
 * fruits는 객체니까 키 값(apple, banana...)을 통해 접근 가능
 * fruits["apple"] -> 1000
 * order.name이 "apple"이기 때문에 -> fruits[order.name]으로 가격 가져오기 가능함
 */

// 축약한 버전 (reduce + 삼항연산자)
function solution(fruits, orders) {
  return orders.reduce((sum, { name, count }) => {
    const price = fruits[name];
    return sum + price * count * (count >= 3 ? 0.9 : 1);
  }, 0);
}
