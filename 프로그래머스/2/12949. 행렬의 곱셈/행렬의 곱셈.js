function solution(arr1, arr2) {
    const result = [];
    const rows = arr1.length; // arr1의 행
    const cols = arr2[0].length; // arr2의 열
    const sharedDim = arr1[0].length; 

    for (let i = 0; i < rows; i++) {
        const rowResult = [];
        for (let j = 0; j < cols; j++) {
            let sum = 0;
            for (let k = 0; k < sharedDim; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            rowResult.push(sum);
        }
        result.push(rowResult);
    }
    return result;
}
