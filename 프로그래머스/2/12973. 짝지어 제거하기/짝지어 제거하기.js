function solution(s){
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        let curChar = s.charAt(i); // s의 특정 문자열 하나만
        if(stack[stack.length - 1] === curChar){
            stack.pop()
        }else{
            stack.push(curChar)
        }
    }
    return stack.length === 0 ? 1 : 0;
}