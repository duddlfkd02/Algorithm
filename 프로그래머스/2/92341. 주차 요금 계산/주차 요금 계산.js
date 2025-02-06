// 시간 -> 분 계산하기
const hourToMin = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

// 요금 계산하기
const calculateFee = (minutes, origin_time, origin_fee, plus_time, plus_fee) => {
    if(minutes <= origin_time){
        return origin_fee
    }else{
        // 기본요금 + ((총 분 - 기본 시간) / 초과 시간) * 초과 요금 -> 올림처리!!
        return origin_fee + Math.ceil((minutes - origin_time) / plus_time) * plus_fee
    }
}

function solution(fees, records) {
    const [origin_time, origin_fee, plus_time, plus_fee] = fees;
    let park_in = {}; // 입차 저장
    let park_time = {}; // 누적 주차 시간 저장
    
    // 1. 입출차 기록
    records.forEach((record)=> {
        // 시간, 차 번호, 입출차
        const [time, car_number, marking] = record.split(" ");
        
        if(marking === "IN"){
            park_in[car_number] = time;
        }
        
        if(marking === "OUT"){
            const parkedMinutes = hourToMin(time) - hourToMin(park_in[car_number]);
            delete park_in[car_number];
            park_time[car_number] = (park_time[car_number] || 0) + parkedMinutes
        }
    })
       // 2. 23:59 출차로 처리
        for(let car in park_in){
            const parkedMinutes = hourToMin("23:59") - hourToMin(park_in[car]);
            park_time[car] = (park_time[car] || 0) + parkedMinutes
        }
        
        // 3. 오름차순 번호 정렬
        const sortedCarNums = Object.keys(park_time).sort((a,b) => a - b);
    
    
        // 4. 결과 반환
        return sortedCarNums.map((car) => calculateFee(park_time[car], origin_time, origin_fee, plus_time, plus_fee))
}
