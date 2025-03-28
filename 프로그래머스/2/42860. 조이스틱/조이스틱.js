function solution(name){
    let answer = 0;
    
    // 1. 상하 조작
    for(let i = 0; i < name.length; i++){
        answer += Math.min(name.charCodeAt(i) - 65, 91 - name.charCodeAt(i))
    }
    
    // 2. 좌우 조작 
    let move = name.length - 1
    
    for(let i = 0; i < name.length; i++){
        let next = i + 1;
        while(next < name.length && name[next] === "A"){
            next++;
        }
        
        move = Math.min(move, i * 2 + name.length - next, (name.length - next) * 2 + i)
        
    }
    
    return answer + move
}