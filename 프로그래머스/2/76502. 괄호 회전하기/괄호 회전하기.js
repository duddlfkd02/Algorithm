function solution(s) {
    
    const inValidCheck = (str) => {
        const stack = [];
        const patt = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }
        
        for(const char of str){
            if(char === "(" || char === "{" || char === "["){
                stack.push(char);
            }else{
                if(stack.length === 0 || stack[stack.length - 1] !== patt[char]){
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;
    };
    
    let count = 0;
    
    for(let i = 0; i < s.length; i++){
        const rotate = s.slice(i) + s.slice(0, i);
        if(inValidCheck(rotate)){
            count++
        }
    }
    return count;
    
    
}