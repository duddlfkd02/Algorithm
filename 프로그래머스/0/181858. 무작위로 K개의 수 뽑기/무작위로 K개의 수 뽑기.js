function solution(arr, k) {
    // 1. arr 중복 숫자 제거하기
    // 2. k 와 새로 만든 arr 길이 비교하기
    // 3. 적다면 -1 추가
    
    const newArr = Array.from(new Set(arr));

    while (newArr.length < k) {
        newArr.push(-1);
    }
    
    return newArr.slice(0, k);
}