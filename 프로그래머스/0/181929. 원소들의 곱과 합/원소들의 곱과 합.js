function solution(num_list) {
    let multiply = 1;
    let sum = 0;
    for(let i = 0; i < num_list.length; i++){
        multiply *= num_list[i];
        sum += num_list[i];
    }
    return multiply < sum ** 2 ? 1 : 0;
}

