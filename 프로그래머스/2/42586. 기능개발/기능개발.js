function solution(progresses, speeds) {
    // 남은 작업량 : 100 - progresses[i]
    // 완료일 : 남은 작업량 / speeds[i] -> ceil처리
    // 완료일이 첫번째 작업 완료일보다 작거나 같으면 함께 배포
    
    const deployDay = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]))
    const result = [];
    let curDay = deployDay[0] // 첫번째 완료일 기준점
    let count = 0;
    
    for(const deploy of deployDay){
        if(deploy <= curDay){
            count++
        }else{
            result.push(count)
            curDay = deploy;
            count = 1
        }
    }
    result.push(count);
    return result;
}