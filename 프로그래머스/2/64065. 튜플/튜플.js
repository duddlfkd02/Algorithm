function solution(s) {

    let result = [];
    
    const tuples = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort(
    (a, b) => a.length - b.length
  );
    
    // 중복 값 제거
    const tupleSet = new Set();
    
    for(const tuple of tuples){ 
        for(const num of tuple){
            if(!tupleSet.has(num)){
                tupleSet.add(num)
                result.push(num)
            }
        }
    }
    return result
}