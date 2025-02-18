function solution(n, wires) {
    let minDiff = Infinity;
    
    // 양방향 그래프 만들기
    const graph = []
    for(let i = 1; i <= n; i++){
        graph[i] = [];
    }
    
    for(let [v1, v2] of wires){
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    // 완전탐색 전선 끊기
    for(let [v1, v2] of wires){
        console.log(`끊을 전선: ${v1} - ${v2}`);
        
        graph[v1] = graph[v1].filter(v => v!== v2)
        graph[v2] = graph[v2].filter(v => v!== v1)
        
        // console.log(`graph[${v1}]`, graph[v1]);
        // console.log(`graph[${v2}]`, graph[v2]);
        // console.log("---------------");
        
        let visited = new Set
        let queue = [v1]; // BFS 탐색을 위한 큐
        visited.add(v1); // 시작 노드 방문 처리
        
        while(queue.length > 0){
            let node = queue.shift();
            
            for(let near of graph[node]){
                if(!visited.has(near)){
                    visited.add(near);
                    queue.push(near)
                }
            }
        }
        // 절댓값 최소값 계산
        let size1 = visited.size
        let size2 = n - size1
        let diff = Math.abs(size1 -size2)
        minDiff = Math.min(minDiff,diff);
        
        // 처음 상태로 복구
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    return minDiff;
}