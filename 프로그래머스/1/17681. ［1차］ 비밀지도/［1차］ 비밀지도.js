function solution(n, arr1, arr2) {
    const result = [];

    for (let i = 0; i < n; i++) {
        const combinedArr = (arr1[i] | arr2[i]).toString(2);
        const paddedArr = combinedArr.padStart(n, "0");
        const resultRow = paddedArr.replace(/1/g, "#").replace(/0/g, " ");
        result.push(resultRow);
    }

    return result;
}
