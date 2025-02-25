function solution(players, m, k) {
    let result = 0; 
    let activeServers = 0; 
    let expiringServers = new Array(24).fill(0); 

    for (let i = 0; i < 24; i++) {
        // 만료된 서버
        activeServers -= expiringServers[i];

        // 현재 필요한 서버 개수
        let needServers = parseInt(players[i] / m);

        // 증설 + 만료 시간
        if (needServers > activeServers) {
            let addServers = needServers - activeServers;
            result += addServers;
            activeServers += addServers;
           
            if (i + k < 24) {
                expiringServers[i + k] += addServers;
            }
        }
    }

    return result;
}
