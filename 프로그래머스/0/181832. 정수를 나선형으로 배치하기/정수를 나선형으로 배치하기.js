function solution(n) {
   const arr = Array.from({length : n} , () => Array(n).fill(0));
    let num = 1;
    let x = 0, y = 0;
    let direction = "right";
    
    while(num <= n * n){
        arr[x][y] = num;
        num++;
        if (direction === "right") {
            if (y + 1 < n && arr[x][y + 1] === 0) {
                y++; // 오른쪽으로 이동
            } else {
                direction = "down"; // 아래로 방향 전환
                x++;
            }
        } else if (direction === "down") {
            if (x + 1 < n && arr[x + 1][y] === 0) {
                x++; // 아래로 이동
            } else {
                direction = "left"; // 왼쪽으로 방향 전환
                y--;
            }
        } else if (direction === "left") {
            if (y - 1 >= 0 && arr[x][y - 1] === 0) {
                y--; // 왼쪽으로 이동
            } else {
                direction = "up"; // 위로 방향 전환
                x--;
            }
        } else if (direction === "up") {
            if (x - 1 >= 0 && arr[x - 1][y] === 0) {
                x--; // 위로 이동
            } else {
                direction = "right"; // 오른쪽으로 방향 전환
                y++;
            }
        }
    }

    return arr;
}