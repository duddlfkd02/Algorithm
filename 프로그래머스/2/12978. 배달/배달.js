function solution(N, road, K) {
    const arr = Array(N + 1).fill(Infinity);
    const rooms = Array.from(Array(N + 1), ()=>[]);
    
    
    // rooms에 road 저장
    for(let num of road){
        let [a, b, c] = num; //[ 1, 2, 1 ]
        
        rooms[a].push({to:b, cost:c})
        rooms[b].push({to:a, cost:c})
        
    }
    
    let queue = [{to: 1, cost: 0}];
    arr[1] = 0;
    
    while(queue.length){
        let {to} = queue.pop();
        for(let room of rooms[to]){
            if(arr[room.to] > arr[to] + room.cost){
                arr[room.to] = arr[to] + room.cost;
                queue.push(room)
            }
        }
    }
    return arr.filter((element) => element <= K).length
}