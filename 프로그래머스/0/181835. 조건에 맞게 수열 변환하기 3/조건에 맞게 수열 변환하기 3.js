function solution(arr, k) {
    return arr.map((str) => k % 2 !== 0 ? str * k : str + k )
    }