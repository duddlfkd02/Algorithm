function solution(str1, str2) {
    let resultStr = ""
    for (let i = 0; i < str1.length; i++){
        resultStr += str1[i]+str2[i]
    }
    return resultStr
}