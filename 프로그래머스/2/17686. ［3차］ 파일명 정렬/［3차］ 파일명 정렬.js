function solution(files) {
    return files.sort((a, b) => {
        
        const firstHead = a.match(/\D+/)[0].toLowerCase();
        const secondHead = b.match(/\D+/)[0].toLowerCase();
        
        if (firstHead < secondHead) return -1;
        if (firstHead > secondHead) return 1;
        
        //head가 같으면 number 비교 앞에 0 지우기
        const numA = parseInt(a.match(/\d+/)[0], 10)
        const numB = parseInt(b.match(/\d+/)[0], 10)
        
        return numA - numB;
    })
        
}