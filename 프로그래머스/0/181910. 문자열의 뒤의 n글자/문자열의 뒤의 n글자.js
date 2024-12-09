function solution(my_string, n) {
    // 문자열 총 길이 - n 
    // 뺀 길이를 원래 문자열에서 slice
    let newStr = my_string.length - n
    let result = my_string.slice(newStr)
    return String(result)
}