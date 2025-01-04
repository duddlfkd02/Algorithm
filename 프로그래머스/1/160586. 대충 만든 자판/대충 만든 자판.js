function solution(keymap, targets) {
    const minKeyPress = {};
    
    for(let key of keymap){
        for(let i = 0; i < key.length; i++){
            const str = key[i]; // A,B,A,C ...
            if(!minKeyPress[str] || minKeyPress[str] > i + 1){
                minKeyPress[str] = i + 1;
            }
        }
    }
    
    const result = [];
    
    for(let tar of targets){
        let totalPress = 0;
        
        for(let str of tar){
            if(!minKeyPress[str]){
                // 문자 입렵 불가능하다면?
                totalPress = -1;
                break;
            }
            totalPress += minKeyPress[str];
        }
        result.push(totalPress);
    }
    return result;
}