function solution(cards) {
    const visited = Array(cards.length).fill(false);
    const groupSize = [];
    
    for(let i = 0; i < cards.length; i++){
        if(visited[i]) continue;
        
        let count = 0;
        let current = i;
        
        while(!visited[current]){
            visited[current] = true;
            current = cards[current] - 1;
            count++;
        }
        
        groupSize.push(count);
    }
    
    groupSize.sort((a, b) => b - a);
    return groupSize.length >= 2 ? groupSize[0] * groupSize[1] : 0;
}
