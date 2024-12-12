function solution(arr, intervals) {
    return intervals.reduce((acc, cur) => {
        const [start, end] = cur;
        const currentNum = arr.slice(start, end + 1)
        return acc.concat(currentNum)
    },[])
    
}

