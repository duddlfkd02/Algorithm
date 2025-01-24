function solution(want, number, discount) {
    let count = 0;
    
    // 슬라이딩 윈도우 초기값
    const isValid = (window) => {
        for(let i = 0; i < want.length; i++){
            const product = want[i];
            const require = number[i]
            const canBuy = window.filter((item) => item === product).length;
            
            if(canBuy < require){
                return false;
            }
        }
        return true;
    }
    
    // 10일씩 체크
    for(let i = 0; i <= discount.length; i++){
        const curWindow = discount.slice(i, i + 10);
        if(isValid(curWindow)){
            count++
        }
    }
    return count
    
}