// 올바른 문자열 판단 함수
const isValid = (str) => {
    let balance = 0;
    for(let char of str){
        balance += (char === "(" ? 1 : -1)
        if(balance  < 0) return false;
    }
    return balance === 0;
}

// 방향 뒤집는 함수
const reverse = (str) => {
    return str.slice(1, -1).split("").map(char => char === "(" ? ")" : "(").join("")
}


function solution(p) {
    if(p === "") return "";
    
    let balance = 0;
    let index = 0;
    for(let i = 0; i < p.length; i++){
        balance += (p[i] === "(" ? 1 : -1);
        if(balance === 0){
            index = i + 1;
            break;
        }
    }
    let u = p.slice(0, index);
    let v = p.slice(index);
    
    if(isValid(u)){
        return u + solution(v);
    } else {
        let newStr = "("
        newStr += solution(v);
        newStr += ")"
        newStr += reverse(u);
        return newStr
    }
    
}
/*
1. 입력이 빈 문자열이면 빈 문자열 반환
2. u, v 로 나누고 u가 올바른 문자열인지 검사하기
2-1. 틀리면 : (추가 -> 재귀 수행 -> )추가 -> u의 처음, 마지막 문자 제거하고 괄호방향 뒤집기
*/
