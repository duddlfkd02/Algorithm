function solution(arr) {
    let result = [];
    arr.map((num) => {
        for(let i = 0; i < num; i++){
            result.push(num)
        }
    })
    return result;
}