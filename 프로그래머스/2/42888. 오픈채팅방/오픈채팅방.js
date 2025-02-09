function solution(record) {
    const result = [];
    const userInfo = new Map();
    
    // uid 기준으로 닉네임 저장하기
   record.forEach((entry) => {
       const [state, id, nickname] = entry.split(" ");
       
       if(state !== "Leave"){
           userInfo.set(id, nickname); // 처음 들어왔거나, 닉변 값 업데이트
       }
   })
    
    // 메시지 기록
    return record.filter((entry) => entry.startsWith("Enter") || entry.startsWith("Leave"))
    .map((entry) => {
        const [state, id] = entry.split(" ");
        const nickname = userInfo.get(id);
        return state === "Enter" ? `${nickname}님이 들어왔습니다.` : `${nickname}님이 나갔습니다.`;
        
    })
}