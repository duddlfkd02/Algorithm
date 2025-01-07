function solution(numbers, hand) {
    // 키패드를 좌표로 접근
    
    // 누른 숫자 좌표 (0은 따로 계산)
    const curPosition = (num) => {
        if(num === 0) return [3, 1];
        return [Math.floor((num - 1) / 3), (num - 1) % 3]
    }
    
    let leftHand = [3, 0]; // *
    let rightHand = [3, 2]; // #
    let result = "";
    
    for(let num of numbers){
        const target = curPosition(num);
        
        if([1,4,7].includes(num)){
            result += "L";
            leftHand = target;
        }else if([3,6,9].includes(num)){
            result += "R";
            rightHand = target;
        }else {
            // 2,5,8,0
            const leftDistance = Math.abs(leftHand[0] - target[0]) + Math.abs(leftHand[1] - target[1]);
            const rightDistance = Math.abs(rightHand[0] - target[0]) + Math.abs(rightHand[1] - target[1]);
            
            if(leftDistance < rightDistance || (leftDistance === rightDistance && hand === "left")){
                result += "L";
                leftHand = target;
            }else{
                result += "R";
                rightHand = target;
            }
        }   
    }
return result;
}