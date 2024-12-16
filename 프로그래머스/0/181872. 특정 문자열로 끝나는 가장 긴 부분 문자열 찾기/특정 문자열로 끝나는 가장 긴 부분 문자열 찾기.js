function solution(myString, pat) {
    let lastIndex = myString.lastIndexOf(pat);
    if(lastIndex === -1) return "";
    
    return myString.slice(0, lastIndex + pat.length)

}