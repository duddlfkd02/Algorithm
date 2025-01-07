function solution(survey, choices) {
    const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    
    survey.forEach((type, i) => {
        const [disagree, agree] = type;
        const choice = choices[i];
        
        if(choice < 4){
            score[disagree] += 4 - choice;
        }else if (choice > 4) {
            score[agree] += choice - 4; 
        }
    })
    // 최종 성격 유형
    let result = "";
    result += score.R >= score.T ? "R" : "T";
    result += score.C >= score.F ? "C" : "F";
    result += score.J >= score.M ? "J" : "M";
    result += score.A >= score.N ? "A" : "N";
    
    return result;
}