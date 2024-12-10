function solution(my_string, s, e) {
    const sliceStr = my_string.substring(s , e + 1)
    const reverseStr = sliceStr.split("").reverse().join("");
    return my_string.replace(sliceStr, reverseStr)
    
}
  