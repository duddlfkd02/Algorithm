function solution(number, k) {
    const stack = [];
    let removeCount = 0;
    
    for(let num of number){
        while(stack.length > 0 && stack[stack.length - 1] < num && removeCount < k){
            stack.pop();
            removeCount++
        }
        stack.push(num)
    }

   return stack.slice(0, number.length - k).join("");
}
