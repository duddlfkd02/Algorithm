function solution(msg) {
    const answer =[];
    const lettersMap = {}
    
    // 1. A-Z까지 
    let index = 1;
    for(let i = 0; i < 26; i++){
        lettersMap[String.fromCharCode(65 + i)] = index++;
    }
    
    let cur = "";
    let count = index; // 시작 값 : 27
    
    for(let i = 0; i < msg.length; i++){
        cur += msg[i];
        
        // 사전에 없다 -> 직전 단어 출력 + 새로운 단어 추가
        if(!lettersMap[cur]){
            answer.push(lettersMap[cur.slice(0, -1)])
            lettersMap[cur] = count++; // 새 단어 추가
            cur = msg[i]; // 새로운 단어 시작
        }
    }
    
    answer.push(lettersMap[cur]);
    return answer;
}    
