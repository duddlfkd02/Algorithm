function solution(strArr) {
    let oddStr = [];
    let evenStr = [];
    
    for(let i = 0; i < strArr.length; i++){
        if(i % 2 === 0){
            strArr[i] = strArr[i].toLowerCase()
        } else{
            strArr[i] = strArr[i].toUpperCase()
        } 
    }
    return strArr;
}