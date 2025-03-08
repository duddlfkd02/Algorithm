function solution(places) {
    const result = []
    
    const direction = [
        [-1,0], [1, 0], [0, -1], [0,1]
    ]
    
    
    const isValid = (place) => {
        let board = place.map((row) => row.split(""));
        let people = [];
        
        // P 위치 찾기
        for(let i = 0 ; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(board[i][j] === "P"){
                    people.push([i,j]);
                }
            }
        }
        
        // 모든 응시자 위치 및 거리 체크
        for(let [x, y] of people){
            let queue = [[x,y,0]];
            let visited = Array.from({length: 5}, ()=> Array(5).fill(false));
            visited[x][y] = true;
            
            
            while(queue.length > 0){
                let [currentX , currentY, dist] = queue.shift();
                
                if(dist >= 2) continue;
                
                for(let [dx, dy] of direction){
                    let nx = currentX + dx;
                    let ny = currentY + dy;
                    
                    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && !visited[nx][ny]){
                        if(board[nx][ny] === "X") continue;
                        if(board[nx][ny] === "P") return 0;
                        queue.push([nx , ny, dist + 1])
                        visited[nx][ny] = true;
                    }
                }
            }  
            
        }
        return 1;
    }
    
    for(let place of places){
        result.push(isValid(place))
    }
    return result
}
