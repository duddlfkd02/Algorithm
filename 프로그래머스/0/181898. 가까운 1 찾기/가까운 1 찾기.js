function solution(arr, idx) {
    return arr.findIndex((value, i) => value === 1 && i >= idx);
}