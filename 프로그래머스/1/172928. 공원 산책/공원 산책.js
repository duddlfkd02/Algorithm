function solution(park, routes) {
    // park배열에서 시작위치에 따라 초기 위치 저장
    // "x" 있는지 찾고 공원범위 벗어나지 않는지 확인이 필요
    
    // 1. 초기 위치 찾고 세팅
    let start = [0,0];
    
    for(let i = 0; i < park.length; i++){
        const col = park[i].indexOf("S");
        if(col !== -1){
            start = [i, col];
            break;
        }
    }
    // 산책 로직
    for(const route of routes){
        const [direc, steps] = route.split(" "); // "e" "2"
        const step = parseInt(steps);
        let [y , x] = start;
        let valid = true;
        
        for(let i = 1; i <= step; i++){
            let [nextY,nextX] = [y , x];
            if(direc === "E") nextX += 1;
            if(direc === "W") nextX -= 1;
            if(direc === "S") nextY += 1;
            if(direc === "N") nextY -= 1;
            
            // 가능 불가능 확인 조건
            if(nextY < 0 || nextX < 0 || nextY >= park.length || nextX >= park[0].length || park[nextY][nextX] === "X"){
                valid = false;
                break;
            }
            [y, x] = [nextY,nextX]
        }
        // 이동 가능하면 위치 업데이트
        if (valid) start = [y, x];
    }
    return start;
}