function solution(n) {
    const triangle = Array.from({length : n}, (_, i) => Array(i+1).fill(0));
    
    const dx = [1, 0, -1];
    const dy = [0, 1, -1];
    
    let x = 0;
    let y = 0;
    let direc = 0;
    let num = 1;
    
    while(num <= (n * (n + 1)) / 2) {
        triangle[x][y] = num++;
        
        let nextX = x + dx[direc];
        let nextY = y + dy[direc];
        
        if(nextX >= n || nextY >= triangle[nextX].length || triangle[nextX][nextY] !== 0){
            direc = (direc + 1) % 3
            nextX = x + dx[direc];
            nextY = y + dy[direc];
        }
        
        x = nextX
        y = nextY
    }
    return triangle.flat();
}
/*
1. 삼각형 형태 배열 만들기
2. 아래로 먼저 채우고 > 오른쪽 방향 채우고 > 대각선 방향 채우기
3. 방향 바꾸는 기준은 N 범위 벗어난 경우 바꿈
4. 2차원 배열을 1차원으로 바꾼다. -> flat() 메서드 사용

*/