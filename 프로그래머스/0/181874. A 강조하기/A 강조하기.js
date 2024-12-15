function solution(myString) {
    return myString
        .replace(/a/g, "A") 
        .replace(/[A-Z]/g, match => match === "A" ? "A" : match.toLowerCase())
}