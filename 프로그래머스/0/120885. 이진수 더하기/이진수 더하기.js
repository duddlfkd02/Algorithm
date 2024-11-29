function solution(bin1, bin2) {
   // 이진수 -> 십진수 (parseInt) 더한 후 다시 이진수로(toString)
    
    // 십진수로 바꾸기
    let decimal1 = parseInt(bin1, 2)
    let decimal2 = parseInt(bin2, 2)
    
    // 더한 후 다시 이진수로 바꾸기.
    let decimalSum = decimal1 + decimal2;
    return decimalSum.toString(2)
}