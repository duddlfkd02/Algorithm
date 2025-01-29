function solution(priorities, location) {
    let queue = priorities.map((priority, index) => [priority, index]);
    let order = 0; //실행 순서
    
    while (queue.length > 0){
        const currentQueue = queue.shift(); // 제일 맨 앞 큐
        console.log(currentQueue)
        
        // 현재 큐보다 높은 큐 있는가?
        if(queue.some(([priority]) => priority > currentQueue[0])){
            queue.push(currentQueue) // 중요도 높음 다시 넣기
        }else{
            order++
            
            if(currentQueue[1] === location){
                return order
            }
        }
    }
}