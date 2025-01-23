function solution(elements) {
    const n = elements.length;
    const extendElements = elements.concat(elements);
    const sumElements = new Set();
    
    for(let length = 1; length <= n; length++){
        let winSum = 0;
        
        for(let i = 0; i < length; i++){
            winSum += extendElements[i];
        }
        sumElements.add(winSum);
        
        for(let start = 1; start < n; start++){
            winSum = winSum - extendElements[start - 1] + extendElements[start + length - 1];
            sumElements.add(winSum);
        }
    }
    return sumElements.size;
}