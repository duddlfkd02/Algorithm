function solution(cards1, cards2, goal) {
    let card1Idx = 0;
    let card2Idx = 0;
    
    for(let word of goal){
        if(card1Idx < cards1.length && cards1[card1Idx] === word){
            card1Idx++;
        }else if(card2Idx < cards2.length && cards2[card2Idx] === word){
            card2Idx++;
        }else{
            return "No"
        }
    }
    return "Yes"
}