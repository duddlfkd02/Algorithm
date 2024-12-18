function solution(myString, pat) {
    // 1. "A"와 "B"를 서로 바꾸기
    // 2. 바꾼 문자열에 pat이 포함되는지 확인
    const transformedStr = myString.replace(/A|B/g, (char) => char === "A" ? "B" : "A");
    return transformedStr.includes(pat) ? 1 : 0;
}