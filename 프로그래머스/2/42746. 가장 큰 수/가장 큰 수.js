function solution(numbers) {
     // 1. numbers를 문자열 배열로 변환
    const strNumbers = numbers.map(String);

    // 2. 정렬 기준: (b + a) - (a + b) 기준으로 정렬 "610" vs "106"
    strNumbers.sort((a, b) => (b + a) - (a + b));

    // 3. 앞자리가 0이면 "0" 반환
    return strNumbers[0] === "0" ? "0" : strNumbers.join("");
}