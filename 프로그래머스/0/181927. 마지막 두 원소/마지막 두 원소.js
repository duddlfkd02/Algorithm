function solution(num_list) {
    let lastNum = num_list[num_list.length - 1]
    let compareNum = num_list[num_list.length - 2]

    if(lastNum > compareNum){
        num_list.push(lastNum - compareNum)
    }else{
        num_list.push(lastNum * 2) 
    }
    
    return num_list
}