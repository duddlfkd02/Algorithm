function solution(order) {
    let stack = []; // 보조 컨테이너 배열 - 후입선출
    let result = 0; // 최종 택배 실리는 것
    let currentBox = 1;  // 현재 벨트에서 나오는 박스 번호
    
    // order 길이만큼 배열 만들기
    for(let i = 0; i < order.length; i++){
        let target = order[i]
        
    // target보다 작으면 보조컨테이너로
    while(currentBox <= target){
        stack.push(currentBox);
        currentBox++
    }
    
    // 보조 컨테이너에서 꺼낼 수 있는가?
    if(stack[stack.length - 1] === target){
        stack.pop();
        result++
    }else{
        break
    }
}
    return result;
    
    
}