function solution(dartResult) {
    const regex = /(\d+)([SDT])([*#]?)/g; // 숫자, 보너스, 옵션
    const matching = [...dartResult.matchAll(regex)];
    
    const scoreArr = [];
    
    // 점수 계산 매칭하기
    matching.forEach((match, i) => {
        const [_, num, bonus, option] = match;
        let score = parseInt(num);
        
        // bonus
        if (bonus === "S") score **= 1;
        if (bonus === "D") score **= 2;
        if (bonus === "T") score **= 3;
        
        // option
        if(option === "*"){
            score *=2;
            if(i > 0) scoreArr[i-1] *= 2
        }else if(option === "#"){
            score *= -1
        }
        
        // result
        scoreArr.push(score);
    })
    return scoreArr.reduce((acc, cur) => acc + cur, 0)
}