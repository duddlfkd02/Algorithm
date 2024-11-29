function solution(before, after) {
    // before, after 문자열 정렬하기
    // 두 개 같으면 1 , 아니면 0
    
    const sortedBefore = before.split('').sort().join('')
    const sortedAfter = after.split('').sort().join('')
    
    if(sortedBefore === sortedAfter){
        return 1
    }
    return 0
}