function solution(storey) {
    let result = 0;
    
    while(storey > 0){
        let lastDigit = storey % 10; //마지막 자리 수
        
        if(lastDigit > 5){ // 5보다 크면 올리기
            result += (10 - lastDigit);
            storey = Math.floor(storey / 10) + 1;
        }else if(lastDigit < 5){
            result += lastDigit;
            storey = Math.floor(storey / 10);
            
        }else{ // 마지막 수가 5인 경우는 다음 수 보고 결정
            let nextDigit = Math.floor(storey / 10) % 10;
            
            if(nextDigit >= 5){
                result += (10 - lastDigit);
                storey = Math.floor(storey / 10) + 1;
            }else{
                result += lastDigit;
                storey = Math.floor(storey / 10)
            }
        }
    }
    return result;
}