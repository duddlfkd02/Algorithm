// 메뉴 조합 만들기
const getCombinations = (arr, selectNum)=>{
    const result = [];
    
    const backtrack = (start, combo) => {
        if(combo.length === selectNum){
            result.push([...combo])
            return
        }
        for(let i = start; i < arr.length; i++){
            combo.push(arr[i]);
            backtrack(i+1, combo)
            combo.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}

function solution(orders, course) {
    const result = []; 

    // 코스 요리의 개수를 하나씩 확인
    for (let courseSize of course) {
        const combinationCount = new Map(); 

        // 주문 목록을 순회하며 가능한 조합 생성
        for (let order of orders) {
            const menuArray = order.split("").sort();
            const combinations = getCombinations(menuArray, courseSize);

            // 생성된 조합 Map에 저장, 빈도수 증가
            for (let combo of combinations) {
                const menuString = combo.join("");
                combinationCount.set(menuString, (combinationCount.get(menuString) || 0) + 1);
            }
        }

        // 가장 많이 주문된 조합
        let maxCount = 2; 
        let mostOrdered = [];
        
        for (let [menu, count] of combinationCount) {
            if (count > maxCount) {
                maxCount = count;
                mostOrdered = [menu];
            } else if (count === maxCount) {
                mostOrdered.push(menu);
            }
        }
        result.push(...mostOrdered);
    }
    return result.sort();
}
