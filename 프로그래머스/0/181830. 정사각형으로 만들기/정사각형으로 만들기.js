function solution(arr) {
    const row = arr.length; // 가로
    const col = arr[0].length; // 세로
    
    if(row > col){
        for(let i = 0; i < row; i++){
            while(arr[i].length < row){
            arr[i].push(0)
            }
        }
    }
    
    if(row < col){
        while(arr.length < col){
            arr.push(Array(col).fill(0))
        }
    }
    

    return arr;
}