function solution(num_list) {
    let oddNum = "";
    let evenNum = "";

    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            oddNum += num_list[i]
        }else{
            evenNum += num_list[i]
        }
    }
    return Number(oddNum) + Number(evenNum);
}