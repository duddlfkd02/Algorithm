function solution(id_list, report, k) {
    // 중복 신고 제거
    const uniqueReports = new Set(report);

    // 각 유저가 신고당한 횟수와 신고한 대상 저장
    const reportCount = {};
    const userReports = {};


    id_list.forEach((id) => {
        reportCount[id] = 0; 
        userReports[id] = []; 
    });


    uniqueReports.forEach((rep) => {
        const [reporter, reported] = rep.split(" ");
        reportCount[reported] += 1; 
        userReports[reporter].push(reported); 
    });

    // 정지된 유저 결정
    const banUsers = new Set(
        Object.keys(reportCount).filter((user) => reportCount[user] >= k)
    );

    // 결과 메일 수 계산
    const result = id_list.map((id) => {
        return userReports[id].filter((user) => banUsers.has(user)).length;
    });

    return result;
}
