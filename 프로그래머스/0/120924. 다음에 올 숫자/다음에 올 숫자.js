function solution(common) {
    // 공차, 공비 먼저 확인하기
    const diff = common[1] - common[0] // 차
    const ratio = common[1] / common[0] // 비율
    
    if(common[2] - common[1] === diff){
        return common[common.length - 1] + diff
    }
    
    if(common[2] / common[1] === ratio){
        return common[common.length - 1] * ratio
    }
}