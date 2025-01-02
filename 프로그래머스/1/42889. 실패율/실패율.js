function solution(N, stages) {
    const stageCount = Array(N + 2).fill(0); // 각 스테이지에 머물러 있는 사용자 수
    stages.forEach(stage => stageCount[stage]++); // 각 스테이지에 도달한 사용자 수 계산

    const result = [];
    let totalPlayers = stages.length; // 총 사용자 수

    for (let i = 1; i <= N; i++) {
        if (totalPlayers === 0) { // 더 이상 도달한 사용자가 없으면 실패율 0
            result.push({ stage: i, failRate: 0 });
        } else {
            const notCleared = stageCount[i]; // 클리어하지 못한 사용자 수
            const failRate = notCleared / totalPlayers; // 실패율 계산
            result.push({ stage: i, failRate });
            totalPlayers -= notCleared; // 남은 사용자 수 갱신
        }
    }

    // 실패율을 기준으로 정렬
    result.sort((a, b) => {
        if (b.failRate === a.failRate) {
            return a.stage - b.stage; // 실패율 같으면 스테이지 번호 오름차순
        }
        return b.failRate - a.failRate; // 실패율 내림차순
    });

    return result.map(item => item.stage); // 정렬된 스테이지 번호만 반환
}