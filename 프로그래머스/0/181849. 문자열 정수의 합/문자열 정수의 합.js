function solution(num_str) {
    let result = 0;
    const numArr = num_str.split("")
    for(let i = 0; i < numArr.length; i++){
        result += parseInt(numArr[i])
    }
    return result
}