function solution(players, callings) {
    
    const rankMap  = new Map();
    players.forEach((player, index) => {
        rankMap.set(player, index);
    })
    
    callings.forEach((name) => {
        const currIdx = rankMap.get(name);
        const prevIdx = currIdx - 1;
        
        // 배열 인덱스 바꾸기
        const prevPlayer = players[prevIdx];
        players[prevIdx] = name;
        players[currIdx] = prevPlayer;
        
        rankMap.set(name, prevIdx);
        rankMap.set(prevPlayer, currIdx);
    })
    return players
}