function solution(k, dungeons) {
    let maxDungeons = 0;
    
    const dfs = (currentK, count, visited) => {
        maxDungeons = Math.max(maxDungeons, count);
        
        for(let i = 0; i < dungeons.length; i++){
            const [required, consumption] = dungeons[i];
            if(!visited[i] && currentK >= required){
                visited[i] = true;
                dfs(currentK - consumption, count + 1, visited);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0, Array(dungeons.length).fill(false))
    return maxDungeons
}