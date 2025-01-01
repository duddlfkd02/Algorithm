function solution(babbling) {
    const validWords = /^(aya|ye|woo|ma)+$/;
    const invalidWords = /(ayaaya|yeye|woowoo|mama)/;
    
    let count = 0;
    
    babbling.forEach((words) => {
        if(validWords.test(words) && !invalidWords.test(words)){
            count++;
        }
    })
    return count;
}