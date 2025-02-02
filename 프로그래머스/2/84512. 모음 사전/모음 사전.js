function solution(word) {
    const letters = ['A', 'E', 'I', 'O', 'U'];
    let words = [];
    
    const dfs = (cur) => {
        if(cur.length > 5) return;
        words.push(cur);
        
        for(let i = 0; i < letters.length; i++){
            dfs(cur + letters[i])
        }       
    }
    
    dfs("")
    return words.indexOf(word);
}