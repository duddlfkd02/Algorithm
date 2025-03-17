function solution(diffs, times, limit) {
    let left = 1;  
    let right = 100000;
    let result = right;  
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); 
        let totalTime = 0;
        let over = false; // 제한 시간 초과 여부
        
        for (let i = 0; i < diffs.length; i++) {
            if (diffs[i] > mid) { // 숙련도가 부족한 경우
                let fail = Math.max(diffs[i] - mid, 0);
                let prevTime = i > 0 ? times[i - 1] : 0; // i = 0일 때 예외 처리
                totalTime += fail * (times[i] + prevTime) + times[i];
            } else { // 숙련도로 해결 가능한 경우
                totalTime += times[i];
            }

            if (totalTime > limit) { 
                over = true;
                break; // 제한 시간 초과 시 반복문 종료
            }
        }

        if (over) { 
            left = mid + 1;
        }else {
            result = mid; 
            right = mid - 1; // 더 작은 숙련도로 가능한지 탐색
        }
    }

    return result;
}
