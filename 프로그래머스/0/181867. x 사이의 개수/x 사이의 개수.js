function solution(myString) {
    const splitStr = myString.split("x");
    let result = []
    
    for(let i = 0; i < splitStr.length; i++){
        result.push(splitStr[i].length) 
    }
    return result
}