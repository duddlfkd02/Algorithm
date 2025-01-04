function solution(s, skip, index) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    let result = "";
    
    const filterAlphabet = alphabet.filter((str) => !skip.includes(str));
    
    for(let idx of s){
        const curIndex = filterAlphabet.indexOf(idx);

        const newIndex = (curIndex + index) % filterAlphabet.length;

        result += filterAlphabet[newIndex];
    }
    return result
}