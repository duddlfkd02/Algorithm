function solution(picture, k) {
    const result = [];
    
    for(let i = 0; i < picture.length; i++){
        const expandedRow = picture[i]
                .split("")
                .map((str) => str.repeat(k))
                .join("");
        
        for (let j = 0; j < k; j++) {
            result.push(expandedRow);
        }
    }
    
    return result;
}
