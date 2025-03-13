function solution(picks, minerals) {
    let result = 0;
    
    let totalPicks = picks[0] + picks[1] + picks[2];
    let mineralGroup = [];
    
    // 5개씩 묶기
    for(let i = 0; i < minerals.length; i+= 5){
        if(totalPicks === 0) break;
        mineralGroup.push(minerals.slice(i, i + 5))
        totalPicks--;
    }
    
    // 그룹 별 피로도 계산
    mineralGroup = mineralGroup.map((group) => {
        let diaHp = 0, ironHp = 0, stoneHp = 0;
        
        for(let mineral of group){
            if(mineral === "diamond"){
                diaHp += 1;
                ironHp += 5;
                stoneHp += 25;
            } else if (mineral === "iron"){
                diaHp += 1;
                ironHp += 1;
                stoneHp += 5;
            } else {
                diaHp += 1;
                ironHp += 1;
                stoneHp += 1;
            } 
        }
        return {diaHp, ironHp, stoneHp, minerals : group}
    });
    
    // 피로도 순 정렬하기
    mineralGroup.sort((a, b ) => b.stoneHp - a.stoneHp)
    
    
    for (let group of mineralGroup) {
        if (picks[0] > 0) { // 다이아 곡괭이 사용
            result += group.diaHp;
            picks[0]--;
        } else if (picks[1] > 0) { // 철 곡괭이 사용
            result += group.ironHp;
            picks[1]--;
        } else if (picks[2] > 0) { // 돌 곡괭이 사용
            result += group.stoneHp;
            picks[2]--;
        } else {
            break;
        }
    }
    
    return result;
}
/*
광물 5개씩 묶기
해당 그룹별로 광물 피로도 계산하기
피로도 높은 그룹 우선적으로 좋은 곡갱이 캐도록 정렬
곡갱이 모두 사용 && 모든 광물 다 캠 => 종료
*/