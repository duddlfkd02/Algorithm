function solution(plans) {
    let result = [];
    let stack = [];
    let currentTime = 0;
    
   let convertPlans = plans.map((item) => [item[0], timeToMin(item[1]) ,Number(item[2])])
    // 정렬하기
    convertPlans.sort((a, b) => a[1] - b[1]);
    //console.log(convertPlans) 	[ [ 'aaa', 720, 20 ], [ 'bbb', 730, 30 ], [ 'ccc', 760, 10 ] ]
    
    for(let i = 0; i < convertPlans.length; i++){
        let [name, start, playtime] = convertPlans[i];
        
        // 현재 시간이 다음 과제 보다 먼저 끝남
        if(i > 0){
            let prevEndTime = convertPlans[i - 1][1] + convertPlans[i - 1][2];
            if(prevEndTime < start){
                // 미완료 과제 수행하기
                while(stack.length > 0 && prevEndTime < start){
                    let [prevName, prevPlaytime] = stack.pop();
                    if(prevEndTime + prevPlaytime <= start){
                        prevEndTime += prevPlaytime
                        result.push(prevName)
                    }else{
                        stack.push([prevName, prevPlaytime - (start - prevEndTime)]);

                        prevEndTime = start;
                    }
                }
            }
        }
            
            // 현재 과제 시작
        currentTime = start + playtime;
        result.push(name);

        // 다음 과제가 있는 경우, 현재 과제 멈추고 스택에 저장
        if (i < convertPlans.length - 1) {
            let nextStart = convertPlans[i + 1][1];
            if (currentTime > nextStart) {
                stack.push([name, currentTime - nextStart]);
                result.pop(); 
            }
        }
    }

    //남은 과제 스택에서 수행
    while (stack.length > 0) {
        result.push(stack.pop()[0]);
    }

    return result;
    }
    
    

// 1. 시간 -> 분 변경 함수
    const timeToMin = (time) => {
        const [h, m] = time.split(":").map(Number)
        return h * 60 + m;
    }