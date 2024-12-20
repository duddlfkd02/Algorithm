function solution(strArr) {
    const lengthCount = {};

    for(let str of strArr){
        let leng = str.length;
        
        if(lengthCount[leng]){
            lengthCount[leng]++;
        }else{
            lengthCount[leng] = 1
        }
    }
    return Math.max(...Object.values(lengthCount));
}