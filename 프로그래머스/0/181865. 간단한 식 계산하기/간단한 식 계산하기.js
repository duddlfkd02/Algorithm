function solution(binomial) {
    const str = binomial.split(" ");
    const num1 = parseInt(str[0]); 
    const num2 = parseInt(str[2]);
    const op = str[1];             

    let result = 0;
    
    if(op === "+"){
        result = num1 + num2
    }else if(op === "-"){
        result = num1 - num2
    }else if(op === "*"){
        result = num1 * num2
    }
    return result;
}