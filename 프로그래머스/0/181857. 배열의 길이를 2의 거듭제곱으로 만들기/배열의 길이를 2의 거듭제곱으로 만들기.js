function solution(arr) {
    // 현재 배열 길이
    let currentLength = arr.length;

    // 2의 거듭제곱 중 가장 가까운 배열 길이 찾기
    let targetLength = 1;
    while (targetLength < currentLength) {
        targetLength *= 2;
    }

    // 필요한 0의 개수 계산
    let zerosToAdd = targetLength - currentLength;

    // 0 추가
    return arr.concat(new Array(zerosToAdd).fill(0));
}
