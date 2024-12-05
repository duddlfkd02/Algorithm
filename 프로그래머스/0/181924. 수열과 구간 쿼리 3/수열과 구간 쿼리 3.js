function solution(arr, queries) {
    for(const [i,j] of queries){
        let term = arr[i];
        arr[i] = arr[j]
        arr[j] = term
    }
    return arr
}