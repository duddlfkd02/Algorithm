const hourToMin = (time) => {
    const [hour, min] = time.split(":").map(Number);
    return hour * 60 + min
}

function solution(book_time) {
    let room = [];
    let maxRooms = 0; // 필요한 최대 객실 개수
    
    
    const time = book_time.map((element) => [hourToMin(element[0]), hourToMin(element[1]) + 10])
    
    time.sort((a, b) => a[0] - b[0]) // 시작 시간이 빠른 순 정렬
    
    for(const [start, end] of time){
        room = room.filter(checkOutTime => checkOutTime > start) // 퇴실 안 한 사람
        room.push(end);

        maxRooms = Math.max(maxRooms, room.length);
    }
        
        return maxRooms;
}