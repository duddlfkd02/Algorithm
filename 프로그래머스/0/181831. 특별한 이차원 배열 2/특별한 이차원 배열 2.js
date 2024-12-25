function solution(arr) {
    const n = arr.length;
    //arr[i][j] = arr[j][i] 맞는지 비교
    
    for(let i = 0; i < n; i++ ){
        for(let j = 0; j < n; j++){
            if(arr[i][j] !== arr[j][i]){
                return 0;
            }
        }
    }
    return 1;
}
