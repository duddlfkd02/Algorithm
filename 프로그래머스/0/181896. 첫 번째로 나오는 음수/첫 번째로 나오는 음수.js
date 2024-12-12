function solution(num_list) {
    const result = num_list.findIndex(element => element < 0)
    if(result >= 0){ 
        return result
    }else if(result < 0){
        return -1
    }
}