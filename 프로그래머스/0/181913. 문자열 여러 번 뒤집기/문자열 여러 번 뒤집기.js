function solution(my_string, queries) {
    let result = my_string;
    
    for(const [s,e] of queries){
        // 앞, 중간 -> 여기서 뒤집 ,뒤 추출 후 slice 처리
        const front = result.slice(0, s);
        const middle = result.slice(s , e + 1).split("").reverse().join("");
        const end = result.slice(e + 1);
        
        result = front + middle + end;
    }
    return result
}