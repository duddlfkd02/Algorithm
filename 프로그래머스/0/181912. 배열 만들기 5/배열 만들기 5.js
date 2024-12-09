function solution(intStrs, k, s, l) {
    let result = [];

    for (let i = 0; i < intStrs.length; i++) {
        const sliceStr = intStrs[i].slice(s, s + l); 
        const num = Number(sliceStr); 
        if (num > k) {
            result.push(num); 
        }
    }

    return result;
}
