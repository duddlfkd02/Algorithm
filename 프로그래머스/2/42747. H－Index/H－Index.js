function solution(citations) {
    // 내림차순 정렬 -> citations[i] 를 기준으로 citations를 순회할 때
    // 논문 개수, 현재 인용 횟수 조건문 확인
    const sortedCitations = citations.sort((a, b) => b - a);
    for(let i = 0; i < sortedCitations.length; i++){
        if(sortedCitations[i] <= i){
            return i
        }
    }
    return sortedCitations.length;
}