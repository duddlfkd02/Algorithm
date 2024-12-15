function solution(myString, pat) {
    let result = 0;
    const smallMyString = myString.toLowerCase()
    const smallPat = pat.toLowerCase()
    
    
    if(myString.length >= pat.length){
        if(smallMyString.includes(smallPat)){
            
            result =  1
        }
    }else{
            result = 0
        }
    return result;
}