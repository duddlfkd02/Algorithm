function solution(num_list) {
    let result = num_list.length > 10 ? 0 : 1;
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list.length <=  10){
            result *= num_list[i]
        }else{
            result += num_list[i]
        }
    }
    return result;
}