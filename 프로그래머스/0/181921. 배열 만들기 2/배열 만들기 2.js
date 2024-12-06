function solution(l, r) {
    const result = [];

    for (let num = l; num <= r; num++) {
        const str = num.toString();
        if ([...str].every(char => char === "0" || char === "5")) {
            result.push(num);
        }
    }

    return result.length > 0 ? result : [-1];
}
