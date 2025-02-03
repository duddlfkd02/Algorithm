function solution(n, t, m, p) {
    let result = "";
    let numStr = "";
    let number = 0;
    
    while(numStr.length < t * m){
        numStr += number.toString(n).toUpperCase();
        number++;
    }
    
    for(let i = p - 1; result.length < t; i+=m){
        result += numStr[i];
    }
    
    return result;
}