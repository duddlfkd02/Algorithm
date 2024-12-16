function solution(my_string, alp) {
    let result = "";
    for (let char of my_string) {
        result += char === alp ? char.toUpperCase() : char;
    }
    return result;
}
