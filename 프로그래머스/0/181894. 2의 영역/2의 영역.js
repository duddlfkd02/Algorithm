function solution(arr) {
    // 배열 2 인덱스 찾기
    // 그 인뎃스 중 가장 처음 값과 마지막 값 변수 지정
    // 변수 활용해서 slice하기
    const findFirstTwo = arr.indexOf(2)
    const findLastTwo = arr.lastIndexOf(2)

    
    return findFirstTwo === -1 ? [-1] : arr.slice(findFirstTwo, findLastTwo + 1);

}