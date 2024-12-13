function solution(num_list, n) {
    const idxNum = num_list.slice(0, n)
    const lengthNum = num_list.slice(n, num_list.length)
    return [...lengthNum, ...idxNum]

}