function solution(s) {
   // 문자열을 숫자로 바꾼다
    // 최대 최소값 찾고 다시 문자열로 반환
    const numbers = s.split(" ").map(Number);
    
    const maxNum = Math.max(...numbers);
    const minNum = Math.min(...numbers);
    
    return`${minNum} ${maxNum}`
}