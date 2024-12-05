function solution(arr, queries) {
    // i가 k의 배수인지 아닌지 확인 -> 순회하면서!
    for(const [s,e,k] of queries){
        for(let i = s; i <= e; i++){
            if(i % k === 0){
                arr[i] += 1
            }
        }
        
    }
    return arr
}