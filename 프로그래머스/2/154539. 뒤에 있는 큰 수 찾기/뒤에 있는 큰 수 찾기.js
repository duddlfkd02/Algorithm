function solution(numbers) {
    let result = new Array(numbers.length).fill(-1);
    let stack = [];
    
    //뒤에서부터 순회
    for(let i = numbers.length -1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length - 1] <= numbers[i]){
            stack.pop();
        }
        
        if(stack.length > 0){
            result[i] = stack[stack.length - 1];
        }
        
        
        stack.push(numbers[i]);
    }
    
    return result;
}