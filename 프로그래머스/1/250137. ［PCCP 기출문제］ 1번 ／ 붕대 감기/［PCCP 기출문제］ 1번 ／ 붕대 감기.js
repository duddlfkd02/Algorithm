function solution(bandage, health, attacks) {    
    let nowhealth = health - attacks[0][1];
    
    if (nowhealth <= 0 ){ 
        return -1; 
    }else{
        for(let i = 1 ; i < attacks.length ; i++){ 
            let minusTime = attacks[i][0]-attacks[i-1][0] -1; 
            nowhealth += minusTime * bandage[1] + parseInt(minusTime/bandage[0])*bandage[2];
            nowhealth = (nowhealth > health) ? health : nowhealth;
            nowhealth -= attacks[i][1]; 
            
            if (nowhealth <= 0 ){ 
                return -1 ; 
            }    
        }
    }
    return nowhealth; 
}