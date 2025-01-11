function solution(id_list, report, k) {
    const reports = {}; // 유저별 신고당한 횟수
    const userReports = {}; // 유저별 신고한 유저 목록

    id_list.forEach((id) => {
        reports[id] = 0; 
        userReports[id] = [];
    });
    
    report.forEach((entry) => {
        const [reporter, reported] = entry.split(" ");
        if (!userReports[reporter].includes(reported)) { 
            userReports[reporter].push(reported);
            reports[reported] += 1;
        }
    });
   
    const bannedUsers = Object.keys(reports).filter((user) => reports[user] >= k);

    return id_list.map((id) => {
        return userReports[id].filter((user) => bannedUsers.includes(user)).length;
    });
}