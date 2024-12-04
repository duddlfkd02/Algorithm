function solution(a, b, c) {
    const sum = a + b + c;
    const squareNum = a ** 2 + b ** 2 + c ** 2
    const cubeNum = a ** 3 + b ** 3 + c ** 3
    if (a === b && b === c) {
        //  모두 같은 경우
        return sum * squareNum * cubeNum;
    } else if (a === b || b === c || a === c) {
        // 두 숫자가 같고 나머지가 다른 경우
        return sum * squareNum;
    } else {
        // 모두 다른 경우
        return sum;
    }
}