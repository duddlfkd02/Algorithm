function solution(myString, pat) {
    let result = 0;
    let index = 0;

    while (index <= myString.length - pat.length) {
        if (myString.slice(index, index + pat.length) === pat) {
            result++;
        }
        index++; 
    }
    return result;
}
