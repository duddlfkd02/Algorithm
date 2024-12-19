function solution(arr, flag) {
    let result = [];
    
    for(let i = 0; i < arr.length; i++){
        if(flag[i] === true){
            for(let j = 0; j < arr[i] * 2; j++){
                result.push(arr[i])
            }
        }else {
            result.splice(-arr[i]);
        }
    }
    return result;
}