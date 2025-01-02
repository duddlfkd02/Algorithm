function solution(N, stages) {
    const result = [];
    
    let totalPlayers = stages.length;

    for(let i = 1; i <= N; i++){
        const noClear = stages.filter((stage) => stage === i).length;
        
        // 실패
        const lose = noClear / totalPlayers;
        result.push({stage: i, lose});
        
        totalPlayers -= noClear;
    }
    
    result.sort((a, b) => {
        if(b.lose === a.lose){
            return a.stage - b.stage;
        }
        return b.lose - a.lose;
    });
    
    return result.map((data) => data.stage)
}