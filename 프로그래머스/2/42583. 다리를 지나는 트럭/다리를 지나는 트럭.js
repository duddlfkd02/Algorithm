function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    
    let bridge = Array.from({length:bridge_length}, () => 0); 
    let bridgeWeight = 0; // 현재 다리의 무게
    
    // 아직 남아있다면 시간 증가, 남아있는 트럭 추가, 다리 무게 맨 앞 트럭 빼기
    while(bridgeWeight > 0 || truck_weights.length > 0){
        time++;
        bridgeWeight -= bridge.shift();
        
        // 다리 무게 여유가 있는지? 그럼 추가
        if(truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight ){
            let nextTruck = truck_weights.shift();
            bridge.push(nextTruck);
            bridgeWeight += nextTruck;
        }else{
            bridge.push(0); // 트럭이 못 올라가면 빈 공간 유지
        }
    }
    return time
}