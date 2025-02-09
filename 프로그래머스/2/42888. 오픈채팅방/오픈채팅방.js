function solution(record) {
    const result = [];
    const userInfo = {};
    
    // uid 기준으로 닉네임 저장하기
    for(const element of record){
        const [state, id, nickname] = element.split(" ");
        
        if(state === "Enter" || state === "Change"){
            userInfo[id] = nickname;
        }
    }
    
    // ~코멘트 기록
    for(const element of record){
        const [state, id] = element.split(" ");
        
        if (state === "Enter") {
            result.push(`${userInfo[id]}님이 들어왔습니다.`);
        } else if (state === "Leave") {
            result.push(`${userInfo[id]}님이 나갔습니다.`);
        }
    }
    
    return result;
}