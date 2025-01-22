function solution(n, words) {
    const usedWords = new Set();
    usedWords.add(words[0]);
    
    for(let i = 1; i < words.length; i++){
        const curWord = words[i]; // 현재 비교할 단어
        const prevWord = words[i - 1]; // 바로 이전 단어
        if(usedWords.has(curWord) || i > 0 && prevWord[prevWord.length - 1] !== curWord[0]){
            const person = (i % n) + 1; // 탈락한 사람
            const round = Math.floor(i / n) + 1 // 탈락자 차례 번호
            return [person, round];
        }
        usedWords.add(curWord);
    }
    return [0,0]
}