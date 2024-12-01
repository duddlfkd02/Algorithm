function solution(num, total) {
    // 1. 중앙값(평균값) 구하기
    // 2. 시작값 구하기 (num 나눠서 ceil)
    // 3. 결과 배열로 정리 Array.from(arrayLike, mapFn, thisArg)
    
    const average = total / num;
    const start = Math.ceil(average - Math.floor(num / 2));
    
    return Array.from({length : num},(_,i) => start + i)
}