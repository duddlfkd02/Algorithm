function solution(cap, n, deliveries, pickups) {
    let result = 0;
    let deliverRemain = 0;
    let pickupRemain = 0;
    
    for(let i = n - 1; i >= 0; i--){
        deliverRemain += deliveries[i];
        pickupRemain += pickups[i];
        
        if (deliverRemain === 0 && pickupRemain === 0) continue;
        
        let count = 0; // 왕복 횟수
        while(deliverRemain > 0 || pickupRemain > 0){
            deliverRemain -= cap;
            pickupRemain -= cap;
            count++
        }
        
        result += (i + 1) * 2 * count
        
    }
   return result;
}
