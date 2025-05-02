/* 🧠 문제 : 
0 또는 양의 정수가 담긴 배열 numbers가 주어졌을 때,
순서를 재배치해 만들 수 있는 가장 큰 수를 문자열 형태로 return 해주세요.


✅ 입출력
	•	numbers: 길이 1 이상 100,000 이하의 정수 배열
	•	각 원소는 0 이상 1,000 이하

	•	가장 큰 수를 문자열 형태로 반환
	•	단, 가장 앞자리가 0이면 “0”만 반환


  input: [6, 10, 2]
  output: "6210"

  input: [3, 30, 34, 5, 9]
  output: "9534330"
*/

const numbers = [6, 10, 2];

function solution(numbers) {
  const strNumbers = numbers.map(String);

  strNumbers.sort((a, b) => (b + a > a + b ? 1 : -1));

  let result = strNumbers.join("");

  return result[0] === "0" ? "0" : result;
}

console.log(solution(numbers));

/**
 * a = "6" , b = "10"
 *
 * a + b  = "610"
 * b + a = "106"
 */

/**
 * ⚒️ sort 비교함수 작동방식
 * 
  arr.sort((a, b) => {
    return 양수; // a가 b보다 뒤로 감
    return 음수; // a가 b보다 앞으로 감
    return 0;    // 순서 유지
  });

  strNumbers.sort((a, b) => (b + a > a + b ? 1 : -1)); 를 해석해보면

  if (b + a > a + b) {
      return 1;   // b가 앞에 와야 함 → a를 뒤로 보냄
    } else {
      return -1;  // a가 앞에 와야 함 → b를 뒤로 보냄
    }


    a = "3", b = "30"
    a + b = "330"
    b + a = "303"

    → b + a < a + b 이므로  
    → "3"이 "30"보다 앞에 있어야 한다  
    → return -1
 */
